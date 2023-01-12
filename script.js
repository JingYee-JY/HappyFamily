const startButton = document.querySelector(".start");
const began = document.querySelector(".startGame");
const playAgain = document.querySelector(".again");
const homeButton = document.querySelector(".home");

const start = document.querySelector(".startPage");
const instruction = document.querySelector(".instructionPage");
const game = document.querySelector(".gamePage");
const final = document.querySelector(".finalPage");

const choiceButtons = document.querySelectorAll(".choiceButton");
const scoreCount = document.querySelector(".score-count");
const questionNumber = document.querySelector(".question-count");
const text = document.querySelector(".text");
const medal = document.querySelector(".medal")
const words = document.querySelector(".words2")
const scoreText = document.querySelector(".scoreText")

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const clap = document.getElementById("clap")


let startGame;
let time;

//CHANGE TOTAL QUESTION HERE
let totalQuestion = 5;

let currentQuestion;
let score = 0;
let answeredCorrect = 0;
let correctBtn;
let correctAnswer;
let choosenAnswer;

//CHANGE HERE FOR ALL THE IMAGES CARDS
const character =[
    {number:"1", image:"./img/family1Father.png"},
    {number:"2", image:"./img/family1Mother.png"},
    {number:"3", image:"./img/family1Daughter.png"},
    {number:"4", image:"./img/family1Son.png"},

    {number:"5", image:"./img/family2Father.png"},
    {number:"6", image:"./img/family2Mother.png"},
    {number:"7", image:"./img/family2Daughter.png"},
    {number:"8", image:"./img/family2Son.png"},

    {number:"9", image:"./img/family3Father.png"},
    {number:"10", image:"./img/family3Mother.png"},
    {number:"11", image:"./img/family3Daughter.png"},
    {number:"12", image:"./img/family3Son.png"}
];

//last number of the group
const group = ["4","8","12"]

//CHANGE HERE FOR THE NUMBER OF CARDS PER GROUP TO REMOVE SAME NUMBER OF CARDs AND SAME FOR BUTTONS
const numberOfCardsInAGroup = 4;
const numberOfButtons = 4;

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        instruction.classList.remove("hide")
        currentQuestion = 0;
    }, 200);
})

began.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        instruction.classList.add("hide")
        game.classList.remove("hide")
        startGame = true
        score = 0
        answeredCorrect = 0
        Question()
    }, 200);
})

playAgain.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200);
})

//event listener for the all button
choiceButtons.forEach(function(currentBtn){
    currentBtn.addEventListener("click", () => {
        if(!choosenAnswer){
            choosenAnswer = true
            let data = currentBtn.getAttribute("data")
            playClickSound()
            if(data == correctAnswer){
                score += 10
                answeredCorrect += 1
                scoreCount.innerHTML = `<b>${score}</b>`
                console.log(score)
                text.textContent = "Correct!"
                currentBtn.classList.add("correct")
            }
            if(data != correctAnswer){
                text.textContent = "Wrong!"
                currentBtn.classList.add("wrong")
                correctBtn.classList.add("correct")
            }
            let delay = setTimeout(() => {
                text.textContent = ""
                document.querySelector(".correct").classList.remove("correct")
                if(document.querySelector(".wrong") != null){
                    document.querySelector(".wrong").classList.remove("wrong")
                }
                startGame = true
                Question()
            }, 1500);
        }
    })
})

homeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        playClickSound()
        let delay = setTimeout(() => {
            location.assign('https://gimme.sg/activations/dementia/');
        }, 200);
    })
})

function Question(){

    if(currentQuestion == totalQuestion){
        game.classList.add("hide")
        final.classList.remove("hide")
        let starScore = totalQuestion / 5;
        let pass = totalQuestion / 2
        if(answeredCorrect == totalQuestion){
            clap.currentTime = 0
            clap.play()
            scoreText.textContent = "Excellent!"
            medal.src = "./img/Excellent.png"
        }
        else if(answeredCorrect >= pass){
            completed.currentTime = 0
            completed.play()
            scoreText.textContent = "Well done!"
            if(answeredCorrect < totalQuestion && answeredCorrect >= totalQuestion - starScore) // score < total && score >= 8
                medal.src = "./img/Well Done.png"
            else if(answeredCorrect < totalQuestion - starScore && answeredCorrect >= (totalQuestion - starScore - starScore)) // score < 8 && score >= 6
                medal.src = "./img/Well Done1.png"
            else
                medal.src = "./img/You Tried.png"
        }
        else if(answeredCorrect < pass){
            clap.currentTime = 0
            clap.play()
            scoreText.textContent = "You tried!"
            if(answeredCorrect == starScore + starScore)
                medal.src = "./img/You Tried.png"
            else if(answeredCorrect < starScore + starScore && score >= starScore) // score < 4 && score >= 2
                medal.src = "./img/You Tried1.png"
            else
                medal.src = "./img/You Tried2.png"
        }
        words.innerHTML = answeredCorrect + "/" + totalQuestion
        return
    }

    currentQuestion += 1;
    questionNumber.innerHTML = currentQuestion + "/" + totalQuestion

    let tempoArray = []

    for(let i = 0; i < character.length; i++){
        tempoArray.push(character[i])
    }

    let correctAnswerArray = [];
    let buttonsArray = [];

    //get random group
    let randomQuestionGroup = Math.floor(Math.random() * group.length)

    //remove correct answer
    for(let i = 0; i < numberOfCardsInAGroup; i++){
        let removeCurrent = parseInt(group[randomQuestionGroup]) - i - 1
        correctAnswerArray.push(tempoArray[removeCurrent])
        tempoArray.splice(removeCurrent, 1)
    }

    choosenAnswer = false

    //give all wrong answer
    choiceButtons.forEach(function(item){
        let randomQuestionIndex = Math.floor(Math.random() * tempoArray.length);
        item.src = tempoArray[randomQuestionIndex].image
        item.setAttribute("data", tempoArray[randomQuestionIndex].number)
        tempoArray.splice(randomQuestionIndex, 1);
        buttonsArray.push(item)
    })

    console.log(buttonsArray)

    for(let i = 1; i < numberOfButtons; i++){
        let randomBtn = Math.floor(Math.random() * buttonsArray.length)
        let randomCorrectAnswer = Math.floor(Math.random() * correctAnswerArray.length)

        let wrongBtn = buttonsArray[randomBtn];
        let wrongAnswer = correctAnswerArray[randomCorrectAnswer]

        wrongBtn.src = wrongAnswer.image
        wrongBtn.setAttribute("data", wrongAnswer.number)

        buttonsArray.splice(randomBtn, 1);
        correctAnswerArray.splice(randomCorrectAnswer, 1);

    }
    correctBtn = buttonsArray[0];
    correctAnswer = correctBtn.getAttribute("data")

    console.log(correctAnswer)
}

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });