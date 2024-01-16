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
  return matrix.reduce((count, arr) => {
    count += arr.filter(num => num == 0).length;
    return count;
  },0);
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
  let coords = [undefined,undefined];
  matrix.forEach((arr, index1) => {
    if(arr.length == undefined){
      if(arr == element){
        coords[0] = index1;
        coords[1] = 1;
      }
    }
    else{
      arr.forEach((num, index2) => {
        if(num == element){
          coords[0] = index1;
          coords[1] = index2;
        }
      });
    }
  });
  return coords[0] == undefined ? 'Element not found' : `Element found at row ${coords[0]}, column ${coords[1]}`;
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
  matrix.forEach((arr, index1) => arr.forEach((num, index2) => {
    console.log(`Element at row ${index1}, column ${index2} is ${num}`);
  })
  );
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
  return schedule.reduce((obj, arr, index) => {
    const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    obj[weekDay[index]] = arr.reduce((arr, sub) => {
      arr.push(`${sub.subject} with ${sub.teacher}`);
      return arr;
    },[]);
    return obj;
  },{});
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
  return grid.reduce((total, arr) => {
    total += arr.reduce((sum, op) => {
      for(const key in op){
        if(key != 'params'){
          sum += op[key](...op.params);
        }
      }
      return sum;
    },0);
    return total;
  },0);
}



module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
