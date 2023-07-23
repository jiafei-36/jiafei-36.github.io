---
title: A Primary Solution to Bessel's Problem
date: 2020-05-13 10:52:17
tags:
  - Mathematics
mathjax: true
---

<span style="color:red">This page intends for testing whether the equation renderer works.</span>

## Bessel's Problem
$$\text{Calculate:}\ \ \ \ \zeta(2)=\sum\limits_{n=1}^{\infty}\frac{1}{n^2}$$

A primary solution:

$\forall x\in ( 0,\frac{\pi}{2}),$  We have  $\sin (x)\lt x\lt\tan (x)$

$$\Rightarrow \frac{1}{\tan x}<\frac{1}{x}<\frac{1}{\sin x}\Rightarrow \cot ^2x<\frac{1}{x^2}<1+\cot ^2x$$

Let  $x_k=\frac{k\pi}{2n+1}$

Consider equation 
$$(\cot x+i)^{2n+1}=(\cot x-i)^{2n+1}$$

$$\Leftrightarrow 2i(C_{2n+1}^1\cot ^{2n}x-C_{2n+1}^3\cot ^{2n-2}x+C_{2n+1}^5\cot ^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}\cot ^0x)=0$$

$$\Leftrightarrow C_{2n+1}^1\cot ^{2n}x-C_{2n+1}^3\cot ^{2n-2}x+C_{2n+1}^5\cot ^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}=0$$

On the other hand, we have  
$$\cos 2x+i\sin 2x=\frac{\cot ^2x-1}{\cot ^2x+1}+i\frac{2\cot x}{\cot ^2x+1}=\frac{(\cot x+i)^2}{(\cot x+i)(\cot x-i)}=\frac{\cot x+i}{\cot x-i}\Rightarrow (\cos 2x+i\sin 2x)^{2n+1}(\cot x-i)^{2n+1}=(\cot x+i)^{2n+1}$$
If we have $x=x_k,k=1,2,\cdots,n$ thus $(\cos 2x+i\sin 2x)^{2n+1}=1$

consider the equation 
$$C_{2n+1}^1\cot ^{2n}x-C_{2n+1}^3\cot ^{2n-2}x+C_{2n+1}^5\cot ^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}=0$$
to be the polynomial equation of $\cot ^2x$, thus it is a $n$ power polynomial equation and have at most $n$ different roots.

Apparently, these $n$ roots are $\cot ^2x_k,k=1,2,\cdots,n$

With Vieta Formula, we have $$\sum\limits_{k=1}^{n}\cot ^2x_k=\sum\limits_{k=1}^{n}\cot ^2\frac{k\pi}{2n+1}=\frac{C_{2n+1}^3}{C_{2n+1}^1}=\frac{n(2n-1)}{3}$$

$$\sum\limits_{k=1}^n\cot ^2x_k<\sum\limits_{k=1}^n\frac{1}{x_k^2}<\sum\limits_{k=1}^n(\cot ^2x_k+1)$$

$$\Rightarrow \frac{n(2n-1)}{3}<(2n+1)^2\sum\limits_{k=1}^n\frac{1}{\pi^2 k^2}<\frac{n(2n-1)}{3}+n\Leftrightarrow \frac{n(2n-1)\pi^2}{3(2n+1)^2}<\sum\limits_{k=1}^n\frac{1}{k^2}<\frac{n(2n+2)\pi^2}{3(2n+1)^2}$$

$$\Rightarrow \lim\limits_{n\to \infty}\sum\limits_{k=1}^n\frac{1}{k^2}=\frac{\pi^2}{6}$$
