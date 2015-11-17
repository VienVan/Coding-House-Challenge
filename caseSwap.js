// Write a JavaScript function that would swap the case of each character in the string you pass to it as an argument.
//
// Test Case:
//
// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Would return:
//
// "lIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT"


var caseSwap = function(msg) {
    var newArray = msg.split('');
    for(var i = 0; i < newArray.length; i++) {
      if (newArray[i] === newArray[i].toUpperCase()) {
        newArray[i] = newArray[i].toLowerCase();
      }   else if (newArray[i] === newArray[i].toLowerCase()) {
        newArray[i] = newArray[i].toUpperCase();
      }
    }
    return newArray.join('');
  };



console.log(caseSwap("Life is 10% what happens to you, and 90% of how you REACT to it")) === console.log("LIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT");
