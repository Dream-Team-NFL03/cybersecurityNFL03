// Questions that will be asked
startingval = 10;
const Conversion = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 21, 1, 1, 1, 1, 1, 1, 1, 1, 30, 31, 32, 1, 1, 1, 1, 1, 1, 1, 40, 41, 42, 43, 1, 1, 1, 1, 1, 1, 50, 51, 52, 53, 54, 1, 1, 1, 1, 1, 60, 61, 62, 63, 64, 65];
const Questions = [{
    q: "Question 10?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 21?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 20?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 32?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 31?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 30?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 43?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 42?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 41?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 40?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 54?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 53?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 52?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 51?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 65?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 64", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 63?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 62?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 61", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 60?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
}
]

let currQuestion = 0
let score = 0
let afjy = 1

 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < 6; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
    
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
    
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
    
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of 6`
}
 
 
function nextQuestion() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    // Determine the next question based on the boolean value of isCorrect
    const nextQuestionIndex = Questions[currQuestion].a[selectedAns].isCorrect
        ? currQuestion + 4  // Go to the next question if the answer is correct
        : currQuestion + 1; // Skip the next question if the answer is incorrect

    if (nextQuestionIndex < Questions.length) {
        currQuestion = nextQuestionIndex;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
    afjy++;
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}