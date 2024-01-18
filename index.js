/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */

 const matrix1 = [[1, 0, 3], [4, 5, 0], [7, 8, 9]];

function countZeroes(matrix) {
  let numOfZeroes = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0)
        numOfZeroes++;
    }
  }
  return numOfZeroes;
}

console.log(countZeroes(matrix1));



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
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === element)
        return `Element found at row ${i}, column ${j}`;
    }
  }
  return 'Element not found';
}

console.log(findElement(matrix1, 8));

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */
const matrix2 = [ [1, 2], [3, 4] ];

function logGridCoordinates(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      console.log(`Element at row ${i}, column ${j} is ${matrix[i][j]}`);
    }
  }
}

logGridCoordinates(matrix2);


/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

const scheduleData = require('./data/schedule.js');


function organizeSchedule(schedule) {
  let resultObj = {};
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
        if (i === 0) {
          if (!resultObj['Monday'])
            resultObj['Monday'] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          else resultObj['Monday'].push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        }
        else if (i === 1) {
          if (!resultObj['Tuesday'])
             resultObj['Tuesday'] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          else resultObj['Tuesday'].push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        }
        else if (i === 2) {
          if (!resultObj['Wednesday'])
            resultObj['Wednesday'] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          else resultObj['Wednesday'].push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        }
        else if (i === 3) {
          if (!resultObj['Thursday'])
            resultObj['Thursday'] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          else resultObj['Thursday'].push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        }
        else if (i === 4) {
          if (!resultObj['Friday'])
            resultObj['Friday'] = [`${schedule[i][j].subject} with ${schedule[i][j].teacher}`];
          else resultObj['Friday'].push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`);
        }
      }
    }
  return resultObj;
}

console.log(organizeSchedule(scheduleData));


/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

 const gridData = require('./data/gridCalc.js');

 function calculateGridFunctions(grid) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let args = grid[i][j].params;
      if (grid[i][j].add)
        result.push(grid[i][j].add(...args));
       else if (grid[i][j].double) 
         result.push(grid[i][j].double(...args));
       else if (grid[i][j].multiply) 
         result.push(grid[i][j].multiply(...args));
       else if (grid[i][j].subtract) 
         result.push(grid[i][j].subtract(...args));
       else if (grid[i][j].constant) 
         result.push(grid[i][j].constant(...args))
       else if (grid[i][j].square) 
         result.push(grid[i][j].square(...args));
       else if (grid[i][j].divide) 
         result.push(grid[i][j].divide(...args));
       else if (grid[i][j].addThree) 
         result.push(grid[i][j].addThree(...args));
       else if (grid[i][j].max)
         result.push(grid[i][j].max(...args));
    }
  }
  return result.reduce( (accumulator, currentValue) =>
      accumulator + currentValue, 0
    );
}

console.log(calculateGridFunctions(gridData));







module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
