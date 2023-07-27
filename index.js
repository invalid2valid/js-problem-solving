/* 
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
Example Input: "hello world" Example Output: "dlrow olleh"
 */

function reverseString(input) {
  let strSplit = input.split("");
  let reversed = [];
  strSplit.map((i) => {
    reversed.unshift(i);
  });

  return reversed.join("");
}
// Test the function
const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "dlrow olleh"

/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
Example Input: [2, -5, 10, -3, 7] Example Output: 19
 */
function sumPositiveNumbers(inputArr) {
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > 0) {
      result += inputArr[i];
    }
  }
  return result;
}
// Test the function
const inputArray = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(inputArray);
console.log(result); // Output: 19

/* 
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
*/
function findMostFrequentElement(arr) {
  const frequencyObject = {};
  let maxFrequency = 0;
  let mostFrequentElement = "";

  arr.forEach((element) => {
    frequencyObject[element] = (frequencyObject[element] || 0) + 1;
    if (frequencyObject[element] > maxFrequency) {
      maxFrequency = frequencyObject[element];
      mostFrequentElement = element;
    }
  });
  return mostFrequentElement;
}
// Test the function
const inputArray2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result2 = findMostFrequentElement(inputArray2);
console.log(result2); // Output: 3

/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
*/

/*
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Division by zero is not possibale.";
      }
      return num1 / num2;
    default:
      return "Something is wrong Please try again";
  }
}
// Test the function
const number1 = 10;
const number2 = 5;
const operation = "+";
const resultOfCal = calculator(number1, number2, operation);
console.log(resultOfCal); // Output: 15

/**
 * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 */
function generateRandomPassword(length) {
  const allCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=[\]{}|;:,.<>?]).+$/;

  let password = "";
  let condition = true;

  while (condition) {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }

    if (regex.test(password)) {
      condition = false;
    } else {
      password = "";
    }
  }
  return password;
}
// Test the  function
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

/**
 * Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */
function romanToInteger(romanNum) {
  const romanObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNum.length; i++) {
    const currentNum = romanObject[romanNum[i]];
    const nextNum = romanObject[romanNum[i + 1]];

    if (nextNum > currentNum) {
      result += nextNum - currentNum;
      i++;
    } else {
      result += currentNum;
    }
  }
  return result;
}
// Test the function
const romanNum = "III";
console.log(romanToInteger(romanNum));

/**
 * Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */

function secondSmallestNumber(arr) {
  if (arr.length > 1) {
    const sortedArray = arr.sort();
    return sortedArray[1];
  } else {
    return "enter a longer array";
  }
}

console.log(secondSmallestNumber([3, 2, 1])); // Output: 2
