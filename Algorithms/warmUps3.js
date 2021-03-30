function toLowerCase(letter) {
    if (letter.length > 1) {
        return false;
    }

    let charCode = letter.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(charCode + 32);
    }
    return letter;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Total O(1) Auxillary
function isPalindrome(word) {
    // get the length of the word
    // do a for loop that goes from the end of the word to the beginning of the word and 
    // pushes that to an array
    // then I want to compare the new array to the word and see if they are equal
    // let x = [1, 2, 3];
    // let y = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

    if (word.length === 0) { 
        return false;
    }

    for (let i = 0; i < word.length / 2; i++) {
        if (toLowerCase(word[i]) != toLowerCase(word[word.length - 1 - i])) {
            return false;
        }
    }
    return true;
}

// Time Complexity: O(log n)
// Space Complexity: O(1) Constant Space
function isPrime(n) {
    if (n <= 3) {
        return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let count = 5;

    while (Math.pow(count, 2) <= n) {
        if (n % count === 0 || n % (count + 2) === 0) {
            return false;
        }
        count += 6;
    }
    return true;
}

// Time Compelexity: O(n^2)
// Space Complexity: O(1) Constant Space
function reorder(str1, str2, str3) {
    let temp;

    // Bubble Sort
    if (str2.length > str1.length) {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }

    if (str3.length > str2.length) {
        temp = str3;
        str3 = str2;
        str2 = temp;
    }

    if (str2.length > str1.length) {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }
    
    return str1 + " " + str2 + " " + str3;
}

function infiniteLoop() {
    while (true) {
        console.log("Hello World");
    }
}

// Space Compexity: O(n) Total, O(1) Constant
// Time Complexity: O(n)
function secondHighest(arr) {
    if (arr.length <= 1) {
        return -1;
    }

    let highest;
    let secondHighest;

    if (arr[0] < arr[1]) {
        secondHighest = arr[0];
        highest = arr[1];
    } else {
        secondHighest = arr[1];
        highest = arr[0];
    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest) {
            secondHighest = arr[i];
        }
    }

    return secondHighest;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function fizzBuzz(n) {
    let myString = "";

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 15 == 0) {
                myString += "fizzbuzz";
            } else if (i % 3 == 0) {
                myString += "fizz";
            } else {
                myString += "buzz";
            }
        } else {
            myString += i;
        }

        if (i < n) {
            myString += " ";
        }
    }

    return myString;
}

function topTwo(arr) {
    let temp;
    let currentChar;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    let topTwoArr = [arr[0], arr[1]];
    currentChar = arr[0];
    currentCount = 2;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            currentCount += 1;
        } else {
            currentCount -= 1;
        }
    }

    console.log(arr);
    return ["", ""];
}

function toBinary(num) {

}

function toDecimal(num) {

}

function reverseString() {
    return 0;
}

function stocks(arr) {
    return 0;
}

function toLowerCaseTests() {
    console.assert(toLowerCase("M") == "m");
    console.assert(toLowerCase("A") == "a");
    console.assert(toLowerCase("z") == "z");
    console.assert(toLowerCase("Z") == "z");
    console.assert(toLowerCase("a") == "a");
    console.assert(!toLowerCase("Alex"));
}

function isPalindromeTests() {
    console.assert(!isPalindrome("Alex"), "Alex");
    console.assert(!isPalindrome(""), "<Empty String>");
    console.assert(isPalindrome("Mom"), "Mom");
    console.assert(isPalindrome("dad"), "dad");
    console.assert(isPalindrome("racecar"), "racecar");
    console.assert(isPalindrome("abba"), "abba");
    console.assert(!isPalindrome("-121"), "-121");
    console.assert(isPalindrome("121"), "121");
}

function isPrimeTests() {
    console.assert(!isPrime(0), 0);
    console.assert(!isPrime(1), 1);
    console.assert(isPrime(2), 2);
    console.assert(isPrime(3), 3);
    console.assert(!isPrime(4), 4);
    console.assert(isPrime(5), 5);
    console.assert(isPrime(43), 43);
    console.assert(!isPrime(39), 39);
}

function reorderTests() {
    console.assert(reorder("", "", "") == "  ", "3 Empty Strings");
    console.assert(reorder("a", "a", "a") == "a a a", "3 Non-empty Strings of the Same Length");
    console.assert(reorder("a", "ab", "ab") == "ab ab a", "2 Strings of the same length 1");
    console.assert(reorder("ab", "a", "ab") == "ab ab a",  "2 Strings of the same length 2");
    console.assert(reorder("ab", "ab", "a") == "ab ab a",  "2 Strings of the same length 3");
    console.assert(reorder("a", "ab", "abc") == "abc ab a", "All three different length 1");
    console.assert(reorder("a", "abc", "ab") == "abc ab a", "All three different length 2");
    console.assert(reorder("ab", "a", "abc") == "abc ab a", "All three different length 3");
    console.assert(reorder("ab", "abc", "a") == "abc ab a", "All three different length 4");
    console.assert(reorder("abc", "a", "ab") == "abc ab a", "All three different length 5");
    console.assert(reorder("abc", "ab", "a") == "abc ab a", "All three different length 6");
}

function secondHighestTests() {
    console.assert(secondHighest([]) == -1, "Empty Array");
    console.assert(secondHighest([1]) == -1, "Array with one value");
    console.assert(secondHighest([1, 2]) == 1, "Array with two values 1");
    console.assert(secondHighest([2, 1]) == 1, "Array with two values 2");
    console.assert(secondHighest([1, 2, 3, 4]) == 3, "Array with multiple values 1");
    console.assert(secondHighest([1, 3, 2, 4]) == 3, "Array with multiple values 2");
    console.assert(secondHighest([3, 2, 1, 4]) == 3, "Array with multiple values 3");
    console.assert(secondHighest([11, 22, 44, 33]) == 33, "Array with multiple values 4");
}

function fizzBuzzTests() {
    console.assert(fizzBuzz(0) == "", 0);
    console.assert(fizzBuzz(1) == "1", 1);
    console.assert(fizzBuzz(2) == "1 2", 2);
    console.assert(fizzBuzz(3) == "1 2 fizz", 3);
    console.assert(fizzBuzz(4) == "1 2 fizz 4", 4);
    console.assert(fizzBuzz(5) == "1 2 fizz 4 buzz", 5);
    console.assert(fizzBuzz(6) == "1 2 fizz 4 buzz fizz", 6);
    console.assert(fizzBuzz(7) == "1 2 fizz 4 buzz fizz 7", 7);
    console.assert(fizzBuzz(15) == "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz", 15);
}

function topTwoTestsHelper(arr, value1, value2) {
    return arr[0] == value1 && arr[1] == value2;
}

function topTwoTests() {
    let arr = topTwo(["A", "B"]);
    console.assert(topTwoTestsHelper(arr, "A", "B"));

    arr = topTwo(["A", "B", "B"]);
    console.assert(topTwoTestsHelper(arr, "B", "A"));

    arr = topTwo(["A", "B", "B", "A"]);
    console.assert(topTwoTestsHelper(arr, "A", "B"));

    arr = topTwo(["A", "B", "C", "C"]);
    console.assert(topTwoTestsHelper(arr, "C", "A"));

    arr = topTwo(["A", "B", "C", "C", "D", "D", "D"]);
    console.assert(topTwoTestsHelper(arr, "D", "C"));

    arr = topTwo(["A", "D", "D", "C", "D", "B", "C"]);
    console.assert(topTwoTestsHelper(arr, "D", "C"));
}

function main() {
    toLowerCaseTests();
    isPalindromeTests();
    isPrimeTests();
    reorderTests();
    secondHighestTests();
    // infiniteLoop();
    fizzBuzzTests();
    // topTwoTests();

    topTwo(["A", "D", "D", "C", "D", "B", "C"]);
}

main();
