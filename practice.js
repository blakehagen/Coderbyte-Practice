//Have the function firstReverse(str) take the str parameter being passed and return the string in reversed order. 

function firstReverse(str){
	return str.split('').reverse().join('');
}

var str = "Argument goes here";

firstReverse(str);

//returns --> "ereh seog tnemugrA"

// // // // //

//Have the function firstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

function firstFactorial(num){
	if(num === 0){
		return 1;
	}
	num = num * firstFactorial(num-1);
	return num;
}

firstFactorial(4);
// returns --> 24

// // // // //

//Have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function longestWord(str){
	var arr = str.replace(/[/`~\|!@#$%^&*)(_=+?'";:,.><]/g,"").split(" ");
	var count = 0;
	var longest;
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i].length > count){
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

function letterChanges(str){
    str = str.toLowerCase();
	var res = [];
	var code = 0;
	for(var i = 0; i < str.length; i++){
	    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121){
			code = str.charCodeAt(i)+1;
			if(code === 101 || code === 105 || code === 111 || code === 117){
			    res.push(String.fromCharCode(code).toUpperCase());
			} else {
			    res.push(String.fromCharCode(code));
			}
		} else if(str[i] === " "){
			res.push(str[i]);
		} else if(str.charCodeAt(i) === 122){
			res.push(String.fromCharCode(97).toUpperCase());
		}
	}
	res = res.join('');
	return res;
}

var str = "my name";

letterChanges(str);
// returns --> "nz Obnf"