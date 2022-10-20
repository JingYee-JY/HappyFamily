const start = document.querySelector(".start");
const startButton = document.querySelector(".startButton");
const game = document.querySelector(".game");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const timerCount = document.querySelector(".timer-count");
const scoreCount = document.querySelector(".score-count");
const popUp = document.querySelector(".popUp");
const picture = document.querySelector(".picture");
const inform = document.querySelector(".inform");
const final = document.querySelector(".final");
const wellDone = document.querySelector(".wellDone");
const playAgain = document.querySelectorAll(".playAgain");
const homeButton = document.querySelectorAll(".home");
const resultScoreCount = document.querySelectorAll(".result-score-count");

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const clap = document.getElementById("clap")

let startGame;
let time;

let score = 0;
let correctAnswer;
let pattern;
let choice;
let choicePattern;
let choosenAnswer
let tempoArray = [];

const character =[
    {number:"1", image:"./img/Fish Seller_ Mrs. Fillet.png"},
    {number:"2", image:"./img/Gardener_ Mr. Weeder.png"},
    {number:"3", image:"./img/Policemen_ Polly Plod.png"},
    {number:"4", image:"./img/Fish Seller_ Mr. Fillet.png"},
    {number:"5", image:"./img/Gardener_ Wendy Weeder.png"},
    {number:"6", image:"./img/Policemen_ Percy Plod.png"},
    {number:"7", image:"./img/Fish Seller_ Freddy Fillet.png"},
    {number:"8", image:"./img/Gardener_ Mrs. Weeder.png"},
    {number:"9", image:"./img/Policemen_Mrs. Plod.png"},
    {number:"10", image:"./img/Fish Seller_ Flossie Fillet.png"},
    {number:"11", image:"./img/Gardener_ Willy Weeder.png"},
    {number:"12", image:"./img/Policemen_Mr. Plod.png"}
];

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        game.classList.remove("hide")
        startGame = true
        time = 30
        timerCount.innerHTML = `${time} s`;
        score = 0
        Question()
    }, 200);
})

for(let y=1; y < 5; y++){
    let currentBtnClass = "btn" + y

    let currentBtn = document.querySelector(`.${currentBtnClass}`)
    currentBtn.addEventListener("click", () => {
        let data = currentBtn.getAttribute("data")
        startGame = false
        playClickSound()
        popUp.classList.remove("hide")
        if(data == correctAnswer){
            score += 10
            picture.src = "./img/correct.png"
            inform.innerHTML = "That's correct!"
        }
        if(data != correctAnswer){
            picture.src = "./img/wrong.png"
            inform.innerHTML = "Try again!"
        }
        let delay = setTimeout(() => {
            popUp.classList.add("hide")
            startGame = true
            Question()
          }, 1500);
    })

}

playAgain.forEach((btn) => {
    btn.addEventListener("click", () => {
        playClickSound()
        let delay = setTimeout(() => {
            wellDone.classList.add("hide")
            final.classList.add("hide")
            start.classList.remove("hide")
        }, 200);
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

function updateCountDown(){
    if(startGame == true){
        timerCount.innerHTML = `${time} s`;
        scoreCount.innerHTML = `${score} pt`;
        if(time == 0){
            startGame = false
            if(score >= 50){
                clap.currentTime = 0
                clap.play()
                game.classList.add("hide")
                wellDone.classList.remove("hide")
                resultScoreCount.forEach(function(item){
                    item.innerHTML = `${score}`
                })
                return
            }
            else{
                completed.currentTime = 0
                completed.play()
                game.classList.add("hide")
                final.classList.remove("hide")
                resultScoreCount.forEach(function(item){
                    item.innerHTML = `${score}`
                })
                return
            }
        }
        time--;
    }
}

function updateScore(){
    if(startGame == true){
        scoreCount.innerHTML = `${score} pt`;
    }
}

function Question(){

    if(tempoArray.length < 2){
        console.log("D")
        for(let i = 0; i < character.length; i++){
            tempoArray.push(character[i])
        }
    }
    choosenAnswer = false
    let randomQuestionIndex = Math.floor(Math.random() * tempoArray.length);

    for(let y = 1; y < 5; y++){
        let currentClass = "btn" + y;
        let currentBtn = document.querySelector(`.${currentClass}`)
        currentBtn.src = tempoArray[randomQuestionIndex].image
        currentBtn.setAttribute("data", tempoArray[randomQuestionIndex].number)
    }

    tempoArray.splice(randomQuestionIndex, 1);
    console.log(tempoArray)
    
    let correctAnswerIndex = Math.floor(Math.random() * tempoArray.length);
    console.log(correctAnswerIndex)
    let randomclass = "btn" + (Math.floor(Math.random() * 4) + 1);
    let randomBtn = document.querySelector(`.${randomclass}`)
    randomBtn.src = tempoArray[correctAnswerIndex].image
    correctAnswer = tempoArray[correctAnswerIndex].number
    randomBtn.setAttribute("data", correctAnswer)
    tempoArray.splice(correctAnswerIndex, 1)
}

setInterval(updateCountDown, 1000)
setInterval(updateScore, 1)

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });