const start = document.querySelector(".start");
const startButton = document.querySelector(".startButton");
const game = document.querySelector(".game");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const timerCount = document.querySelector(".timer-count");
const scoreCount = document.querySelector(".score-count");
const final = document.querySelector(".final");
const wellDone = document.querySelector(".wellDone");
const playAgain = document.querySelectorAll(".playAgain");
const resultScoreCount = document.querySelectorAll(".result-score-count");
let startGame;
let time;

let score = 0;
let correctAnswer;
let pattern;
let choice;
let choicePattern;
let choosenAnswer

let wrongAns1;
let wrongAns2;
let wrongAns3;
let wrongAns4;

let wrongImg1;
let wrongImg2;
let wrongImg3;
let wrongImg4;

let wrongPattern1
let wrongPattern2
let wrongPattern3
let wrongPattern4

const family1 =[
    {number:"2", pattern:"0", image:"./img/Fish Seller_ Mrs. Fillet.png"},
    {number:"1", pattern:"0", image:"./img/Fish Seller_ Mr. Fillet.png"},
    {number:"3", pattern:"0", image:"./img/Fish Seller_ Freddy Fillet.png"},
    {number:"4", pattern:"0", image:"./img/Fish Seller_ Flossie Fillet.png"},
];
const family2 =[
    {number:"1", pattern:"1", image:"./img/Gardener_ Mr. Weeder.png"},
    {number:"4", pattern:"1", image:"./img/Gardener_ Wendy Weeder.png"},
    {number:"2", pattern:"1", image:"./img/Gardener_ Mrs. Weeder.png"},
    {number:"3", pattern:"1", image:"./img/Gardener_ Willy Weeder.png"},
];
const family3 =[
    {number:"4", pattern:"2", image:"./img/Policemen_ Polly Plod.png"},
    {number:"3", pattern:"2", image:"./img/Policemen_ Percy Plod.png"},
    {number:"2", pattern:"2", image:"./img/Policemen_Mrs. Plod.png"},
    {number:"1", pattern:"2", image:"./img/Policemen_Mr. Plod.png"},
];

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    time = 30
    timerCount.innerHTML = `${time} s`;
    score = 0
    Question()
})

ans1.addEventListener("click", () => {
    if(choosenAnswer == false){
        /*ans2.style.backgroundImage = "none"
        ans3.style.backgroundImage = "none"
        ans4.style.backgroundImage = "none"
        ans1.style.backgroundImage = "url('./img/selecttile.png')"
        ans1.style.backgroundSize = "contain"
        ans1.style.backgroundRepeat = "no-repeat"
        choice = wrongAns1
        choicePattern = wrongPattern1*/
        choosenAnswer = true
        if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
            score = score + 10;
            ans1.innerHTML=`
                <img class="overlay" src="./img/Correct.png">
                <img src="${wrongImg1}"></div>`
        }
        else{
            score = score - 5;
            ans1.innerHTML=`
                <img class="overlay" src="./img/wrong.png">
                <img src="${wrongImg1}"></div>`
                if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
                    ans3.innerHTML=`
                <img class="overlay" src="./img/Correct.png">
                <img src="${wrongImg3}"></div>`
                }
                if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
                    ans2.innerHTML=`
                <img class="overlay" src="./img/Correct.png">
                <img src="${wrongImg2}"></div>`
                }
                if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
                    ans4.innerHTML=`
                <img class="overlay" src="./img/Correct.png">
                <img src="${wrongImg4}"></div>`
                }
        }
        let delay = setTimeout(() => {
            Question()
          }, 1500);
    }
})

ans2.addEventListener("click", () => {
    if(choosenAnswer == false){
    /*ans1.style.backgroundImage = "none"
    ans3.style.backgroundImage = "none"
    ans4.style.backgroundImage = "none"
    ans2.style.backgroundImage = "url('./img/selecttile.png')"
    ans2.style.backgroundSize = "contain"
    ans2.style.backgroundRepeat = "no-repeat"
    choice = wrongAns2
    choicePattern = wrongPattern2*/
    choosenAnswer = true
    if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
        score = score + 10;
        ans2.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg2}"></div>`
    }
    else{
        score = score - 5;
        ans2.innerHTML=`
            <img class="overlay" src="./img/wrong.png">
            <img src="${wrongImg2}"></div>`
            if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
                ans1.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg1}"></div>`
            }
            if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
                ans3.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg3}"></div>`
            }
            if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
                ans4.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg4}"></div>`
            }
    }
    let delay = setTimeout(() => {
        Question()
      }, 1500);
    }
})

ans3.addEventListener("click", () => {
    if(choosenAnswer == false){
    /*ans1.style.backgroundImage = "none"
    ans2.style.backgroundImage = "none"
    ans4.style.backgroundImage = "none"
    ans3.style.backgroundImage = "url('./img/selecttile.png')"
    ans3.style.backgroundSize = "contain"
    ans3.style.backgroundRepeat = "no-repeat"*>
    choice = wrongAns3
    choicePattern = wrongPattern3*/
    choosenAnswer = true
    if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
        score = score + 10;
        ans3.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg3}"></div>`
    }
    else{
        score = score - 5;
        ans3.innerHTML=`
            <img class="overlay" src="./img/wrong.png">
            <img src="${wrongImg3}"></div>`
            if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
                ans1.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg1}"></div>`
            }
            if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
                ans2.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg2}"></div>`
            }
            if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
                ans4.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg4}"></div>`
            }
    }
    let delay = setTimeout(() => {
        Question()
      }, 1500);
    }
})

ans4.addEventListener("click", () => {
    if(choosenAnswer == false){
    /*ans1.style.backgroundImage = "none"
    ans2.style.backgroundImage = "none"
    ans3.style.backgroundImage = "none"
    ans4.style.backgroundImage = "url('./img/selecttile.png')"
    ans4.style.backgroundSize = "contain"
    ans4.style.backgroundRepeat = "no-repeat"
    choice = wrongAns4
    choicePattern = wrongPattern4*/
    choosenAnswer = true
    if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
        score = score + 10;
        ans4.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg4}"></div>`
    }
    else{
        score = score - 5;
        ans4.innerHTML=`
            <img class="overlay" src="./img/wrong.png">
            <img src="${wrongImg4}"></div>`
            if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
                ans1.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg1}"></div>`
            }
            if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
                ans2.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg2}"></div>`
            }
            if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
                ans3.innerHTML=`
            <img class="overlay" src="./img/Correct.png">
            <img src="${wrongImg3}"></div>`
            }
    }
    let delay = setTimeout(() => {
        Question()
      }, 1500);
    }
})
playAgain.forEach((btn) => {
    btn.addEventListener("click", () => {
    wellDone.classList.add("hide")
    final.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    time = 30
    timerCount.innerHTML = `${time} s`;
    score = 0
    Question()
})
})

function updateCountDown(){
    if(startGame == true){
        timerCount.innerHTML = `${time} s`;
        scoreCount.innerHTML = `${score} pt`;
        if(time == 0){
            startGame = false
            if(score >= 30){
                game.classList.add("hide")
                wellDone.classList.remove("hide")
                resultScoreCount.forEach(function(item){
                    item.innerHTML = `${score}`
                })
            }
            else{
                game.classList.add("hide")
                final.classList.remove("hide")
                resultScoreCount.forEach(function(item){
                    item.innerHTML = `${score}`
                })
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
    choosenAnswer = false
    let correctImg
    let newQuestion
    let randomQuestionIndex = Math.floor(Math.random() * 3);

    if(randomQuestionIndex == 0){
        newQuestion = family1
    }
    if(randomQuestionIndex == 1){
        newQuestion = family2
    }
    if(randomQuestionIndex == 2){
        newQuestion = family3
    }
    let missingTile = Math.floor(Math.random() * 4);
    console.log("wrong " + missingTile)
    correctImg = newQuestion[missingTile].image;
    correctAnswer = newQuestion[missingTile].number;
    pattern = newQuestion[missingTile].pattern;
    let missingRandomTile = Math.floor(Math.random() * 4);
    let missingRandomPattern;
    if(pattern == 0){
        missingRandomPattern = Math.random() > 0.5 ? 1 : 2
    }
    if(pattern == 1){
        missingRandomPattern = Math.random() > 0.5 ? 0 : 2
    }
    if(pattern == 2){
        missingRandomPattern = Math.random() > 0.5 ? 0 : 1
    }

    if(missingRandomPattern == 0){
        //fish
        console.log("F")
        if(missingRandomTile == 0){
            newQuestion[missingTile].image = "./img/Fish Seller_ Mr. Fillet.png";
        }
        if(missingRandomTile == 1){
            newQuestion[missingTile].image = "./img/Fish Seller_ Mrs. Fillet.png";
        }
        if(missingRandomTile == 2){
            newQuestion[missingTile].image = "./img/Fish Seller_ Freddy Fillet.png";
        }
        if(missingRandomTile == 3){
            newQuestion[missingTile].image = "./img/Fish Seller_ Flossie Fillet.png";
        }
    }
    if(missingRandomPattern == 1){
        //garden
        console.log("G")
        if(missingRandomTile == 0){
            newQuestion[missingTile].image = "./img/Gardener_ Mr. Weeder.png";
        }
        if(missingRandomTile == 1){
            newQuestion[missingTile].image = "./img/Gardener_ Mrs. Weeder.png";
        }
        if(missingRandomTile == 2){
            newQuestion[missingTile].image = "./img/Gardener_ Willy Weeder.png";
        }
        if(missingRandomTile == 3){
            newQuestion[missingTile].image = "./img/Gardener_ Wendy Weeder.png";
        }
    }
    if(missingRandomPattern == 2){
        //police
        console.log("P")
        if(missingRandomTile == 0){
            newQuestion[missingTile].image = "./img/Policemen_Mr. Plod.png";
        }
        if(missingRandomTile == 1){
            newQuestion[missingTile].image = "./img/Policemen_Mrs. Plod.png";
        }
        if(missingRandomTile == 2){
            newQuestion[missingTile].image = "./img/Policemen_ Percy Plod.png";
        }
        if(missingRandomTile == 3){
            newQuestion[missingTile].image = "./img/Policemen_ Polly Plod.png";
        }
    }
    console.log(newQuestion)
    let arrangeRandom = Math.floor(Math.random() * 12);
    console.log(arrangeRandom)
    if(arrangeRandom == 0){
        ans1.innerHTML = `<img src="${newQuestion[0].image}">`
        ans2.innerHTML = `<img src="${newQuestion[1].image}">`
        ans3.innerHTML = `<img src="${newQuestion[2].image}">`
        ans4.innerHTML = `<img src="${newQuestion[3].image}">`
        wrongAns1 = newQuestion[0].number
        wrongPattern1 = newQuestion[0].pattern
        wrongImg1 = newQuestion[0].image
        wrongAns2 = newQuestion[1].number
        wrongPattern2 = newQuestion[1].pattern
        wrongImg2 = newQuestion[1].image
        wrongAns3 = newQuestion[2].number
        wrongPattern3 = newQuestion[2].pattern
        wrongImg3 = newQuestion[2].image
        wrongAns4 = newQuestion[3].number
        wrongPattern4 = newQuestion[3].pattern
        wrongImg4 = newQuestion[3].image
    }
    if(arrangeRandom == 1){
        ans1.innerHTML = `<img src="${newQuestion[1].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[3].image}">`
        ans4.innerHTML = `<img src="${newQuestion[0].image}"
        >`
        wrongAns1 = newQuestion[1].number
        wrongPattern1 = newQuestion[1].pattern
        wrongImg1 = newQuestion[1].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[3].number
        wrongPattern3 = newQuestion[3].pattern
        wrongImg3 = newQuestion[3].image
        wrongAns4 = newQuestion[0].number
        wrongPattern4 = newQuestion[0].pattern
        wrongImg4 = newQuestion[0].image
    }
    if(arrangeRandom == 2){
        ans1.innerHTML = `<img src="${newQuestion[2].image}">`
        ans2.innerHTML = `<img src="${newQuestion[3].image}">`
        ans3.innerHTML = `<img src="${newQuestion[0].image}">`
        ans4.innerHTML = `<img src="${newQuestion[1].image}"
        >`
        wrongAns1 = newQuestion[2].number
        wrongPattern1 = newQuestion[2].pattern
        wrongImg1 = newQuestion[2].image
        wrongAns2 = newQuestion[3].number
        wrongPattern2 = newQuestion[3].pattern
        wrongImg2 = newQuestion[3].image
        wrongAns3 = newQuestion[0].number
        wrongPattern3 = newQuestion[0].pattern
        wrongImg3 = newQuestion[0].image
        wrongAns4 = newQuestion[1].number
        wrongPattern4 = newQuestion[1].pattern
        wrongImg4 = newQuestion[1].image
    }
    if(arrangeRandom == 3){
        ans1.innerHTML = `<img src="${newQuestion[3].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[1].image}">`
        ans4.innerHTML = `<img src="${newQuestion[0].image}">`
        wrongAns1 = newQuestion[3].number
        wrongPattern1 = newQuestion[3].pattern
        wrongImg1 = newQuestion[3].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[1].number
        wrongPattern3 = newQuestion[1].pattern
        wrongImg3 = newQuestion[1].image
        wrongAns4 = newQuestion[0].number
        wrongPattern4 = newQuestion[0].pattern
        wrongImg4 = newQuestion[0].image
    }
    if(arrangeRandom == 4){
        ans1.innerHTML = `<img src="${newQuestion[1].image}">`
        ans2.innerHTML = `<img src="${newQuestion[3].image}">`
        ans3.innerHTML = `<img src="${newQuestion[0].image}">`
        ans4.innerHTML = `<img src="${newQuestion[2].image}">`
        wrongAns1 = newQuestion[1].number
        wrongPattern1 = newQuestion[1].pattern
        wrongImg1 = newQuestion[1].image
        wrongAns2 = newQuestion[3].number
        wrongPattern2 = newQuestion[3].pattern
        wrongImg2 = newQuestion[3].image
        wrongAns3 = newQuestion[0].number
        wrongPattern3 = newQuestion[0].pattern
        wrongImg3 = newQuestion[0].image
        wrongAns4 = newQuestion[2].number
        wrongPattern4 = newQuestion[2].pattern
        wrongImg4 = newQuestion[2].image
    }
    if(arrangeRandom == 5){
        ans1.innerHTML = `<img src="${newQuestion[3].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[0].image}">`
        ans4.innerHTML = `<img src="${newQuestion[1].image}">`
        wrongAns1 = newQuestion[3].number
        wrongPattern1 = newQuestion[3].pattern
        wrongImg1 = newQuestion[3].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[0].number
        wrongPattern3 = newQuestion[0].pattern
        wrongImg3 = newQuestion[0].image
        wrongAns4 = newQuestion[1].number
        wrongPattern4 = newQuestion[1].pattern
        wrongImg4 = newQuestion[1].image
    }
    if(arrangeRandom == 6){
        ans1.innerHTML = `<img src="${newQuestion[0].image}">`
        ans2.innerHTML = `<img src="${newQuestion[3].image}">`
        ans3.innerHTML = `<img src="${newQuestion[1].image}">`
        ans4.innerHTML = `<img src="${newQuestion[2].image}">`
        wrongAns1 = newQuestion[0].number
        wrongPattern1 = newQuestion[0].pattern
        wrongImg1 = newQuestion[0].image
        wrongAns2 = newQuestion[3].number
        wrongPattern2 = newQuestion[3].pattern
        wrongImg2 = newQuestion[3].image
        wrongAns3 = newQuestion[1].number
        wrongPattern3 = newQuestion[1].pattern
        wrongImg3 = newQuestion[1].image
        wrongAns4 = newQuestion[2].number
        wrongPattern4 = newQuestion[2].pattern
        wrongImg4 = newQuestion[2].image
    }
    if(arrangeRandom == 7){
        ans1.innerHTML = `<img src="${newQuestion[2].image}">`
        ans2.innerHTML = `<img src="${newQuestion[1].image}">`
        ans3.innerHTML = `<img src="${newQuestion[0].image}">`
        ans4.innerHTML = `<img src="${newQuestion[3].image}">`
        wrongAns1 = newQuestion[2].number
        wrongPattern1 = newQuestion[2].pattern
        wrongImg1 = newQuestion[2].image
        wrongAns2 = newQuestion[1].number
        wrongPattern2 = newQuestion[1].pattern
        wrongImg2 = newQuestion[1].image
        wrongAns3 = newQuestion[0].number
        wrongPattern3 = newQuestion[0].pattern
        wrongImg3 = newQuestion[0].image
        wrongAns4 = newQuestion[3].number
        wrongPattern4 = newQuestion[3].pattern
        wrongImg4 = newQuestion[3].image
    }
    if(arrangeRandom == 8){
        ans1.innerHTML = `<img src="${newQuestion[2].image}">`
        ans2.innerHTML = `<img src="${newQuestion[0].image}">`
        ans3.innerHTML = `<img src="${newQuestion[1].image}">`
        ans4.innerHTML = `<img src="${newQuestion[3].image}">`
        wrongAns1 = newQuestion[2].number
        wrongPattern1 = newQuestion[2].pattern
        wrongImg1 = newQuestion[2].image
        wrongAns2 = newQuestion[0].number
        wrongPattern2 = newQuestion[0].pattern
        wrongImg2 = newQuestion[0].image
        wrongAns3 = newQuestion[1].number
        wrongPattern3 = newQuestion[1].pattern
        wrongImg3 = newQuestion[1].image
        wrongAns4 = newQuestion[3].number
        wrongPattern4 = newQuestion[3].pattern
        wrongImg4 = newQuestion[3].image
    }
    if(arrangeRandom == 9){
        ans1.innerHTML = `<img src="${newQuestion[3].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[1].image}">`
        ans4.innerHTML = `<img src="${newQuestion[0].image}">`
        wrongAns1 = newQuestion[3].number
        wrongPattern1 = newQuestion[3].pattern
        wrongImg1 = newQuestion[3].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[1].number
        wrongPattern3 = newQuestion[1].pattern
        wrongImg3 = newQuestion[1].image
        wrongAns4 = newQuestion[0].number
        wrongPattern4 = newQuestion[0].pattern
        wrongImg4 = newQuestion[0].image
    }
    if(arrangeRandom == 10){
        ans1.innerHTML = `<img src="${newQuestion[1].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[3].image}">`
        ans4.innerHTML = `<img src="${newQuestion[0].image}">`
        wrongAns1 = newQuestion[1].number
        wrongPattern1 = newQuestion[1].pattern
        wrongImg1 = newQuestion[1].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[3].number
        wrongPattern3 = newQuestion[3].pattern
        wrongImg3 = newQuestion[3].image
        wrongAns4 = newQuestion[0].number
        wrongPattern4 = newQuestion[0].pattern
        wrongImg4 = newQuestion[0].image
    }
    if(arrangeRandom == 11){
        ans1.innerHTML = `<img src="${newQuestion[0].image}">`
        ans2.innerHTML = `<img src="${newQuestion[2].image}">`
        ans3.innerHTML = `<img src="${newQuestion[1].image}">`
        ans4.innerHTML = `<img src="${newQuestion[3].image}">`
        wrongAns1 = newQuestion[0].number
        wrongPattern1 = newQuestion[0].pattern
        wrongImg1 = newQuestion[0].image
        wrongAns2 = newQuestion[2].number
        wrongPattern2 = newQuestion[2].pattern
        wrongImg2 = newQuestion[2].image
        wrongAns3 = newQuestion[1].number
        wrongPattern3 = newQuestion[1].pattern
        wrongImg3 = newQuestion[1].image
        wrongAns4 = newQuestion[3].number
        wrongPattern4 = newQuestion[3].pattern
        wrongImg4 = newQuestion[3].image
    }
        console.log(wrongPattern1, wrongAns1)
        console.log(wrongPattern2, wrongAns2)
        console.log(wrongPattern3, wrongAns3)
        console.log(wrongPattern4, wrongAns4)
        newQuestion[missingTile].image = correctImg;
}

setInterval(updateCountDown, 1000)
setInterval(updateScore, 1)