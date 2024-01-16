# Nested Loops Lab

In this lab, you will be working with nested loops to solve various problems. Nested loops are a powerful tool in programming, allowing you to iterate over multi-dimensional data structures. Use your understanding of nested loops to complete the tasks.

## Getting Started

1. Fork and clone this repository in your command line.
   ```
   git clone <url you provide>
   ```

2. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the necessary libraries to run the tests.

3. Open up the repository in your preferred code editor. Follow the instructions below to complete the Lab.

## Instructions

Complete each function as described in the `index.js` file. You will find detailed instructions in the comments and the accompanying tests will guide you on the requirements for each function.

### Tests

To run the tests, use the following command in the root directory of your repository:

```
npm test
```

This will execute the test suite once.

#### Continuous Test Watching

If you prefer continuous testing, which reruns tests automatically upon file changes, use this command:

```
npm run watch
```

Follow the prompts to exit the continuous test runner.

### Running Individual Test Files

Given the variety of tests in this lab, you might want to execute a single test file. You can do this by appending part of the test file's name to the `npm test` command:

```
npm test countZeroes
```

### Running Specific Tests

To focus on a specific test, add `.only` to either a `test` or `describe` block in your test file:

```js
test.only("counts zeroes correctly in a 2D array", () => {
```

This will run only the specified test or all tests within the described block.

> **NOTE:** Remember to remove `.only` after your test passes to ensure all tests are executed.

### Running Files Manually

For manual testing, execute your file with the following command:

```
node index.js
```

The output will be displayed in your terminal.

