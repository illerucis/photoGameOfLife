This project is inspired by [The Enlightened Game of Life](http://arxiv.org/abs/0810.3179). Built with Javascript and [D3.js](http://d3js.org/)

Description
=====================
A photosensitive game of life where cells gain energy from a propagating electromagnetic wave (Ricker wavelet). The cells live in a finite square well with perfect electrically conducting boundaries. The wave is simulated using the [FDTD method](http://en.wikipedia.org/wiki/Finite-difference_time-domain_method). 

At each generation, cells lose 1% of their energy gained from the wave. If a cell has a certain amount of energy and it's alive, it lives onto the next generation regardless of Conway's rules. 

[Demo](http://sicurelli.com/photoGameOfLife.html)

Future Work
=====================

### Evolution

It would be awesome to encorporate evolution in this CA. Basically, some percentage of the cells would be photosensitive. A cell that is brought to life (exactly three neighbors) becomes photosensitive if at least two of its parents are photosensitive. Evolution can be turned on and off with a switch at the beginning of the simulation. 

### Adjustable Parameters

Knobs to control the strength of the field, photosensitivty of the cells, etc.