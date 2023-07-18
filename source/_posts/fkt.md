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

Assuming we have a regular lattice board of size $m\times n$ (provided that $2\mid mn$). 

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

However, two gird with adjacent rows and same column cannot take state $0$ simultaneously, which means:

$$r_{i} | r_{i+1} =\cdots 11111111 \cdots$$

here "|" denotes the bitwise **OR** operation.

Now we try to traverse the board line by line.

For grid at $i$-th row $j$-th column (marked as $(i,j)$):

+ If $(i,j)$ have been determined, skip to $(i,j+1)$
+ If $(i-1,j)$ takes $0$, $(i,j)$ automatically takes $1$, and then we consider $(i,j+1)$ ;
+ If $(i-1,j)$ takes $1$ :
+ + We put a horizontal tile and $(i,j),(i,j+1)$ both take $1$ , the next one to be considered is $(i,j+2)$
   (Note that we are traversing the board line by line. if $(i,j)$ is covered by a horizontal tile spans $j-1$-th and $j$-th column
    it must have been skipped when we were considering $(i,j-1)$. We cannot choose this way when $j=n$) ;+--+
+ + We put a vertical tile and $(i,j)$ takes $0$, $(i+1,j)$ takes $1$. The next one to be considered is $(i,j+1)$ .

(Assuming a simple extension that $(i,n+1)$ automatically transforming into $ (i+1,1)$.)

Apparently a legal collection of state strings $\lbrack r_1,r_2,\cdots,r_m\rbrack$ determines only one perfect coverage,
and a perfect coverage takes a fixed collection of state strings.

The last row must takes all-ones state ($r_n=\cdots 11111111 \cdots$).

Now setting $DP(i,r_i)$ representing the amount of different perfect coverages when $i$-th row taking state string of $r_i$.








