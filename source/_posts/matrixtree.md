---
title: Matrix-Tree Theorem
date: 2021-02-11 19:25:12
tags:
  - Mathematics
  - Graph Theory
mathjax: true
---

## Counting of Spanning Tree

### Kirchhoff Matrix

Select a labeling map $\mu:\lbrace 1,2,\cdots,\nu(G)\rbrace\to V(G)$ which is an one-to-one map mapping an index to a vertex in graph $G$, define the **Kirchhoff Matrix** of $G$ as:

$$K(G,\mu)=(a_{i,j})_{n\times n},a_{i,j}=\left\lbrace \begin{aligned}\text{deg}(\mu(i)),&i=j\\ -\text{cnt}(\mu(i),\mu(j)),&i\neq j\end{aligned}\right.$$
where $\text{cnt}(\mu(i),\mu(j))$ represent the amount of edges connecting vertex $m$ and $n$ (if $G$ is a simple graph, $cnt(m,n)\in\lbrace0,1\rbrace$).
We abbreviate $K(G,\mu)$ as $K(G)$ or $K$ if $G$ and $\mu$ is already clarified.

#### Property I

Since the sum of every row and column of $K(G)$ equals $0$, so $\text{det}(K(G))=0$ .

#### Property II

If $\omega(G)>1$, then the determinant of every principal sub-matrix of $K(G)$ equals $0$, where $\omega(G)$ denotes the amount of connected branches of $G$.

***Prove***:

Since $G$ can be divided into $\omega(G)$ connected branches, we can select a labling map $\mu$ such that
$$K(G)=\text{diag}\left(K_1,K_2,\cdots,K_{\omega(G)}\right)$$
where $K_i$ represents the Kirchhoff matrix of the $i$-th connected branch of $G$, whose determinant is of course zero.
We using $C_r(K)$ denoting the sub-matrix gained through removing the $r$-th row and $r$-th column of $K$.
Assuming the vertex $\mu(r)$ we removed is the $j$-th vertex of the $s$-th connected branch, we have:
$$\text{det}(C_r(K))=\text{det}(K_1)\text{det}(K_2)\cdots\text{det}(C_j(K_s))\cdots\text{det}(K_{\omega(G)})=0$$
This is obviously since $\omega(G)>1$ and there are at least $\omega(G)-1$ zero factors.

#### Property III

If $G$ is a tree, thus $\forall r\in\lbrace1,2,\cdots,n\rbrace,\text{det}\left(C_r\left(K(G)\right)\right)=1$ .

***Prove***:

Set the removed vertex $\mu(r)$ as a root, and sort the other vertices by the depth (the distance to root) from mint to max (the order between two vertice having same depth can be treated arbitrarily), we gain:
$$\mu(a_1),\mu(a_2),\cdots,\mu(a_{\nu-1})$$

Meanwhile, applying this sorted order to labeling map as $\mu'(i)=\mu(a_i)$, and gain:

$$K'(G\slash\lbrace{\mu(r)},\mu')=(k'_{i,j})_{\nu-1\times\nu-1}$$

Assuming vertex $\mu'(s)$ has $m$ children, denoted as $\mu'(b_1),\mu'(b_2),\cdots,\mu'(b_m)$ , define an operation as adding $b_1$-th column,$b_2$-th column,...,$b_m$-th column to $b_s$-th column in $K'$. We perform this operation by the order of depth max to min (namely from the right of matrix to the left).

We say an $i$-th column is fine if and only if $k'_{i,i}=1$ and $\forall j\in\lbrace i+1,i+2,\cdots,\nu-1\rbrace,k'_{j,i}=0$. 
For a leaf vertex $\mu'(l)$, since it is in the maximum depth, and it just has its only parent as neighbours, so $k'_{l,l}=1$ and there is no non-zero entries below $k'_{l,l}$






