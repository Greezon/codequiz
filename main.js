var questionEl = document.querySelector("#questions");
var startBtn = document.querySelector('#startButton');
var timerElem = document.querySelector('#timer');
var results = document.querySelector('#results');
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var correctAnsw = 0;
var wrongAnsw = 0;
var userChoice = document.querySelector(".options");
var timeRemaining = 100;
var questionIndex = 0;
var currentQuestion = 0;
var SECOND = 1000;
var scoreBtn = document.querySelector("#save");
var scoreInitials = document.querySelector("#initials");
var startSection = document.querySelector("#start-section");
var timeLeft = document.querySelector("#timeleft")
var retakeQuiz = document.querySelector("#retakeBtn")

// Questions and answers were copied from Geeksforgeeks.org
var questions = [
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?',
        choices: ["<javascript>", "<scripted>", "<script>"],
        answer: 2,
    },

    {
        question: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
        choices: ["alertbox(“GeeksforGeeks”)", "msg(“GeeksforGeeks”)", "alert(“GeeksforGeeks”)"],
        answer: 2,
    },

    {
        question: 'The “src” term is used to refer to any JavaScript file',
        choices: ["True", "False"],
        answer: 1,
    },

    {
        question: 'Which of the following is not a reserved word in JavaScript?',
        choices: ["interface", "throws", "program"],
        answer: 2,
    },

    {
        question: 'What is the syntax for creating a function in JavaScript named as Geekfunc?',
        choices: ["function = Geekfunc() ", "function Geekfunc() ", "function := Geekfunc()"],
        answer: 1,
    },

    {
        question: 'How is the function called in JavaScript?',
        choices: ["call Geekfunc()", "call function GeekFunc()", "Geekfunc()"],
        answer: 2,
    },

    {
        question: 'How do you start a project?',
        choices: ["Psuedo Code?", "HTML?", "Looking at the stars?"],
        answer: 0,
    },

    {
        question: 'How to write an if statement for executing some code. if i is NOT equal to 5',
        choices: ["if(i<>5)", "if i<>5 ", "if(i!=5)"],
        answer: 2,
    },

    {
        question: 'What is the correct syntax for adding comments in JavaScript?',
        choices: ["<!–This is a comment–&gt ", "//This is a comment", "–This is a comment"],
        answer: 1,
    },

    {
        question: 'How to insert a multi-line comment in JavaScript?',
        choices: ["/*This is comment line 1", "//Line 1 //Line 2", "**line1 **line2"],
        answer: 0,
    },

    {
        question: 'What is the JavaScript syntax for printing values in Console?',
        choices: ["print(5) ", "console.log(5);", "console.print(5);"],
        answer: 1,
    },

    {
        question: 'How to initialize an array in JavaScript?',
        choices: ["var Geeks=[“Geek1”, “Geek2”, “Geek3”]", "var Geeks=(1=Geek1, 2=Geek2, 3=Geek3) ", "var Geeks= “Geek1”, “Geek2”, “Geek3” "],
        answer: 0,
    },

    {
        question: 'What will be the command to print the number of characters in the string “GeeksforGeeks”? ',
        choices: ["document.write(“GeeksforGeeks”.len); ", "document.write(sizeof(“GeeksforGeeks”)); ", "document.write(“GeeksforGeeks”.length); "],
        answer: 2,
    },

    {
        question: 'What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?',
        choices: ["stripped() ", "trimmed()", "trim()"],
        answer: 2,
    },

    {
        question: 'In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?',
        choices: ["ifInteger(value)", "ifinteger(value)", "isInteger(value)"],
        answer: 2,
    },

    {
        question: 'Which of the following is an advantage of using JavaScript?',
        choices: ["Immediate feedback from the users.", "Increased interactivity.", "All of the above."],
        answer: 2,
    },

    {
        question: 'Which function of an Array object calls a function for each element in the array?',
        choices: ["each()", "every()", "forEach()"],
        answer: 2,
    },

    {
        question: 'JavaScript is ________ language.',
        choices: ["a compiled", "an interpreted"],
        answer: 1,
    },

    {
        question: 'Which was the first browser to support JavaScript?',
        choices: ["Google Chrome", "Mozilla Firefox", "Netscape"],
        answer: 1,
    },

    {
        question: 'What is Jquery?',
        choices: ["A CDN?", "A song?", "A candybar?"],
        answer: 0,
    },
];


questionEl.style["visibility"] = "hidden"
results.style["visibility"] = "hidden"
timeLeft.style["visibility"] = "hidden"

function startQuiz() {
    console.log("Start button")
    questionEl.style["visibility"] = "visible"
    startBtn.style["visibility"] = "hidden"
    startSection.style["visibility"] = "hidden"
    timeLeft.style["visibility"] = "visible"
    displayQuestion()
    displayTimer()
}

function displayQuestion() {
    display1.innerText = questions[currentQuestion].question
    btn1.innerText = questions[currentQuestion].choices[0]
    btn2.innerText = questions[currentQuestion].choices[1]
    btn3.innerText = questions[currentQuestion].choices[2]
}

function checkUserChoice() {
    console.log("Checking On Click")
    var answer = this.getAttribute("data-value")
    if (answer == questions[currentQuestion].answer) {
        correctAnsw++
        display2.innerText = "Right Answer!"
    }
    else {
        wrongAnsw++
        display2.innerText = "Wrong answer! - 10 seconds"
        timeRemaining = timeRemaining - 10
        timerElem.textContent = timeRemaining
        console.log(timeRemaining)
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion()
    }
    else {
        displayResults()
    }

}

function displayResults() {
    console.log("Results", correctAnsw, wrongAnsw)
    questionEl.style["visibility"] = "hidden"
    results.style["visibility"] = "visible"
    document.getElementById("endResults").innerText =
        "Game over! Right Answers: " + correctAnsw + ", Wrong Answers: " + wrongAnsw
    timerElem.style["visibility"] = "hidden"
    timeLeft.style["visibility"] = "hidden"
    retakeQuiz.style["visibility"] = "hidden"

}

function displayTimer() {
    timerElem.textContent = timeRemaining;
    var timerInterval = setInterval(() => {
        timeRemaining--;
        timerElem.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            displayResults();
            clearInterval(timerInterval)
        }
    }, SECOND)
}

function storeScore() {
    var newScore = {
        initials: scoreInitials.value,
        correct: correctAnsw,
        incorrect: wrongAnsw
    }
    var highScore = []
    var oldHighScoreJson = localStorage.getItem("highScore")
    if (oldHighScoreJson !== null) {
        highScore = JSON.parse(oldHighScoreJson)
    }

    highScore.unshift(newScore)

    var highScoreJson = JSON.stringify(highScore)
    localStorage.setItem("highScore", highScoreJson)

    var scoreDisplay = ""
    for (let i = 0; i < highScore.length; i++) {
        var score = highScore[i];
        scoreDisplay += score.initials + " Right " + score.correct + " Wrong " + score.incorrect + "\n"
    }

    var scoreEle = document.querySelector("#highscores")
    scoreEle.innerText = scoreDisplay
    scoreBtn.style["visibility"] = "hidden"
    initials.style["visibility"] = "hidden"
    retakeQuiz.style["visibility"] = "visible"
}

function reloadQuiz() {
    location.reload()
}


startBtn.onclick = startQuiz
btn1.onclick = checkUserChoice
btn2.onclick = checkUserChoice
btn3.onclick = checkUserChoice
startBtn.addEventListener
scoreBtn.onclick = storeScore
retakeQuiz.onclick = reloadQuiz






// timers
// have counter started 
// display high score, IF you had the high score.