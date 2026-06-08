const reverseString = function(originalString) {
    let reversedString = "";
    let lengthString = originalString.length - 1;
    for (let i = 0; i <= lengthString; i++){
        reversedString =  reversedString + originalString.charAt(lengthString - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
