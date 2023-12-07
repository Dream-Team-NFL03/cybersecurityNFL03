// Questions that will be asked
const Questions = [{
    q: "Question 1?", 
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
    q: "Question 21", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 300?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 301?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 310", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 4000?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 4001", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 4010?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 4011?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50000?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50001?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50010", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50011?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 50100?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600000?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600001", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600010?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600011?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600100", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600101?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
},
{
    q: "Question 600110?", 
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
}
]
 
let currQuestion = 0
let score = 0
 
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
    if (currQuestion < 5) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
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
