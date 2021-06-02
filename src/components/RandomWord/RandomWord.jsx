function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const words = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
    "brown"
];

var randomWords = require('random-words');

const getRandomWord = (test, sameIndex) => {
    if (test == "1"){
        return words[sameIndex];
    }

    else if (test == "2"){
        return randomWords({exactly: 1, minLength: 3, maxLength: 7})
    }

    var randInt = getRandomInt(0, words.length - 1);
    return words[randInt];
}

const getRandomColor = (test, sameIndex) => {
    if (test == "1"){
        return words[sameIndex];
    }

    var randInt = getRandomInt(0, words.length - 1);
    return words[randInt];
}

const RandomWord = (props) => {
    var sameIndex = 0; 
    if(props.test == "1"){
        sameIndex = getRandomInt(0, words.length - 1);
    }

    return(
        <>
            <font color={getRandomColor(props.test, sameIndex)}>{getRandomWord(props.test, sameIndex)}</font>
        </>
    )
}

export default RandomWord
