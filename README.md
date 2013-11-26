This project is inspired by [The Enlightened Game of Life](http://arxiv.org/abs/0810.3179). 

Description
=====================
A photosensitive game of life where cells gain energy from a propagating electromagnetic wave (Ricker wavelet). The cells live in a finite square well with perfect electrically conducting boundaries. The wave is simulated using the [FDTD method](http://en.wikipedia.org/wiki/Finite-difference_time-domain_method). 

At each generation, cells lose 1% of their energy gained from the wave. If a cell has a certain amount of energy and it's alive, it lives onto the next generation regardless of Conway's rules. 

[Demo](sicurelli.com/photoGameOfLife.html)