/// Problem 1: Count Zeroes
const exampleSchedule = require("./data/schedule");
const exampleGrid = require("./data/gridCalc");
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */
function countZeroes(matrix) {
  let count = 0;
  // for (let arr of matrix){
  //   for (let num of arr){
  //     if(num==0){
  //       count ++;
  //     }
  //   }
  // }
  matrix.forEach(arr => arr.forEach(num =>{ if(num == 0) count++}));
  return count;
}

// console.log(countZeroes([[1, 0, 4], [4, 5, 0], [1, 8, 9]]))


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
  let found = false
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length;j++){
      if(matrix[i][j]==element){
        found = true
        return `Element found at row ${i}, column ${j}`;
      }
    }
  }
  if(!found) return 'Element not found'
}
// console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 7))


/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length;j++){
      console.log(`Element at row ${i}, column ${j} is ${matrix[i][j]}`);
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

function organizeSchedule(schedule) {
  let daySchedule = {}
  for (let i=0; i<schedule.length;i++){
    let arr=[]
    for (let j=0; j<schedule[i].length;j++){
      arr.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`)
    }
    switch(i){
      case 0:
        daySchedule.Monday = arr;
        break;
      case 1:
        daySchedule.Tuesday = arr;
        break;
      case 2:
        daySchedule.Wednesday = arr;
        break;
      case 3:
        daySchedule.Thuesday = arr;
        break;
      case 4:
        daySchedule.Friday = arr;
        break;
    }
  }
  return daySchedule

}

// console.log(organizeSchedule(exampleSchedule))


/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  let sum =0
  for(let arr of grid){
    for (let obj of arr){
      for(let key in obj){
        if (typeof obj[key] == 'function'){
          //console.log(obj[key].apply(null,obj.params))
          sum += obj[key].apply(null,obj.params)
        }
      }
    }
  }
  return sum
}
// console.log(calculateGridFunctions(exampleGrid));



module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
