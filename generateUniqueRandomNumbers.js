/**
 * Generates an array of unique random integers within a specified range.
 *
 * @param {number} numbersAmount - The number of random integers to generate.
 * @throws {Error} If the input value is not a positive integer.
 * @returns {number[]} An array containing unique random integers.
 */

const generateUniqueRandomNumbers = (numbersAmount) => {
  if (!Number.isInteger(numbersAmount) || numbersAmount <= 0) {
    throw new Error("Invalid value has been passed to the function");
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < numbersAmount) {
    const randomNumber = Math.floor(Math.random() * numbersAmount) + 1;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
};

console.log(`10 unique numbers: ${generateUniqueRandomNumbers(10)}`);
console.log(`10 0000 unique numbers: ${generateUniqueRandomNumbers(10000)}`);

