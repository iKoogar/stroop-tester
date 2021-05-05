import classes from './RandomWord.module.css'

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
]

const getRandomWord = (consistent, sameIndex) => {
    if (consistent){
        return words[sameIndex];
    }
    var randInt = getRandomInt(0, words.length - 1);
    return words[randInt];
}

const RandomWord = (props) => {
    var sameIndex = 0; 
    if(props.consistent){
        sameIndex = getRandomInt(0, words.length - 1);
    }

    return(
        <>
            <font color={getRandomWord(props.consistent, sameIndex)}>{getRandomWord(props.consistent, sameIndex)}</font>
        </>
    )
}

export default RandomWord
