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
    var arr = str.replace(/[/`~\|!@#$%^&*)(_=+?'";:,.><]/g, "").split(" ");
    var count = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > count) {
            longest = arr[i];
            count = arr[i].length;
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
    str = str.toLowerCase();
    var res = [];
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
    str = str.toLowerCase().replace(/[\W_]+/g, "");
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
    })
    res = res.reduce(function (a, b) {
        return a + b;
    })
    return res;
};
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
var odds = []; 

//code here

function oddsAndEvens(numsArr) {
    numsArr.map(function (e) {
        if (e % 2 === 0) {
            evens.push(e);
        } else {
            odds.push(e)
        }
    })
    console.log(evens);
    console.log(odds);
    return [evens, odds];
};

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
    } else if (arr2.length > arr1.length) {
        return arr2
    }
}; 

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
        return parseInt(e) + 10;
    })
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

// // // // // // // // / //
//Write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';

function capitalizeWords(sentence) {
    var res = [];
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
    var arr = string.toLowerCase().split('');
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
    var newArr = str.split("");
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



