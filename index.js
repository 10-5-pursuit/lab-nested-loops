const gridCalcu = require("./data/gridCalc");
const schedul = require("./data/schedule");


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
  let count=0
  for (let i=0;i<matrix.length;i++){
    let arr=matrix[i];
    for (j=0;j<arr.length;j++){
    if(arr[j]==0){
      count++
    }
    }
  }return count;
}
// }countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]])


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
  for (let i=0;i<matrix.length;i++){
    let arr=matrix[i];
    for (j=0;j<arr.length;j++){
    if(arr[j]== element){
      return `Element found at row ${i}, column ${j}`
    }
    }
    } return 'Element not found'
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

  for (let i=0;i<matrix.length;i++){
    let arr=matrix[i];
    for (j=0;j<arr.length;j++){
      console.log (`Element at row ${i}, column ${j} is ${arr[j]}`)
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
  let weekSchedule={}
  let weekday=["Monday","Tuesday","Wednesday","Thursday","Friday"]
   for (let i=0;i<schedule.length;i++){
    let sched=[]
    for (j=0;j<schedule[i].length;j++){
    sched.push(`${schedule[i][j].subject} with ${schedule[i][j].teacher}`)
    }
    if (weekday[i]=="Monday"){
      weekSchedule["Monday"]=sched;
    }else if(weekday[i]=="Tuesday"){
      weekSchedule["Tuesday"]=sched;
    }else if(weekday[i]=="Wednesday"){
      weekSchedule["Wednesday"]=sched;
    }else if(weekday[i]=="Thursday"){
      weekSchedule["Thursday"]=sched;
    }else if(weekday[i]=="Friday"){
      weekSchedule["Friday"]=sched;
    } 
 

}   console.log(weekSchedule);
return weekSchedule; 
}organizeSchedule(schedul);
/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

function calculateGridFunctions(grid) {
  let sum=0;
  for (let i=0;i<grid.length;i++){
    for (j=0;j<grid[i].length;j++){
   let gri=grid[i][j];
   for (let k in gri){
    if (typeof gri[k] == 'function'){
      sum += gri[k].apply(null,gri.params)
   } 
}
    }
  }
  return sum;
}


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
