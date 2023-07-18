---
title: bessel
date: 2020-05-13 10:52:17
tags:
  - Mathematics
mathjax: true
top_img: http://home.ustc.edu.cn/~pscgylotti/images/bg15.jpg
cover: http://home.ustc.edu.cn/~pscgylotti/images/bg15.jpg
---

## Bessel's Problem
$$\text{Calculate:}\ \ \ \ \zeta(2)=\sum\limits_{n=1}^{\infty}\frac{1}{n^2}$$
A primary solution:
$\forall x\in ( 0,\frac{\pi}{2}),$  We have  $sin(x)<x<tan(x)$
$\therefore \frac{1}{tanx}<\frac{1}{x}<\frac{1}{sinx}\Rightarrow cot^2x<\frac{1}{x^2}<1+cot^2x$
Let  $x_k=\frac{k\pi}{2n+1}$
Consider equation $(cotx+i)^{2n+1}=(costx-i)^{2n+1}\Leftrightarrow 2i(C_{2n+1}^1cot^{2n}x-C_{2n+1}^3cot^{2n-2}x+C_{2n+1}^5cot^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}cot^0x)=0\Leftrightarrow C_{2n+1}^1cot^{2n}x-C_{2n+1}^3cot^{2n-2}x+C_{2n+1}^5cot^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}=0$
On the other hand, we have  $cos2x+isin2x=\frac{cot^2x-1}{cot^2x+1}+i\frac{2cotx}{cot^2x+1}=\frac{(cotx+i)^2}{(cotx+i)(cotx-i)}=\frac{cotx+i}{cotx-i}\Rightarrow (cos2x+isin2x)^{2n+1}(cotx-i)^{2n+1}=(cotx+i)^{2n+1}$
If we have $x=x_k,k=1,2,\cdots,n$ thus $(cos2x+isin2x)^{2n+1}=1$
consider the equation $C_{2n+1}^1cot^{2n}x-C_{2n+1}^3cot^{2n-2}x+C_{2n+1}^5cot^{2n-4}x-\cdots+(-1)^nC_{2n+1}^{2n+1}=0$  to be the polynomial equation of $cot^2x$, thus it is a $n$ power polynomial equation and have at most $n$ different roots.
Apparently, these $n$ roots are $cot^2x_k,k=1,2,\cdots,n$
With Vieta Formula, we have $\sum\limits_{k=1}^{n}cot^2x_k=\sum\limits_{k=1}^{n}cot^2\frac{k\pi}{2n+1}=\frac{C_{2n+1}^3}{C_{2n+1}^1}=\frac{n(2n-1)}{3}$
$\sum\limits_{k=1}^ncot^2x_k<\sum\limits_{k=1}^n\frac{1}{x_k^2}<\sum\limits_{k=1}^n(cot^2x_k+1)$
$\therefore \frac{n(2n-1)}{3}<(2n+1)^2\sum\limits_{k=1}^n\frac{1}{\pi^2 k^2}<\frac{n(2n-1)}{3}+n\Leftrightarrow \frac{n(2n-1)\pi^2}{3(2n+1)^2}<\sum\limits_{k=1}^n\frac{1}{k^2}<\frac{n(2n+2)\pi^2}{3(2n+1)^2}$
$\therefore \lim\limits_{n\to \infty}\sum\limits_{k=1}^n\frac{1}{k^2}=\frac{\pi^2}{6}$
