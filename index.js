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
  let countOfZero = 0
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j] === 0){
        countOfZero++
      }
      
    }
  }
  return countOfZero
}
console.log(countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]]))

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
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j] === element){
       return `Element found at row ${[i]}, column ${[j]}`
      }
    }
  }
  return 'Element not found'
}
console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5))
  


/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  for(let i=0;i<matrix.length;i++){
   
    for(let j=0; j < matrix[i].length; j++){
      
      console.log(`Element at row ${[i]}, column ${[j]} is ${matrix[i][j]}`)
    }
  }
}
logGridCoordinates([[1, 2], [3, 4]])

/// Problem 4: School Schedule Organizer
const scheduleData = require('./data/schedule.js')

/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const organizedSchedule = {};

  schedule.forEach((day,index) => {
    if(index < daysOfWeek.length){
    const dayName = daysOfWeek[index]
    organizedSchedule[`${dayName}`]=day.map((objKey) => `${objKey.subject} with ${objKey.teacher}`)
    }
    
  })
   
  
return organizedSchedule;
}
console.log(organizeSchedule(scheduleData))

/// Problem 5: Grid Function Calculator (Challenging)
const gridData = require('./data/gridCalc.js')
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  let sumOfResult = 0;
  for(let i=0;i<grid.length;i++){
    let arr = grid[i];
    for(let j=0;j<grid[i].length;j++){
      let array = Object.values(arr[j])
        sumOfResult+= array[0](array[1][0],array[1][1],array[1][2])
      
    }

  }
  return sumOfResult
}
console.log(calculateGridFunctions(gridData))


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
