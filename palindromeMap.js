CodingHouse
// Vien Van
//  Previous challenge  Home Next Challenge
// 9. Palindrome Map
// A palindromic word is a word that reads the same way forward and backwards (i.e. racecar, reviver, rotator).
//
// Write a JS function that takes a string argument and returns an array of true/false values that map to whether the word in that position is palindrome or not.
//
// Use the .map function in your solution and don't use any loops.
//
// Test Case:
//
// palindromicMap("stash and pop on this level")
// Would return
//
// [false, false, true, false, false, true]
//
//
//

var result = [];
var isPalindrome = function(msg) {
    var arrayOfWords = msg.split(" ");
    var word = arrayOfWords.pop();
    return word === word.split('').reverse().join('');
  };

var palindromicMap = function(msg) {
    var result = msg.split(" ");
    result = result.map(isPalindrome);

    return result;
  };



console.log(palindromicMap("stash and pop on this level"));
