let data = [

    {
        "question": "Which one are you?",
        "answerA": "Extrovert",
        "answerB": "Introvert"
    },

    {
        "question": "Which one are you?",
        "answerA": "Curious",
        "answerB": "Agreeable"
    }
];



console.log(data);


document.addEventListener("DOMContentLoaded", function() {

    loadQuestions();


});



function loadQuestions() {

    let questionNumber = 0;

    let questions = document.getElementsByClassName("questions");


    for (let i = 0; i < data.length; i++) {


        let newQuestion = document.createElement("span");
        newQuestion.className = "title";
        newQuestion.innerText = data[i].question;

        let optionA = document.createElement("button");
        optionA.className = "btn";
        optionA.id = data[i].answerA;
        optionA.innerText = data[i].answerA;

        let optionB = document.createElement("button");
        optionB.className = "btn";
        optionB.id = data[i].answerB;
        optionB.innerText = data[i].answerB;

        questions[questionNumber].appendChild(newQuestion);
        questions[questionNumber].appendChild(optionA);
        questions[questionNumber].appendChild(optionB);
        questionNumber++;




    }


    let answer1 = document.getElementById("Extrovert");

    answer1.addEventListener("click", function() {
        console.log("EXTROVERT");

        let background = document.getElementById("container");
        background.style.backgroundColor = "gold";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";


        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "You are more likely a dog person!";

        let newImg = document.createElement("img");
        newImg.ClassName = "resultImg";
        newImg.src = "assets/pic/dog.jpg";


        let column = document.getElementById("square");
        column.innerHTML = "";
        column.appendChild(newImg);


    });

    let answer2 = document.getElementById("Introvert");

    answer2.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "pink";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "You are more likely a cat person!";

        let newImg = document.createElement("img");
        newImg.ClassName = "resultImg";
        newImg.src = "assets/pic/cat.jpg";

        let column = document.getElementById("square");
        column.innerHTML = "";
        column.appendChild(newImg);

    });


    let answer3 = document.getElementById("Curious");

    answer3.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "pink";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "You are more likely a cat person!";

        let newImg = document.createElement("img");
        newImg.ClassName = "resultImg";
        newImg.src = "assets/pic/cat.jpg";

        let column = document.getElementById("square");
        column.innerHTML = "";
        column.appendChild(newImg);


    });

    let answer4 = document.getElementById("Agreeable");

    answer4.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "gold";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "You are more likely a dog person!";

        let newImg = document.createElement("img");
        newImg.ClassName = "resultImg";
        newImg.src = "assets/pic/dog.jpg";


        let column = document.getElementById("square");
        column.innerHTML = "";
        column.appendChild(newImg);



    });

}