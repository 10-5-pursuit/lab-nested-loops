// Imports
const gridCalc = require("./data/gridCalc");
const schedule = require("./data/schedule");

/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */
function countZeroes(matrix) {
  let numZeroes = 0;
  for (let matrixIdx = 0; matrixIdx < matrix.length; matrixIdx++) {
    const element = matrix[matrixIdx];
    for (let elementIdx = 0; elementIdx < element.length; elementIdx++) {
      if (element[elementIdx] == 0) {
        numZeroes++;
      }
    }
  }
  return numZeroes;
}

/// Problem 2: Search for an Element
/**
 * Searches for a specific element in a 2D array and returns its position.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @param {number} element - The element to search for.
 * @returns {string} - The position of the element or 'Element not found'.
 * @example
 * // returns 'Element found at row 1, column 1'
 * findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)
 */
function findElement(matrix, element) {
  for (let rIdx = 0; rIdx < matrix.length; rIdx++) {
    for (let cIdx = 0; cIdx < matrix[rIdx].length; cIdx++) {
      if (matrix[rIdx][cIdx] == element) {
        return `Element found at row ${rIdx}, column ${cIdx}`;
      }
    }
  }
  return "Element not found";
}

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      console.log(
        `Element at row ${rowIdx}, column ${colIdx} is ${matrix[rowIdx][colIdx]}`
      );
    }
  }
}

/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to
 * import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  const output = {};
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (let sIdx = 0; sIdx < schedule.length; sIdx++) {
    const day = daysOfTheWeek.shift();
    const classes = [];
    for (let cIdx = 0; cIdx < schedule[sIdx].length; cIdx++) {
      const sub = schedule[sIdx][cIdx];
      classes.push(`${sub.subject} with ${sub.teacher}`);
    }
    output[day] = classes;
  }
  return output;
}

/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid
 * from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function
 * and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  let sum = 0;
  for (let gridIdx = 0; gridIdx < grid.length; gridIdx++) {
    const row = grid[gridIdx];
    for (let idx = 0; idx < row.length; idx++) {
      const opp = row[idx];
      const oppKeys = Object.keys(opp);
      sum += opp[oppKeys[0]](...opp["params"]); // ... => Spread operator
    }
  }
  return sum;
}

module.exports = {
  countZeroes,
  findElement,
  logGridCoordinates,
  organizeSchedule,
  calculateGridFunctions,
};
