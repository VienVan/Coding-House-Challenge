// Write a JavaScript function that takes one argument that is a sentence (multiple words) and returns a new sentence where all words are reversed but kept in the same order as the original sentence.
//
// Test Case:
//
// wordsReverser("This is fun, hopefully.");
// Would return:
//
// "sihT si nuf, yllufepoh."

var reverseWord = function(msg) {
    var words = "";
    for(var i = msg.length - 1; i >= 0; i--) {
      words += msg[i];
    }
    return words;
};

var wordsReverser = function(msg) {
    var wordArray = msg.split(' ');
    for(var i = 0; i < wordArray.length; i++){
        wordArray[i] = reverseWord(wordArray[i]);
    }
    return wordArray.join(" ");

};


console.log(wordsReverser("This is fun, hopefully.") === "sihT si nuf, yllufepoh.")
