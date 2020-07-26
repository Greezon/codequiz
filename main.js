var questionEl =  document.getElementById("questions");
var startBtn = document.querySelector('#startButton');
var timerElem = document.querySelector('#timer');
var results = document.querySelector('#results');
var display1= document.querySelector("#display1")
var display2= document.querySelector("#display2")
var btn1= document.querySelector("#btn1")
var btn2= document.querySelector("#btn2")
var btn3= document.querySelector("#btn3")
var correctAnsw = 0
var wrongAnsw = 0
var userChoice = document.querySelector(".options")
var timeRemaining = 10;
var questionIndex = 0;
var questions = [
    {
        question:'What is constant within our universe?', 
        choices: ["Galaxies?", "Stars", "choice C"],
        answer: 0,
    },
    
    {
        question:'B?', 
        choices: ["choice A", "choice B", "choice C"],
        answer: 1,
    },

    {
        question:'C?', 
        choices: ["choice A", "choice B", "choice C"],
        answer: 2,
    },

    {
        question:'D', 
        choices: ["choice A", "choice B", "choice C"],
        answer: 0,
    },

    {
        question:'E', 
        choices: ["choice A", "choice B", "choice C"],
        answer: 0,
    },

    {
        question:'F', 
        choices: ["choice A", "choice B", "choice C"],
        answer: 0,
    },
]

var currentQuestion = 0;
var SECOND = 1000;

questionEl.style["visibility"] = "hidden"
results.style["visibility"] = "hidden"


function startQuiz() {
    console.log("Start button")
    questionEl.style["visibility"] = "visible"
    startBtn.style["visibility"] = "hidden"
    displayQuestion()
    displayTimer()
}

function displayQuestion(){
    display1.innerText= questions[currentQuestion].question
    btn1.innerText= questions[currentQuestion].choices[0]
    btn2.innerText= questions[currentQuestion].choices[1]
    btn3.innerText= questions[currentQuestion].choices[2]
}

function checkUserChoice() {
    console.log("Checking On Click")
    var answer = this.getAttribute("data-value")
    if(answer == questions[currentQuestion].answer){
        correctAnsw++
        display2.innerText="Right Answer!"
    }
    else{
        wrongAnsw++
        display2.innerText="Right Answer!"
    }
    if (currentQuestion < questions.length -1){
        currentQuestion ++;
        displayQuestion()
    }
    else {
        displayResults()
    }
    
}

function displayResults(){
    console.log("Results", correctAnsw, wrongAnsw)
    questionEl.style["visibility"] = "hidden"
    results.style["visibility"] = "visible"
    document.getElementById("endResults").innerText = 
    "Game over! Your score is " + correctAnsw + " You missed " + wrongAnsw
}

function displayTimer() {
    timerElem.textContent = timeRemaining;
    var timerInterval = setInterval (() => {
        timeRemaining--;
        timerElem.textContent = timeRemaining;

        if (timeRemaining === 0) {
            displayResults();
            timerElem.style["visibility"] = "hidden"

        }
    }, SECOND)
}

startBtn.onclick = startQuiz
btn1.onclick = checkUserChoice
btn2.onclick = checkUserChoice
btn3.onclick = checkUserChoice
startBtn.addEventListener








// timers
// have counter started 
// display high score, IF you had the high score.