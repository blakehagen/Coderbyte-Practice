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

// IS PALINDROME ?? Single word string //

function isPalindrome(word) {
    var reverseWord = word.split('').reverse().join('');
    if (reverseWord === word) {
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
}