const { countZeroes, 
        findElement, 
        logGridCoordinates,
        organizeSchedule, 
        calculateGridFunctions  } = require('../index.js');

describe('countZeroes', () => {
  test('correctly counts the number of zeroes in a 2D array', () => {
    const matrix1 = [
      [1, 0, 3],
      [4, 5, 0],
      [7, 8, 9]
    ];
    expect(countZeroes(matrix1)).toBe(2);

    const matrix2 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(countZeroes(matrix2)).toBe(9);

    const matrix3 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(countZeroes(matrix3)).toBe(0);
  });
});
describe('findElement', () => {
    test('finds an element in the matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      expect(findElement(matrix, 5)).toBe('Element found at row 1, column 1');
      expect(findElement(matrix, 9)).toBe('Element found at row 2, column 2');
    });
  
    test('returns not found for an element not in the matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      expect(findElement(matrix, 10)).toBe('Element not found');
    });
  });


describe('logGridCoordinates', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('logs coordinates and values of a small 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    logGridCoordinates(matrix);
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 0 is 1');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 1 is 2');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 0 is 3');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 1 is 4');
  });

  test('logs coordinates and values of a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    logGridCoordinates(matrix);
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 0 is 1');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 1 is 2');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 2 is 3');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 0 is 4');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 1 is 5');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 2 is 6');
    expect(console.log).toHaveBeenCalledWith('Element at row 2, column 0 is 7');
    expect(console.log).toHaveBeenCalledWith('Element at row 2, column 1 is 8');
    expect(console.log).toHaveBeenCalledWith('Element at row 2, column 2 is 9');
  });

  test('logs correctly for an empty matrix', () => {
    const matrix = [];
    logGridCoordinates(matrix);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('logs correctly for a matrix with one row', () => {
    const matrix = [
      [1, 2, 3]
    ];
    logGridCoordinates(matrix);
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 0 is 1');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 1 is 2');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 2 is 3');
  });

  test('logs correctly for a matrix with mixed data types', () => {
    const matrix = [
      ['a', 'b'],
      [true, false],
      [null, undefined]
    ];
    logGridCoordinates(matrix);
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 0 is a');
    expect(console.log).toHaveBeenCalledWith('Element at row 0, column 1 is b');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 0 is true');
    expect(console.log).toHaveBeenCalledWith('Element at row 1, column 1 is false');
    expect(console.log).toHaveBeenCalledWith('Element at row 2, column 0 is null');
    expect(console.log).toHaveBeenCalledWith('Element at row 2, column 1 is undefined');
  });
});


describe('organizeSchedule', () => {
  test('organizes a typical weekly schedule', () => {
    const schedule = [
      [{ subject: "Math", teacher: "Mr. Smith" }, { subject: "History", teacher: "Mrs. Jones" }],
      [{ subject: "Science", teacher: "Mr. Brown" }, { subject: "English", teacher: "Ms. Davis" }]
    ];
    const organized = organizeSchedule(schedule);
    expect(organized).toEqual({
      "Monday": ["Math with Mr. Smith", "History with Mrs. Jones"],
      "Tuesday": ["Science with Mr. Brown", "English with Ms. Davis"]
    });
  });

  test('handles an empty schedule', () => {
    const schedule = [];
    const organized = organizeSchedule(schedule);
    expect(organized).toEqual({});
  });

  test('organizes a schedule with varying number of classes per day', () => {
    const schedule = [
      [{ subject: "Math", teacher: "Mr. Smith" }],
      [{ subject: "Science", teacher: "Mr. Brown" }, { subject: "English", teacher: "Ms. Davis" }, { subject: "Art", teacher: "Ms. Lively" }]
    ];
    const organized = organizeSchedule(schedule);
    expect(organized).toEqual({
      "Monday": ["Math with Mr. Smith"],
      "Tuesday": ["Science with Mr. Brown", "English with Ms. Davis", "Art with Ms. Lively"]
    });
  });
});


describe('calculateGridFunctions', () => {
  test('calculates the sum of results from a grid of functions with unique names', () => {
    const grid = [
      [
        { add: (x, y) => x + y, params: [1, 2] },          // 3
        { double: x => x * 2, params: [5] },              // 10
        { multiply: (x, y) => x * y, params: [3, 3] }     // 9
      ],
      [
        { subtract: (x, y, z) => x - y - z, params: [10, 3, 2] }, // 5
        { constant: () => 15, params: [] },                        // 15
        { square: x => x ** 2, params: [4] }                       // 16
      ],
      [
        { divide: (a, b) => a / b, params: [20, 4] },     // 5
        { addThree: x => x + 3, params: [7] },            // 10
        { max: (x, y) => Math.max(x, y), params: [5, 9] } // 9
      ]
    ];
    expect(calculateGridFunctions(grid)).toBe(82); // Sum of all function results
  });

  test('handles an empty grid', () => {
    const grid = [];
    expect(calculateGridFunctions(grid)).toBe(0);
  });

  test('handles a grid with a single function', () => {
    const grid = [[{ constant: () => 42, params: [] }]];
    expect(calculateGridFunctions(grid)).toBe(42);
  });
});
