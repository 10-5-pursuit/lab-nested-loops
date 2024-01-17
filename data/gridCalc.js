module.exports = [
  [
    { add: (x, y) => x + y, params: [1, 2] } ,
    { double: x => x * 2, params: [5] },
    { multiply: (x, y) => x * y, params: [3, 3] }
  ],
  [
    { subtract: (x, y, z) => x - y - z, params: [10, 3, 2] },
    { constant: () => 15, params: [] },
    { square: x => x ** 2, params: [4] }
  ],
  [
    { divide: (a, b) => a / b, params: [20, 4] },
    { addThree: x => x + 3, params: [7] },
    { max: (x, y) => Math.max(x, y), params: [5, 9] }
  ]
];

  