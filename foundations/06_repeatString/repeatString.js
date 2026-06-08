const repeatString = function(str, num) {
    if (num === -1){
        return 'ERROR'
    } else {
        const arrayWords = [];
        for (let i = 0; i < num; i++){
            arrayWords[i] = str;
        }
        return arrayWords.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
