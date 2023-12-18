// Anonymous function & IIFE (Immediately Invoked Function Expression)
(function() {
    // Sample array
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    // Print odd numbers in an array
    const oddNumbers = numbers.filter(function(num) {
      return num % 2 !== 0;
    });
    console.log("Odd numbers:", oddNumbers);
  
    // Convert all the strings to title caps in a string array
    const stringArray = ["apple", "banana", "cherry"];
    const titleCapsArray = stringArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log("Title caps array:", titleCapsArray);
  
    // Sum of all numbers in an array
    const sum = numbers.reduce(function(acc, num) {
      return acc + num;
    }, 0);
    console.log("Sum:", sum);
  
    // Return all the prime numbers in an array
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    const primeNumbers = numbers.filter(function(num) {
      return isPrime(num);
    });
    console.log("Prime numbers:", primeNumbers);
  
    // Return all the palindromes in an array
    const words = ["level", "hello", "radar", "world"];
    const palindromes = words.filter(function(word) {
      return word === word.split('').reverse().join('');
    });
    console.log("Palindromes:", palindromes);
  
    // Return median of two sorted arrays of the same size
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const combinedArray = [...arr1, ...arr2];
    combinedArray.sort(function(a, b) {
      return a - b;
    });
    const medianIndex = Math.floor(combinedArray.length / 2);
    const median = (combinedArray.length % 2 === 0)
      ? (combinedArray[medianIndex - 1] + combinedArray[medianIndex]) / 2
      : combinedArray[medianIndex];
    console.log("Median:", median);
  
    // Remove duplicates from an array
    const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = Array.from(new Set(arrayWithDuplicates));
    console.log("Unique array:", uniqueArray);
  
    // Rotate an array by k times
    const rotateArray = function(arr, k) {
      return arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));
    };
    const rotatedArray = rotateArray(numbers, 3);
    console.log("Rotated array:", rotatedArray);
  })();
  



  // Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // Convert all the strings to title caps in a string array
  const titleCapsArray = (strArr) => {
    return strArr.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  // Sum of all numbers in an array
  const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  // Return all the prime numbers in an array
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const primeNumbersArray = (arr) => {
    return arr.filter((num) => isPrime(num));
  };
  
  // Return all the palindromes in an array
  const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const palindromeArray = (arr) => {
    return arr.filter((str) => isPalindrome(str));
  };
  