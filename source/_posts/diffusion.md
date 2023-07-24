---
title: Ennoise and Denoise
date: 2022-09-27 03:12:55
tags:
  - Statistics
  - Machine Learning
mathjax: true
---

## What Underlying the Diffusion?
This article introduces an intuitive analysis of Diffusion Model

### Getting Start from Mean-Shift

Assuming there are $m$ points $x_1,x_2,\cdots,x_m$ on space $\mathbb R^n$. All these points may take place distantly from each other, or scatter in groups. However, we want to get to know the places where these points get intensive.

First, we should consider the probabilistic distribution of $x_i$ by setting that:
$$p(x)=\sum\limits_{i=1}^m\frac1m\delta(x-x_i)$$
The above Dirac distribution function is a classical probabilistic model which is unable to calculate gradient. However, by assuming that the real data distribution is close to the sample points (when sample set is large), we can slightly diffuse the dirac distribution so that their neighbour can be estimated:
$$p_{\sigma}(x)=\sum\limits_{i=1}^m\mathcal N(x;x_i,\sigma)$$
