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
  let count = 0;

  for (let iRow = 0; iRow < matrix.length; iRow++) { //loops through 'row'
    for (let iCol = 0; iCol < matrix[iRow].length; iCol++) {  // loops through 'column
      if (matrix[iRow][iCol] === 0) { // if === 0
        count++; // adds to count when 0 is present
      }
    }
  }
  
  return count;
  
}

console.log(countZeroes([[1, 0, 3], [4, 5, 0], [7, 8, 9]]))
// expected output 2


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
  for (let i = 0; i < matrix.length; i++) { //loops through 'row'
    let arr = matrix[i];
      for (let j = 0; j < arr.length; j++) { // loops through 'column
         if (arr[j] === element) { // checks for element in array 
          return `Element found at row ${i}, column ${j}`;
      }
    }
  }
  return "Element not found";
}

console.log(findElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5))
//expected output 2 'Element found at row 1, column 1'

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
 * logGridCoordinates([[1, 2], [3, 4]])
 */

function logGridCoordinates(matrix) {
  for (let iRow = 0; iRow < matrix.length; iRow++) { //loops through 'row'
    for (let iCol = 0; iCol < matrix[iRow].length; iCol++) {  // loops through 'column
      console.log(`Element at row ${iRow}, column ${[iCol]} is ${matrix[iRow][iCol]}`)
    }
  }
}

logGridCoordinates([[1, 2], [3, 4]]);

/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

// const schedule = require(...data/schedule)

 function organizeSchedule(schedule) {}
//   const organizedScheduledToPrint = {}; // create an object
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; // name element[i]

//   for (let iRow = 0; iRow < schedule.length; iRow++) {
//     for (let iCol = 0; iCol < schedule[iRow].length; iCol++) {
//       const classDetails = schedule[iRow][iCol];
      
//       if (iRow < schedule.length) {
//         const day = days[iCol % days.length];; // using modulo ensures the value is within range and cycle through the days of the week repeatedly as iCol increments, ensuring that the days start from Monday and loops? after reaching Friday.
        
//         if (!organizedScheduledToPrint[day]) {
//           organizedScheduledToPrint[day] = [];
//         }

//         organizedScheduledToPrint[day].push(classDetails);
//       }
//     }
//   }

//   return organizedScheduledToPrint;
// }

// const result = organizeSchedule(schedule);
// console.log(result);





/* expected output 
"Monday": ["Math with Mr. Smith", "History with Mrs. Jones"], 
"Tuesday": ["Science with Mr. Brown", "English with Ms. Davis"] */

/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */

//const grid = require("../data/gridCalc");

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
