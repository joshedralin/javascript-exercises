const reverseString = function(word) {
    let wordArray = word.split("");
    console.log(wordArray);
    wordArray.reverse();
    return wordArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
