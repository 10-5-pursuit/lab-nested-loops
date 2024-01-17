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
  let arrCount = 0;
  for(let i = 0; i < matrix.length; i++){
    let arr = matrix[i]
    for(let k =0; k < arr.length; k++){
      if (arr[k] === 0){
        arrCount++
        
      }
    }
  } 
  return arrCount;
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
  for(let i = 0; i < matrix.length ; i++){
   let arr = matrix[i];
    for(let k = 0; k < arr.length; k++ ){
      if (arr[k] === element){
        return `Element found at row ${i}, column ${k}`;

        }

      }
    }
    
    return `Element not found`;
  }
  console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5 ))



/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  for (let z = 0; z < matrix.length; z++) {
      let arr = matrix[z];
      for (let l = 0; l < arr.length; l++) {
          return(`Element found at row ${z}, column ${l} is ${matrix[z][l]}`);
      }
  }
}




/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {

  const weeklySchedule={

  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
   Friday: []
  }
  
  for(let i=0; i < schedule. length; i++) {
  weeklySchedule ['Monday'] = schedule [0] 
  weeklySchedule ['Tuesday'] = schedule [1]
  weeklySchedule ['Wednesday'] = schedule [2]
  weeklySchedule ['Thursday'] = schedule [3]
  weeklySchedule ['Friday'] = schedule [4]
  for(let j=0; j < schedule [i].length; j++){
  }
  console. log (weeklySchedule);
  }
  
}
const scheduleData = require('./data/schedule.js');

/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  // Function implementation.
}



module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
