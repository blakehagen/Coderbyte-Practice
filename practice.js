//Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once. Once completed, add a second argument that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');


function hi() {
  console.log('HELLO WORLD');
};
​
function once(fn, num) {
  var count = num || 1;
  return function () {
    if (count > 0) {
      count--;
      return fn();
    } else {
      console.log('STAHHHHP');
    }
  }
};
​
var newFn = once(hi, 3);
newFn();
newFn();
newFn();
newFn();

//////////////////////
//Have the function firstReverse(str) take the str parameter being passed and return the string in reversed order.

function firstReverse(str) {
  return str.split('').reverse().join('');
}

var str = "Argument goes here";

firstReverse(str);

//returns --> "ereh seog tnemugrA"

// // // // //

//Have the function firstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

function firstFactorial(num) {
  if (num === 0) {
    return 1;
  }
  num = num * firstFactorial(num - 1);
  return num;
}

firstFactorial(4);
// returns --> 24

// // // // //

//Have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function longestWord(str) {
  var arr   = str.replace(/[/`~\|!@#$%^&*)(_=+?'";:,.><]/g, "").split(" ");
  var count = 0;
  var longest;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      longest = arr[i];
      count   = arr[i].length;
    }
  }
  return longest;
}

var str = "which is longest?"

longestWord(str);
// returns --> "longest"

// // // // //

//Have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function letterChanges(str) {
  str      = str.toLowerCase();
  var res  = [];
  var code = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121) {
      code = str.charCodeAt(i) + 1;
      if (code === 101 || code === 105 || code === 111 || code === 117) {
        res.push(String.fromCharCode(code).toUpperCase());
      } else {
        res.push(String.fromCharCode(code));
      }
    } else if (str[i] === " ") {
      res.push(str[i]);
    } else if (str.charCodeAt(i) === 122) {
      res.push(String.fromCharCode(97).toUpperCase());
    }
  }
  res = res.join('');
  return res;
}

var str = "my name";

letterChanges(str);
// returns --> "nz Obnf"

// // // // //

// Have the function simpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

function simpleAdding(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    // console.log(i);
    sum = sum + i;
  }
  return sum;
}

simpleAdding(4);
// returns --> 10

// // // // //

// FIZZBUZZ //

function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    }
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else {
      console.log(i);
    }
  }
};

fizzBuzz();

////////////////////////////////////////

// IS PALINDROME - Single word string //

function isPalindrome(word) {
  var reverseWord = word.split('').reverse().join('');
  if (reverseWord === word) {
    return true;
  }
  return false;
};

// remove whitespace and non-alphanumeric characters
function palindrome(str) {
  str     = str.toLowerCase().replace(/[\W_]+/g, "");
  var rev = str.toLowerCase().split('').reverse().join('');
  if (str === rev) {
    return true;
  }
  return false;
}


// // // // // // // //

// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. plusOneSum([1, 2, 3, 4]); // 14

function addOne(arrayOfNumbers) {
  var res = arrayOfNumbers.map(function (e) {
    return e + 1;
  });
  res     = res.reduce(function (a, b) {
    return a + b;
  });
  return res;
}
// // //

// EXPONENT //

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  else {
    return base * power(base, exponent - 1);
  }
};


// // // // //

// FIND IF ITEM IS IN ARRAY //

function findInArray(arr, itemToFind) {
  if (arr.indexOf(itemToFind) === -1) {
    return false;
  }
  return true;
};

// // // //

//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

var evens = [];
var odds  = [];

//code here

function oddsAndEvens(numsArr) {
  numsArr.map(function (e) {
    if (e % 2 === 0) {
      evens.push(e);
    } else {
      odds.push(e)
    }
  });
  console.log(evens);
  console.log(odds);
  return [evens, odds];
}

// // // // // // //

// Create a function called 'reversedLooper' that when passed an array will loop through it backwards and subtract 2 from the last element, 1 from the second to last, 0 from to the third to last, add one to the fourth to last, add 2 to the fifth to last, etc. until it reaches the front of the array.  Return the list when you are done

// Code Here

function reversedLooper(numsArr) {
  var counter = -2;
  for (var i = numsArr.length - 1; i >= 0; i--) {
    numsArr[i] = numsArr[i] + counter;
    counter++;
  }
  return numsArr;
};

// // // // // // // // // // // //

//Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.

// Code Here

function maker() {
  var newArr = [];
  for (var i = 1; i < 26; i++) {
    newArr.push(i);
  }
  return newArr;
};

// // //
//Below is some code that adds a set of random numbers to both arr1 and arr2.
var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for (var i = 0; i < num1; i++) {
  arr1.push(i);
}
for (var i = 0; i < num2; i++) {
  arr2.push(i);
}

//Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.

// Code Here
function longer(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2
  }
}

// // // // // // // // //
// Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed. 

// Code Here

var myArray = [];

function evenFinder(arr) {
  var res = [];
  arr.map(function (e) {
    if (e % 2 === 0) {
      res.push(e);
    }
  })
  return res;
}

// // // // //
//Write a function called removeItem that is given two arguments, the first is an array called myGroceryList, and the second is an item to remove from myGroceryList. If the second argument (the item to remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list. 

//Code Here
function removeItem(myGroceryList, itemToRemove) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] === itemToRemove) {
      myGroceryList.splice(i, 1);
      i--;
    }
  }
  return myGroceryList;
}

//Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. If the item is already in the grocery list, do not add it a second time. If it's not in the list, then add it and return the new list.

//Code Here
function addItem(myGroceryList, itemToAdd) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] === itemToAdd) {
      return myGroceryList;
    }
  }
  myGroceryList.push(itemToAdd);
  return myGroceryList;
}

// // // // // //
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

var numbers = [5, '9', 16, 19, '25', '34', 48];

//Code Here

function addTen(numbers) {
  var res = numbers.map(function (e) {
    return parseFloat(e) + 10;
  });
  return res;
}

// // // // // // // // //
//Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array. For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]

function looper(arr) {
  return arr.map(function (e) {
    return e + 5;
  })
}

// // // // // // // // / /// // //
// Write a sum method which will work properly when invoked using either syntax below.

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function (y) {
      return x + y;
    };
  }
}

// // // // // // // // // // // // // 
//Write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(sentence) {
  var sentenceArr = sentence.split(' ');
  var letterCount = 0;
  var longestWord;
  for (var i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length > letterCount) {
      letterCount = sentenceArr[i].length;
      longestWord = sentenceArr[i];
    }
  }
  return longestWord;
}

longest('I am the greatest.');

// // // // // // // // / //
//Write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';

function capitalizeWords(sentence) {
  var res     = [];
  var sentArr = sentence.split(' ');
  for (var i = 0; i < sentArr.length; i++) {
    res.push(sentArr[i].charAt(0).toUpperCase() + sentArr[i].slice(1));
  }
  return res.join(' ');
}

// // // // // // // // // // //
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var theOdyssey = "function expression or function declaration? Tis an obvious choice";

function vowelCounter1(string) {
  var arr        = string.toLowerCase().split('');
  var vowelCount = 0;
  for (var i = 0; i < arr; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

// OR 

var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
};

function vowelCounter2(str, hash) {
  var counter = 0;
  var newArr  = str.split("");
  for (var i = 0; i < newArr.length; i++) {
    if (hash[newArr[i]] === true) {
      counter++;
    }
  }
  return counter;
}

vowelCounter2(theOdyssey, vowels);

// // // // // // // // // // / // //
//Write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
// voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(string) {
  var res = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  var strArr = string.toLowerCase().split('');
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'a') {
      res.a++;
    } else if (strArr[i] === 'e') {
      res.e++;
    } else if (strArr[i] === 'i') {
      res.i++;
    } else if (strArr[i] === 'o') {
      res.o++;
    } else if (strArr[i] === 'u') {
      res.u++;
    }
  }
  for (var vowel in res) {
    if (res[vowel] === 0) {
      delete res[vowel];
    }
  }
  return res;
}
// // // // // // // // // // // // // //
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var res = [];
  arr.map(function (e) {
    var biggest = 0;
    for (var i = 0; i < e.length; i++) {
      if (e[i] > biggest) {
        biggest = e[i];
      }
    }
    res.push(biggest);

  });
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// // // // // // // // // // // //
// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  }
  return false;
}

end("Bastian", "n");

// // // // // // // // // // // / //
//Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
function repeat(str, num) {
  if (num < 0) {
    return "";
  }
  var counter = 0;
  var res     = str;
  for (var i = 1; i < num; i++) {
    if (counter < num) {
      res = res + str;
      counter++;
    }
  }
  return res;
}

repeat("abc", 3); // --> returns "abcabcabc"

// // // // // // // //
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
//Note that the three dots at the end add to the string length.
//If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
function truncate(str, num) {
  if (num === str.length || num > str.length) {
    return str;
  }
  else if (num === 1) {
    return str.slice(0, 1) + '...';
  }
  else if (num === 2) {
    return str.slice(0, 2) + '...';
  }
  else {
    return str.slice(0, num - 3) + '...';
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

// /// // // // // // // /// // // /// // // // //
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunk(arr, size) {
  var res  = [];
  var temp = [];
  var mod  = arr.length % size;

  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    arr.splice(i, 1);
    i--;

    if (temp.length === size) {
      res.push(temp);
      temp = [];
    }
  }
  if (temp.length === mod && mod !== 0) {
    res.push(temp);
  }
  return res;
}

// // // // // // // //
// Return the remaining elements of an array after chopping off n elements from the head.
// The head meaning the beginning of the array, or the zeroth index
function slasher(arr, howMany) {
  if (howMany > arr.length) {
    return [];
  }
  if (howMany === 0) {
    return arr;
  }
  arr.splice(0, howMany);
  return arr;
}

// // // // //
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  var item1 = arr.splice(0, 1).toString().toLowerCase();
  var item2 = arr.toString().toLowerCase().split('');

  var res = item2.map(function (e) {
    if (item1.indexOf(e) === -1) {
      return false;
    } else {
      return true;
    }
  })

  for (var i = 0; i < res.length; i++) {
    if (res[i] === false) {
      return false;
    }
  }
  return true;
}
// // //// // // // // /// / // // // // // / //
//Remove all falsy values from an array.
function bouncer(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
// // // // // // // // // / // // // // //
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var destroyers = [];
  for (var arg in arguments) {
    destroyers.push(arguments[arg]);
  }
  destroyers.splice(0, 1);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < destroyers.length; j++) {
      if (arr[i] === destroyers[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
}
// // // // // // // // // // // // // // //
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
function where(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
    return a > b;
  })
  return arr.indexOf(num);
}
// // // // // // // /// // // // // // // //
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  str           = str.split('');
  var charCodes = str.map(function (e) {
    if (e.charCodeAt(e) >= 65 && e.charCodeAt(e) <= 90) {
      return e.charCodeAt(e) + 13;
    } else {
      return e.charCodeAt(e);
    }
  })
  console.log(charCodes);
  for (var i = 0; i < charCodes.length; i++) {
    if (charCodes[i] > 90) {
      charCodes[i] = 64 + (charCodes[i] - 90);
    }
  }
  console.log(charCodes);
  var res = charCodes.map(function (e) {
    return String.fromCharCode(e);
  })
  return res.join('');
}
// // // // // // // // // // // // // / // // // //
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.
function sumAll(arr) {
  var itemsToAdd = [];
  arr            = arr.sort(function (a, b) {
    return a > b;
  });
  for (var i = arr[0]; i <= arr[1]; i++) {
    itemsToAdd.push(i);
  }
  var sum = itemsToAdd.reduce(function (a, b) {
    return a + b;
  });
  return sum;
}
// // // // // // // // // // // // // // / // // // //
// Compare two arrays and return a new array with any items only found in one of the original arrays.
function diff(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1);
        i--;
        arr2.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr1);
  console.log(arr2);
  newArr.push(arr1, arr2);

  newArr = newArr.reduce(function (a, b) {
    return a.concat(b);
  });
  return newArr;
}
// // // // // // // // // // // // // // // //
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]] The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pair(str) {
  str     = str.split('');
  var res = str.map(function (e) {
    return [e];
  });
  for (var i = 0; i < res.length; i++) {
    if (res[i][0] === 'G') {
      res[i].push('C');
    } else if (res[i][0] === 'C') {
      res[i].push('G');
    } else if (res[i][0] === 'A') {
      res[i].push('T');
    } else if (res[i][0] === 'T') {
      res[i].push('A');
    }
  }
  return res;
}
// // // // // // /// // // // // // // // // // //
// Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
function boo(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

// // // / // // / // / //
// CLOSURE EXAMPLE //
//  Write a function called makeCounter that makes the following code work properly.
/*
 var count = makeCounter();
 count() // 1
 count() // 2
 count() // 3
 count() // 4
 */

function makeCounter() {
  var count = 0;

  function add() {
    count++;
    return count;
  }

  return add;
}

var count = makeCounter();
count() // --> 1
count() // --> 2
count() // --> 3
count() // --> 4

// // // // // // // // // // /// // /// /// // // // //
// Constructor Function (sometimes called CLASS??)

function Car(make, model, year) {
  this.make           = make;
  this.model          = model;
  this.year           = year;
  this.distance       = 0;
  this.moveCarForward = function () {
    this.distance += 10;
    return this.distance;
  }
}

var mustang = new Car('Ford', 'Mustang', 2016);
var prius   = new Car('Toyota', 'Prius', 2013);

var getYear = function () {
  return this.year;
};
// Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

getYear.call(mustang);
getYear.call(prius);

//// // // // // // /// // // /// // // // // /// // // // // / // // // // // //
// Write a function that takes in a number and returns that number of the fibonacci sequence.
// The Fibonacci sequence goes like this: 0,1,1,2,3,5...etc...
// For example--> fibonacciNum(5) returns 3 (the 5th number in the sequence)

function fibonacciNum(endNum) {
  var sequence   = [0, 1];
  var secondLast = sequence[0];
  var last       = sequence[1];

  for (var i = 0; i < endNum - 2; i++) {
    var current = secondLast + last;
    sequence.push(current);
    secondLast = last;
    last       = current;
  }
  console.log(sequence);
  return sequence[sequence.length - 1];
}

fibonacciNum(6) // --> returns 5

// // // /// // // // /// // // // // // // // /// // / // // // / // / /
// Write a function that is given an array of numbers with one or more numbers missing from the sequence.
// Return the missing numbers.

function missingNum(array) {
  var missing = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i + 1] - array[i]) > 1) {
      missing.push(array[i + 1] - 1);
    }
  }
  return missing;
}

// // // // // // // // // //
// Write a function called loveTheThrees that takes in an array full of numbers. It should loop through the array and adds any numbers that are divisible by 3 to a new array called threes. Once you have added all the numbers that are divisible by 3 to the new array, then return the threes array.

// Our sample array of numbers we will pass in when we test our function
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// here is our function that takes in an array
function loveTheThrees(arr) {
  // declare a variable called 'threes' and set it as an empty array
  var threes = [];
  // loop through the array you pass in when you call the function
  for (var i = 0; i < arr.length; i++) {
    // if the item in the array is divisible by 3, push it into the threes array
    if (arr[i] % 3 === 0) {
      threes.push(arr[i]);
    }
  }
  // return the threes array
  return threes;
}

//invoke the function and pass in a real array of numbers. It should return an array with only multiples of 3
loveTheThrees(numArr);

// // // // /// /// /// // // // // // // // //
// In the "superSecret" function “spy” will be a passed in as an object that represents a spy. Loop through all the properties on the spy object and change all values to the string “redacted”, then return the updated spy object.

// here is our object we will pass into the function; notice it has actual data
var myObject = {
  name: 'Blake',
  age: 33,
  website: 'http://blakehagen.io',
  address: 'Provo, UT'
};

// the function takes in an object
function superSecret(object) {
  // loop through the object
  for (var item in object) {
    // set each item to have the value of 'redacted'
    object[item] = 'redacted';
  }
  // return the modified object
  return object;
}

// invoke the function and pass in our object
superSecret(myObject);

// returns -->  { name: 'redacted', age: 'redacted', website: 'redacted', address: 'redacted' }

// // // // // // // // /// // // /// // //
// Make a function called onlyTruthy that takes in an object, loops through all its properties, and removes any that are falsy. Then return the object that was passed in. (hint: delete)
// here is our object we will pass in
//NOTE: falsy values include: '', false, null, undefined, 0, NaN
var testObject = {
  name: 'Blake',
  age: false,
  email: '',
  address: 'Provo, UT',
  kids: true,
  height: undefined
};

// function that takes in an object
function onlyTruthy(object) {
  // loop through the object
  for (var value in object) {
    // check to see if value of each property on object is falsy (the ! checks all of the falsy values)
    if (!object[value]) {
      // if it is falsy, delete the property/value pair so you are only left with properties that have truthy
      // values
      delete object[value];
    }
  }
  // return the modified object
  return object;
}
// invoke the function and pass in our object we defined
onlyTruthy(testObject);
// returns --> { name: 'Blake', address: 'Provo, UT', kids: true }

// Create a function that takes in 2 numbers as parameters and returns the sum of the 2 numbers

function sum(num1, num2) {
  return num1 + num2;
}

// isPrime Function //
function isPrime(num) {
  if (num <= 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


// listPrimes uses the isPrime function to check to see if each number is prime //
function listPrimes(numMax) {
  var primeNumbers = [];
  for (var i = 0; i <= numMax; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i)
    }
  }
  return primeNumbers;
}





















