/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
 * countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])
 */
let matrix = [[1, 0, 3], [4, 5, 0], [7, 8, 9]];
function countZeroes(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++){
   for (let x = 0; x < matrix[i].length; x++){
      // console.log(matrix[i][x])
     if (matrix[i][x] === 0){
     count += 1
     }
    }
  }
    return count 
  }
  
  console.log(countZeroes(matrix))



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
  for (let i = 0; i < matrix.length; i++)
    for (let w = 0; w < matrix[i].length; w++){
  if (matrix[i][w] === element){
      return `Element found at row ${i}, column ${w}`
  }
}
  return "Element not found"
}

console.log(findElement(matrix, 9))

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */
function logGridCoordinates(matrix) {
  for (let i = 0; i < matrix.length; i++)
    for (let x = 0; x < matrix[i].length; x++){
      console.log(`Element at row ${[i]}, column ${x} is ${matrix[i][x]}` )
    }
}
logGridCoordinates(matrix)

/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

function organizeSchedule(schedule) {
  let scheduleObj = {};
for (let i = 0; i < schedule.length; i++) {
  for (let x = 0; x < schedule[i].length; x++) {
  if (i === 0) {
    if (!scheduleObj.Monday)
      scheduleObj.Monday = []
    scheduleObj.Monday.push(`${schedule[i][x].subject} with ${schedule[i][x].teacher}`)
    
  }
    if (i === 1) {
    if (!scheduleObj.Tuesday)
      scheduleObj.Tuesday = []
    scheduleObj.Tuesday.push(`${schedule[i][x].subject} with ${schedule[i][x].teacher}`)
  }
    if (i === 2) {
    if (!scheduleObj.Wednesday)
      scheduleObj.Wednesday = []
    scheduleObj.Wednesday.push(`${schedule[i][x].subject} with ${schedule[i][x].teacher}`)
  }
    
    if (i === 2) {
    if (!scheduleObj.Thursday)
      scheduleObj.Thursday = []
    scheduleObj.Thursday.push(`${schedule[i][x].subject} with ${schedule[i][x].teacher}`)
  }
    if (i === 2) {
    if (!scheduleObj.Friday)
      scheduleObj.Friday = []
    scheduleObj.Friday.push(`${schedule[i][x].subject} with ${schedule[i][x].teacher}`)
}
}
 }
   return scheduleObj;
}



/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

  function calculateGridFunctions(grid) {
    let total = 0
    for (let i = 0; i < grid.length; i++){
      for (let x = 0; x < grid[i].length; x++){
        for (let key in grid[i][x]){
          if (key!== "params")
            total += grid[i][x][key](...grid[i][x].params)
        }
      }
    }
    return total
  }




module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
