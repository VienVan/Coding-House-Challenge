// Write a javascript function that takes multiple arguments that are all integers and calculates the following:
//
// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// The function should return these values in an object.

function arrayAnalyzer () {
  var obj = {
    oddInt: 0, negInt: 0, avg: 0, median: 0
  };
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {

    if(Math.abs(arguments[i]) % 2 === 1) {
      obj.oddInt++;
    }

    if(arguments[i] < 0) {
      obj.negInt++;
    }
    sum = arguments[i] + sum;
  }

     obj.avg = parseFloat((sum/arguments.length).toFixed(2));


    var sortedArguments = Array.prototype.slice.call(arguments);
    sortedArguments.sort(function sortNumber(a,b) {
    return a - b;
    });
    if(sortedArguments.length % 2 === 1) {
      obj.median = sortedArguments[Math.floor(sortedArguments.length / 2)];
    } else {
      var firstIndex = sortedArguments.length / 2;
      var secondIndex = firstIndex - 1;
      obj.median = (arguments[firstIndex] + arguments[secondIndex]) / 2;
    }


  return obj;
}
