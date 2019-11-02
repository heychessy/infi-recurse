README

[![Build Status](https://travis-ci.com/heychessy/infi-recurse.svg?branch=master)](https://travis-ci.com/heychessy/infi-recurse)

### Program

A recursive method that creates a infinite shapes of a given height and Width and recursively create inner shapes of same Height - Padding and Width - Padding until there is no space left in the last shape.

### Installation

```
git clone https://github.com/heychessy/infi-recurse.git
cd infi-recurse
npm install
```

### Usage

```
npm test
npm start [width] [height] [padding]
```

eg;

```
npm start 20 20 4
```

### Time & Space Complexity

- Time: The functions runs until there is no space left to draw (height (H) or width (W) is less than padding (P)). For each iteration, height & width is reduced by padding/2 (since padding is divided by 2 for all sides). Therefore,T: O(2 x min(height,width)/padding) which is equivalent to O(min(H,W)/P).
- For each iteration, loop is ran to equivalent to height & width to fill the result matrix, O(H) + O(W). T: O(max(H,W))
- Creation of result matrix. T:O(HxW)
- So asymptotically,
- if H>W, T:O(H^2)
- else H<W, T:O(W^2)

- Space: We require height(H) X width(W) space to store the matrix. We require height X width to create the shape. O(HxW) + O(HxW). Stack space for recursion. So asymptotically,S: O(HxW).
