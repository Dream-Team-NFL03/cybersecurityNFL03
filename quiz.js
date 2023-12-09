// Questions that will be asked
let startingval = 10;
const Conversion = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", 1, "a", "b", "c", "d", "e", "f", "g", "h", "i", 3, 2, "b", "c", "d", "e", "f", "g", "h", "i", 6, 5, 4, "c", "d", "e", "f", "g", "h", "i", 10, 9, 8, 7, "d", "e", "f", "g", "h", "i", 15, 14, 13, 12, 11, "e", "f", "g", "h", "i", 21, 20, 19, 18, 17, 16];
const Questions = [{
    q: "Question 10?",
    a: [{ text: "You run a trustworthy antivirus scan to remove any potential malware from your device.", isCorrect: true},
    { text: "You call 1-877-438-4338 to report that you are a victim of identity theft.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 21?",
    a: [{ text: "File a data breach case; immediately restore data from an offline backup.", isCorrect: false},
    { text: "Immediately remove the malware from your device using trustworthy antivirus, then Owen must inform his contacts that his device has been compromised and emails from Owen’s computer are malicious.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 20?",
    a: [{ text: "File a data breach case; immediately restore data from an offline backup.", isCorrect: false},
    { text: "Immediately remove the malware from your device using trustworthy antivirus, then Owen must inform his contacts that his device has been compromised and emails from Owen’s computer are malicious.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 32?",
    a: [{ text: "Attempt to remove Owen’s email address from the black web, this will remove the source of the issue.", isCorrect: false},
    { text: "Install a firewall to filter phishing emails out.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 31?",
    a: [{ text: "File a data breach. Inform the customers. Follow the disaster recovery plan.", isCorrect: true},
    { text: "Run antivirus software on all the organization’s computers to effectively resolve the problems.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 30?",
    a: [{ text: "Have all the passwords of his employees changed and have the employees’ contacts be warned that the employees’ device has been compromised, and have them run antivirus software.", isCorrect: true},
    { text: "Owen can simply replace the infected devices with new uncompromised devices.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 43?",
    a: [{ text: "The email appears suspicious because the link is suspicious.", isCorrect: true},
    { text: "The email appears suspicious because the link is suspicious.", isCorrect: false}
    ],
    showImage: true, // Add a property to indicate whether to show image
    imagePath: "osha-violation.jpeg" // Add the path to the image 
},
{
    q: "Question 42?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 41?",
    a: [{ text: "Incorrect", isCorrect: true},
    { text: "Correct", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 40?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 54?",
    a: [{ text: "Incorrect", isCorrect: true},
    { text: "Correct", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 53?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 52?",
    a: [{ text: "Incorrect", isCorrect: true},
    { text: "Correct", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 51?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 50?",
    a: [{ text: "Incorrect", isCorrect: true},
    { text: "Correct", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 65?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 64",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 63?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 62?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 61",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "Question 60?",
    a: [{ text: "Incorrect", isCorrect: false},
    { text: "Correct", isCorrect: true}
    ]
 
}
]

let score = 0
 

function loadQues() {
    const questionContainer = document.getElementById("ques");
    const opt = document.getElementById("opt");
    const imageContainer = document.getElementById("image-container"); // New container for image
  
    const currentQuestion = Questions[Conversion[startingval] - 1];
    questionContainer.textContent = currentQuestion.q;
    opt.innerHTML = "";
  
    if (currentQuestion.showImage) {
      // Display the image if showImage is true
      const image = document.createElement("img");
      image.src = currentQuestion.imagePath;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
    } else {
      // Clear the image container if showImage is false
      imageContainer.innerHTML = "";
    }
  
    for (let i = 0; i < 6; i++) {
      const choicesdiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");
  
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
  
      choiceLabel.textContent = currentQuestion.a[i].text;
  
      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      opt.appendChild(choicesdiv);
    }
  }
  
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score");
    const resultContainer = document.getElementById("result-container"); // Added result container
    const resultHeading = document.createElement("h1");
    const resultParagraph = document.createElement("p");
    const resultImage = document.createElement("img");

    totalScore.textContent = `You scored ${score} out of 5`;

    // Customize message and image based on the score
    if (score === 5) {
        resultHeading.textContent = "Congratulations!";
        resultParagraph.textContent = "You aced the quiz!";
        resultImage.src = "sampimg.jpg"; // Replace with the path to your image
    } else if (score >= 3) {
        resultHeading.textContent = "Well Done!";
        resultParagraph.textContent = "You did a great job!";
        resultImage.src = "sampimg.jpg"; // Replace with the path to your image
    } else {
        resultHeading.textContent = "Keep Trying!";
        resultParagraph.textContent = "You can improve. Keep practicing!";
        resultImage.src = "sampimg.jpg"; // Replace with the path to your image
    }

    // Append elements to the result container
    resultContainer.appendChild(resultHeading);
    resultContainer.appendChild(resultParagraph);
    resultContainer.appendChild(resultImage);
}
 
 

function loadFeedbackMessage(isCorrect) {
    const feedbackContainer = document.getElementById("feedback");
    const feedbackMessage = document.createElement("p");

    feedbackMessage.textContent = isCorrect ? "Correct! Well done." : "Incorrect. Keep trying!";
    feedbackContainer.innerHTML = "";
    feedbackContainer.appendChild(feedbackMessage);
}

function nextQuestion() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    // Determine the next question based on the boolean value of isCorrect
    const isCorrect = Questions[Conversion[startingval] - 1].a[selectedAns].isCorrect;

    loadFeedbackMessage(isCorrect);

    const nextQuestionIndex = isCorrect
        ? startingval + 11  // Go to the next question if the answer is correct
        : startingval + 10; // Skip the next question if the answer is incorrect

    if (nextQuestionIndex < 60) {
        startingval = nextQuestionIndex;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        document.getElementById("feedback").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[Conversion[startingval] - 1].a[selectedAns].isCorrect) {
        score++;
    }

    nextQuestion();
}