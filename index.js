// Imports
const gridCal = require("./data/gridCalc");
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
  // Function implementation.
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0)
        count++
    }
  }
  return count;
}
console.log(countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]]));


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
  // Function implementation.
  let row = null, col = null;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == element) {
        row = i;
        col = j;
      }
    }
  }
  if (row == null || col == null)
    return "Element not found";
  else
    return `Element found at row ${row}, column ${col}`;
}
console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5));

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  // Function implementation.
  let txt = 'End Problem 3';
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == matrix.length - 1 && j == matrix[i].length - 1)
        console.log(`Element at row ${i}, column ${j} is ${matrix[i][j]}`);
      else
        console.log(`Element at row ${i}, column ${j} is ${matrix[i][j]}`)

    }
  }
  return txt;
}
console.log(logGridCoordinates([[1, 2], [3, 4]]));

/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  // Function implementation.
  let retObj = {};
  if (schedule.length == 0)
    return retObj;
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      switch (i) {
        case 0: if (retObj.hasOwnProperty('Monday'))
          retObj.Monday.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        else
          retObj["Monday"] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          break;
        case 1: if (retObj.hasOwnProperty('Tuesday'))
          retObj.Tuesday.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        else
          retObj.Tuesday = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          break;
        case 2: if (retObj.hasOwnProperty('Wednesday'))
          retObj.Wednesday.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        else
          retObj.Wednesday = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          break;
        case 3: if (retObj.hasOwnProperty('Thursday'))
          retObj.Thursday.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        else
          retObj.Thursday = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          break;
        case 4: if (retObj.hasOwnProperty('Friday'))
          retObj.Friday.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        else
          retObj.Friday = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          break;

      }

    }
  }
  console.log(retObj);
  return retObj;
}
// console.log(organizeSchedule(schedule));
// console.log(organizeSchedule([]));



/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  // Function implementation.
  if (grid.length == 0)
    return 0;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cb = Object.values(grid[i][j])[0];
      sum += cb(...Object.values(grid[i][j])[1])
    }
  }
  return sum;
}
console.log(calculateGridFunctions(gridCal));



module.exports = {
  countZeroes,
  findElement,
  logGridCoordinates,
  organizeSchedule,
  calculateGridFunctions
}
