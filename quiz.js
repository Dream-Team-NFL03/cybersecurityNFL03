// Questions that will be asked
let startingval = 10;
const Conversion = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", 1, "a", "b", "c", "d", "e", "f", "g", "h", "i", 3, 2, "b", "c", "d", "e", "f", "g", "h", "i", 6, 5, 4, "c", "d", "e", "f", "g", "h", "i", 10, 9, 8, 7, "d", "e", "f", "g", "h", "i", 15, 14, 13, 12, 11, "e", "f", "g", "h", "i", 21, 20, 19, 18, 17, 16];
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

let score = 0
let afjy = 1

 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[Conversion[startingval] - 1].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < 6; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
    
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
    
        choiceLabel.textContent = Questions[Conversion[startingval] - 1].a[i].text;
    
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
    const nextQuestionIndex = Questions[Conversion[startingval] - 1].a[selectedAns].isCorrect
        ? startingval + 11  // Go to the next question if the answer is correct
        : startingval + 10; // Skip the next question if the answer is incorrect

    if (nextQuestionIndex < 60) {
        startingval = nextQuestionIndex;
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
 
    if (Questions[Conversion[startingval] - 1].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}