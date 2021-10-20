let redHorse=document.getElementById("redHorse")
let blueHorse=document.getElementById("blueHorse")

// prompt questions
alert("hello!")
let myName=prompt("What is your name?")
let lastName=prompt("What is your last name?")
let birthday=prompt("what year were you born?")
let question=prompt("How are you feeling?")

// slicing the prompts

myName.slice(0, 1)
birthday.slice(-2)

// creating the username variable using the sliced prompts and then writing it in the console

let userName=(myName.slice(0, 2) + lastName + birthday.slice(-2) )
console.log(userName);

// finding the index postion of the word horses in the paragraph string

console.log("we are watching the horses race!");

const paragraph = 'we are watching the horses race!';

const searchTerm = 'horses';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the word "${searchTerm}" from the beginning is ${indexOfFirst}`);

// Instance of vowels replacer

let newQuestion=(question.replace(/a/gi, "*").replace(/e/gi, "*").replace(/i/gi, "*").replace(/o/gi, "*").replace(/u/gi, "*"))
console.log(newQuestion)

// horse race stuff

let redHorseX=0
let blueHorseX=0


function move(){
    
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)


}

function startRace(){

    setInterval(move,50)  

}

// if (blueHorseX >= 500)
// {
//     clearInterval(move,50)
//     console.log("blue wins");
// }
// else if(redHorseX >= 500)
// {
//     clearInterval(move,50)
//     console.log("red wins");
// }