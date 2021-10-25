
// // prompt questions
// alert("hello!")
// let myName=prompt("What is your name?")
// let lastName=prompt("What is your last name?")
// let birthday=prompt("what year were you born?")
// let question=prompt("How are you feeling?")

// // slicing the prompts

// myName.slice(0, 1)
// birthday.slice(-2)

// // creating the username variable using the sliced prompts and then writing it in the console

// let userName=(myName.slice(0, 2) + lastName + birthday.substr(-2) ) //substr and slice work here
// console.log(userName);
// alert("your username is " + userName)

// // finding the index postion of the word horses in the paragraph string

// console.log("we are watching the horses race!");

// const paragraph = 'we are watching the horses race!';

// const searchTerm = 'horses';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the word "${searchTerm}" from the beginning is ${indexOfFirst}`);
// alert(`The index of the word "${searchTerm}" from the beginning is ${indexOfFirst}`);

// // finding the index position using a different method

// let story="the quick brown fox"
// alert(story.indexOf("quick"))

// // Instance of vowels replacer

// let newQuestion=(question.replace(/a/gi, "*").replace(/e/gi, "*").replace(/i/gi, "*").replace(/o/gi, "*").replace(/u/gi, "*"))
// console.log(newQuestion)

// // another way to replace all vowels

// let sentence ="the quick brown fox jumped over the lazy dog"

// sentence = sentence.replaceAll("a", "*")
// sentence = sentence.replaceAll("e", "*")
// sentence = sentence.replaceAll("i", "*")
// sentence = sentence.replaceAll("o", "*")
// sentence = sentence.replaceAll("u", "*")

// horse race stuff ------------------------------------

const numHorses = 10                                                                                     //amount of horses in the race
let horses=[]                                                                                            //an array of horse elements
let horseX=[]                                                                                            //an array containing the pixel postion of every horse
let colors=["red", "blue", "orange", "Cyan", "magenta", "yellow", "black", "turquoise", "gray", "white"] //array of the horse colours

//horse setup -------------------------------------------

for(let h=0;h<numHorses;h++)  //for loop repeating the next steps using the numHorses value
{
    horses[h] = document.createElement("div")   //creates the horses
    horses[h].classList.add("horse")            //adds the horse class to them so the style will apply
    horses[h].style.top = 50 + h*18 + "px"      //sets the y position of the horses with 50 + h*18 being the amount of pixels between them
    horses[h].style.backgroundColor=colors[h]   //sets the colour of the horses using the colors array created earlier
    horseX[h]=0                                 //sets the start position of each horse to 0
    document.body.appendChild(horses[h])        //adds div element to html doc

}

const finish=500 //x position of finish line

//functions ---------------------------------------------------

function move()  //function that makes the horses move
{
    
    for(let h=0;h<numHorses;h++)  //for loop that says " for every horse, do this"
    {
        horses[h].style.left=horseX[h] + "px"        //sets x pos 
        horseX[h] += Math.floor(Math.random()*10)    //makes each horses movement random
        
        if(horseX[h] >=finish)    //nested if that detects if a horse crosses the finish line using the finish variable
        {
            alert(` ${colors[h]} horse wins`)   //alerts user telling them which horse won. The ${colors[h]} takes the color of the horse for the alert
            resetRace();                        //starts the resetRace function which restarts the race
        }

    }

}

function resetRace() //function to restart the race
{
    for(let h=0;h<numHorses;h++) //for every horse
    {
        horseX[h]=0 //set horse x position to 0
    }
}

function startRace(){   //starts race, tied to button created in the html doc

    setInterval(move,50)  // runs the move function at an interval of 50

}

