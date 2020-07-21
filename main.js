function startQuiz(){
    var questionEl =  document.getElementById("questions")
    questionEl.style["visibility"] = "visible"
    document.getElementById("startSection").style["visibility"] = "hidden"
}

document.getElementById("startButton").onclick = startQuiz

var questions = [
    'What is constant within our universe?',
    'How big is America?'
]
