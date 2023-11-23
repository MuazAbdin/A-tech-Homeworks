function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //1
    sum += arr[i]; //2
  }
  return sum;
}

function findMinValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      //3
      min = arr[i];
    }
  }
  return min;
}

function reverseString(str) {
  if (typeof str !== "string") {
    return;
  }
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //4
    reversed += str.charAt(i);
  }
  return reversed;
}

function calculateProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    //5
    product *= arr[i];
  }
  return product;
}

function checkPalindrome(str) {
  let reversed = reverseString(str);
  if (str === reversed) {
    return true;
  }
  return false;
}

function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      //6
      max = arr[i];
    }
  }
  return max;
}

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count += 1;
    }
  }
  return count;
}

function isEven(num) {
  if (num % 2 === 0) {
    //7
    return true;
  }
  return false;
}

function concatenateStrings(str1, str2) {
  let combined = str1 + str2; //8
  return combined;
}

function main() {
  const sum = sumArrayElements([1, 2, 3, 4, 5]);
  const minValue = findMinValue([10, 20, 3, 40]);
  const reversed = reverseString("hello");
  const product = calculateProduct([1, 2, 3, 4, 5]);
  const isPalindrome = checkPalindrome("radar");
  const maxValue = findMaxValue([10, 20, 30, 40]);
  const occurrences = countOccurrences([1, 2, 3, 4, 3, 2, 1], 3);
  const isNumEven = isEven(4);
  const concatenatedString = concatenateStrings("Hello", "World");

  console.log({
    sum,
    minValue,
    reversed,
    product,
    isPalindrome,
    maxValue,
    occurrences,
    isNumEven,
    concatenatedString,
  });
}

main();
