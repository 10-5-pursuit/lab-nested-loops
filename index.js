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
  for(const element1 of matrix) {
    let arrSplit = element1;
    for(const element2 of arrSplit) {
      if(element2 === 0) {
        count++;
      }
    }
  }
  return count;
}

countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])


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
  for(const index in matrix) {
    let arrOf2D = matrix[index];
    for(const index2 in arrOf2D) {
      if(arrOf2D[index2] === element){
        return `Element found at row ${index}, column ${index2}`
      }
    }
  }
  return `Element not found`
}

// findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5);


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
  for(const index in matrix) {
    let arrOf2D = matrix[index];
    for(const index2 in arrOf2D) {
      console.log(`Element at row ${index}, column ${index2} is ${arrOf2D[index2]}`)
    }
  }
}

// logGridCoordinates([[1, 2], [3, 4]])


/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

const testSchedule = require('../Lab-Nested-Loops/data/schedule.js');

function organizeSchedule(schedule) {
  // Function implementation.
  let organizedSchedule = {};

      for(const i in schedule) { 
        let currDay = [];
        let daysArr = ['Monday','Tuesday','Wednesday','Thursday','Friday']
        let day = schedule[i];
          for(const j in day) {
            currDay.push(`${day[j].subject} with ${day[j].teacher}`)     
        }
        organizedSchedule[daysArr[i]] = currDay
      }
      
  return organizedSchedule
}

organizeSchedule(testSchedule)

/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */
const data = require('../Lab-Nested-Loops/data/gridCalc.js');

function calculateGridFunctions(grid) {
  // Function implementation.
  let sum = 0;

    for(const i in grid) {
      let arr = grid[i];
        for(const j in arr) {
          let obj = arr[j];
          let currFunction;
          let params = [];
            for(const key in obj) {
              if(typeof obj[key] === 'function') {
                currFunction = obj[key];
              }
              else {
                params = obj[key];
              }
            }
            sum += currFunction(...params);
      }
    }

  return sum;
}

console.log(calculateGridFunctions(data))


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
