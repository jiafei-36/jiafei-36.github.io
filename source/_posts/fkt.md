---
title: Fisher-Kasteleyn-Temperley Algorithm
date: 2021-07-25 23:44:51
tags:
  - Mathematics
  - Algorithm
mathjax: true
---

## Intro to the problem

### Domino Tiling Question

#### Question Description

Assuming we have a regular grid board of size $m\times n$ (provided that $2\mid mn$). 

A perfect coverage is to completely covering the entire board with $1\times 2$ tiles which guaranteeing no extra parts and no overlap.

We want to know there are how many different perfect coverages (Let it be $f(m,n)$).

#### Degenerate Case

Provided $m=1$, we can easily derive that $f(1,n)=1$.

Provided $m=2$, by simply assuming two states of the last two columns, we know that $f(2,n)=f(2,n-1)+f(2,n-2),f(2,1)=1,f(2,2)=2$, which is reduced to the Fibonacci Series.

#### Dynamic Programming

Otherwise considering the cases how does a grid at $k$-th row get covered:
1. Get covered by a vertical tile spans $k$-th and $k+1$-th row ;
2. Get covered by a vertical tile spans $k-1$-th and $k$-th row ;
3. Get covered by a horizontal tile.

In fact, we can treat case 2 and 3 as the same state, since they share the truth that they do not "protrude to the next row".

we use $0$ denote case 1, and $1$ for case 2 and 3. For each row of the board, we can write its state string down like:

$$r_i=\cdots 10000111\cdots$$

However, two gird with adjacent rows and same column cannot take state $0$ simultaneously (a so-called double $0$ conflit), which means:

$$r_{i} | r_{i+1} =\underbrace{\cdots 11111111\cdots}_{\text{all is 1}}$$

here "|" denotes the bitwise **OR** operation.

Now we try to traverse the board line by line.

For grid at $i$-th row $j$-th column (marked as $(i,j)$):

+ If $(i,j)$ have been determined, skip to $(i,j+1)$
+ If $(i-1,j)$ takes $0$, $(i,j)$ automatically takes $1$, and then we consider $(i,j+1)$ ;
+ If $(i-1,j)$ takes $1$ :
  + We put a horizontal tile and $(i,j),(i,j+1)$ both take $1$ , the next one to be considered is $(i,j+2)$
   (Note that we are traversing the board line by line. if $(i,j)$ is covered by a horizontal tile spans $j-1$-th and $j$-th column
    it must have been skipped when we were considering $(i,j-1)$. We cannot choose this way when $j=n$) ;
  + We put a vertical tile and $(i,j)$ takes $0$, $(i+1,j)$ takes $1$. The next one to be considered is $(i,j+1)$ .

Assuming a simple extension that $(i,n+1)$ automatically transforms into $ (i+1,1)$.

Apparently a legal collection of state strings $\lbrack r_1,r_2,\cdots,r_m\rbrack$ determines only one perfect coverage, and a perfect coverage takes a fixed collection of state strings.

The last row must takes all-ones state ($r_m=\cdots 11111111 \cdots$).

To solve this, we first look into the state of two adjacent rows $r_i,r_{i+1}$:

We say two state string $s_1,s_2$ is compatible, if and only if row $s_1|s_2=1$ (No double $0$ conflict) while $r_i=s_1$ and $r_{i+1}=s_2$ indeed be fully convered (it is not required to consider whether there is a vertical tile span to $i-1$-th row or $i+2$-th row, we can just take care of $r_i$ and $r_{i+1}$).

All those compatible state string pairs can be calculated with a Deep First Search:

+ We define the searching state as $(s_1,s_2,l)$ where $l\in\lbrace 0,1,\cdots,n\rbrace$. Assuming $s_1=a_1a_2a_3\cdots a_n,s_2=b_1b_2b_3\cdots b_n$, $l$ denotes that $a_1a_2\cdots a_l$ and $b_1b_2\cdots b_l$ is determined, while $a_{l+1}a_{l+2}\cdots a_n$ and $b_{l+1}b_{l+2}\cdots b_n$ remain undetermined;
+ We start from state $(X,X,0)$ (since $l=0$ implies no state is determined, we use $X$ denotes a casual state);
+ When it cames to state $(s_1=a_1a_2\cdots a_n,s_2=b_1b_2\cdots b_n,l)$ the next hops are:
  + $(s_1\mid_{a_{l+1}=1,a_{l+2}=1},s_2\mid_{b_{l+1}=1,b_{l+2}=1},l+2)$ (If we put a horizontal tile at $i+1$-th row spans $l+1$-th column and $l+2$-th column ,then $a_{i+1}$ and $a_{i+2}$ must not take $0$ ,or the vertical tile will protrude into the horizontal one) ;
  + $(s_1\mid_{a_{l+1}=0},s_2\mid_{b_{l+1}=1},l+1)$ (place a vertical tile spans $i$-th row and $i+1$-th row) ;
  + $(s_1\mid_{a_{l+1}=1},s_2\mid_{b_{l+1}=0},l+1)$ (place a vertical tile spans $i+1$-th row and $i+2$-th row).
+ for any searching state with $l=n$ rightly, record its state string pair as a compatible state pair and stop jumping to next state. (if $l=n+1$, do not record it, since it is an illegal form.)
 
We can easily write down the searching split tree equation as 

$$f(l)=2f(l+1)+f(l+2)+1,f(n)=1$$

and a trivial transformation 

$$f(l)+(\sqrt2-1)f(l+1)+\frac{\sqrt2}{2}=(\sqrt2+1)\left\lbrack f(l+1)+(\sqrt2-1)f(l+2)+\frac{\sqrt2}{2}\right\rbrack$$

which implies the above searching algorithm has a temporal complexity of $\mathcal O\left((\sqrt2+1)^n\right)$ .

The record of all compatible string pairs is marked as 

$$CSP=\left\lbrace(s_1,s_2)_1,(s_1,s_2)_2,(s_1,s_2)_3,\cdots,(s_1,s_2)_p\right\rbrace$$

where $p$ is the amount of all compatible string pairs satisfying $p=\mathcal O \left((\sqrt2+1)^n\right)$ too.

Now setting $DP(i,r_i)$ representing the amount of different perfect coverages (till $i$-th row, that is to say the $1$-th to $i$-th rows are all fulfilled without conflicts) when $i$-th row taking state string of $r_i$.

We can initiate $DP(0,r_0)$ as:

$$DP(0,r_0)=\left\lbrace\begin{aligned}1,~\text{if}~r_0=\underbrace{\cdots 111111\cdots}_{\text{all is 1}}\\0,~\text{Otherwise.}\end{aligned}\right.$$

This is a compatible extension, as "0-th" row would not protrude to $1$-th row if and only if it takes all state 1. 

For any $i\in\lbrace 1,2,\cdots,n\rbrace$ , to calculate $DP(i,r_i)$ , a zero initialization is applied, then follows the calculation procedure:


$$\text{Iterating}~i~\text{From}~1~\text{to}~m:$$

$$\text{Iterating}~j~\text{From}~1~\text{to}~p:DP\left(i,\left(CSP_j\right)_{s_2}\right)+=DP\left(i-1,\left(CSP_j\right)_{s_1}\right)$$

Since $r_m$ must takes $\underbrace{\cdots 111111\cdots}_{\text{all is 1}}$, the result shall be $DP\left(m,\underbrace{\cdots 111111\cdots}_{\text{all is 1}}\right)$

Clearly the proposed Dynamic Programming method has a temporal complexity of $\mathcal O\left(\text{max}\lbrace m,n\rbrace(\sqrt2+1)^{\text{min}\lbrace m,n\rbrace}\right)$, which is non-polynomial.

### Bipartite Planar Graph

Let get back to the title, the domino tiling problem mentioned above can be analyzed with another discrete mathematical structure, the Graph Theory.

A Bipartite Planar Graph (BPG) is a graph both bipartite and planar. Note that **biplanar** graph is not an abbreviation for BPG, as
**biplanar** refers to another term of **thickness**.

If we apply a chess board dyeing (which is black and white) to the grid board, and see each square as a graph vertex. Assuming there is an edge between two vertices if and only if the two squares they representing is adjacent in row or column.

The graph constructed above is a BPG, since it can be drawn down as a planar figure, and also the black and white vertices are the two partitions.

Thus if we put a tile on the board, it mean we choose a pair of black and white vertices, we make a **match**.

The amount of perfect coverage automatically transforms into the amount of perfect match of a BPG.

### Permanent

If the two partitons ($V_1,V_2$) of a bipartite graph $G$ have equal vertices count ($|V_1|=|V_2|=\nu$), then we can write down a Bipartite Adjacent Matrix as:
$$BiA=\left(a_{i,j}\right)_{\nu\times\nu},a_{i,j}=\left\lbrace \begin{aligned}1,~\text{if}~v_i~\text{in}~V_1~\text{is adjacent to}~v_j~\text{in}~V2\\0,~\text{Otherwise}\end{aligned}\right.$$






![Directing](/images/Directional.svg)
