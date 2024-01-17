const grid = require("./data/gridCalc")
const schedule = require("./data/schedule")


/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2    0           1          2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */
function countZeroes(matrix) {
  let count = 0;
  matrix.forEach(arr => arr.forEach(num => num === 0 ? count++ : num))
  return count
}
// let countOfZeros = 0;
// for(let i = 0; i < matrix.length; i++) {
//   let arr = matrix[i];
//   for(let j = 0; j < arr.length; j++) {
//     if(arr[j] === 0){
//       countOfZeros++
//     }
//   }
// }
// return countOfZeros

// console.log(countZeroes([
//   [1, 0, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]))

/// Problem 2: Search for an Element
/**
 * Searches for a specific element in a 2D array and returns its position.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @param {number} element - The element to search for.
 * @returns {string} - The position of the element or 'Element not found'.
 * @example
 * // returns 'Element found at row 1, column 1'
 * findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)
 * 'Element found at row 1, column 1'
 */
function findElement(matrix, element) {
  let value;
  matrix.some((arr, i) => arr.forEach((num, j) => num === element ? value = `Element found at row ${i}, column ${j}` : num))
  return value ? value : 'Element not found'
}
// for(let i = 0; i < matrix.length; i++) {
//   let arr = matrix[i];
//   for(let j = 0; j < arr.length; j++) {
//     if(arr[j] === element) {
//       return `Element found at row ${i}, column ${j}`
//     }
//   }
// }
// return 'Element not found'

console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 12))

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 *  logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */
// logGridCoordinates([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])
function logGridCoordinates(matrix) {
  matrix.forEach((arr, i) => arr.forEach((num, j) => console.log(`Element at row ${i}, column ${j} is ${num}`)))
}
// for(let i = 0; i < matrix.length; i++) {
//   let arr = matrix[i];
//   for(let j = 0; j < arr.length; j++) {
//     console.log(`Element at row ${i}, column ${j} is ${arr[j]}`)
//   }
// }
logGridCoordinates([[1, 2], [3, 4]])
/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  const schoolDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return  schedule.reduce((object, day, i) => {
    object[schoolDays[i]] = day.reduce((arr, sub) => {
      arr.push(`${sub.subject} with ${sub.teacher}`)
      return arr
    },[])
    return object
  },{})
}
// let organizedObject = {};
// for(let i = 0; i < schedule.length; i++) {
//   let arr = schedule[i];
//   let array = [];
//   for(let j = 0; j < arr.length; j++) {
//     array.push(`${arr[j].subject} with ${arr[j].teacher}`)
//     organizedObject[schoolDays[i]] = array;
//   }
// }
// return organizedObject;

console.log(organizeSchedule(schedule))
/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */
function calculateGridFunctions(grid) {
  return grid.reduce((sum, arr) => {
    sum += arr.reduce((total, arr2) => {
      let array = Object.values(arr2)
      total += array[0](...array[1])
      return total
    },0)
    return sum
  },0) 
}
// let sum = 0
// for(let i = 0; i < grid.length; i++) {
//   let arr = grid[i];
//   for(let j = 0; j < arr.length; j++) {
//     let array = Object.values(arr[j])
//     let func = array[0]; // function : (x, y) => x + y
//     sum += func(...array[1]) // function add(index1,index2)
//   }
// }
// return sum

console.log(calculateGridFunctions(grid))




module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
