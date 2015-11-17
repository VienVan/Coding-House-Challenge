//superCounter("Count me in");
//{"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}

var superCounter = function(msg) {
    var newObject = {};
    newObject.words = msg.split(" ").length;
    newObject.chars = msg.length;
    newObject.spaces = newObject.words - 1;
    newObject.avgLength = Math.round(newObject.chars - newObject.spaces)/newObject.words;
    return newObject;
}

console.log(superCounter("Count me in") === {words: 3, char: 11, avgLength: 3, spaces: 2})
