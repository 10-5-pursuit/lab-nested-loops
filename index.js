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
  let count  = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] == 0) count ++;
  return count;
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
  // Function implementation.
  for (let row = 0; row < matrix.length; row++)
    for (let column = 0; column < matrix[row].length; column++)
      if (matrix[row][column] == element)
        return `Element found at row ${row}, column ${column}`;
  return 'Element not found';
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
  // Function implementation.
  for (let row = 0; row < matrix.length; row++)
  for (let column = 0; column < matrix[row].length; column++)
    console.log(`Element at row ${row}, column ${column} is ${matrix[row][column]}`);
}


/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  // Function implementation.
  let organized = {};
  let classStatement = "";
  for (let day = 0; day < schedule.length; day++)
    for (let time = 0; time < schedule[day].length; time++){
      classStatement = `${schedule[day][time].subject} with ${schedule[day][time].teacher}`;
      switch(day) {
        case (0):
          if (!organized.Monday)
            organized.Monday = [];
          organized.Monday.push(classStatement);
          break;
        case (1):
          if (!organized.Tuesday)
            organized.Tuesday = [];
          organized.Tuesday.push(classStatement);
          break;
        case (2):
          if (!organized.Wednesday)
            organized.Wednesday = [];
          organized.Wednesday.push(classStatement);
          break;
        case (3):
          if (!organized.Thursday)
            organized.Thursday = [];
          organized.Thursday.push(classStatement);
          break;
        case (4):
          if (!organized.Friday)
            organized.Friday = [];
          organized.Friday.push(classStatement);
          break;
      }
    }
  return(organized);
}


/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  // Function implementation.
  let grandTotal = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++){
      let functionAndParams = grid[i][j];
      for (key in functionAndParams)
        if (key != "params") 
          grandTotal += functionAndParams[key](...functionAndParams.params);
    }
  return grandTotal;
}


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
