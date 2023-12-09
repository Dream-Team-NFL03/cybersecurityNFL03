// Questions that will be asked
let startingval = 10;
const Conversion = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", 1, "a", "b", "c", "d", "e", "f", "g", "h", "i", 3, 2, "b", "c", "d", "e", "f", "g", "h", "i", 6, 5, 4, "c", "d", "e", "f", "g", "h", "i", 10, 9, 8, 7, "d", "e", "f", "g", "h", "i", 15, 14, 13, 12, 11, "e", "f", "g", "h", "i", 21, 20, 19, 18, 17, 16];
const Questions = [{
    q: "Owen’s computer is running especially slow in terms of performance. Owen realizes that he may have downloaded some form of malware. How should he proceed?",
    a: [{ text: "You run a trustworthy antivirus scan to remove any potential malware from your device.", isCorrect: true},
    { text: "You call 1-877-438-4338 to report that you are a victim of identity theft.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "21: Owen’s antivirus software was successful in removing the malware, and it stated that the type of malware removed was spyware. How should he proceed?",
    a: [{ text: "File a data breach case; immediately restore data from an offline backup.", isCorrect: false},
    { text: "Immediately remove the malware from your device using trustworthy antivirus, then Owen must inform his contacts that his device has been compromised and emails from Owen’s computer are malicious.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "20: Owen’s employees alert Owen that malicious links have been sent from Owen’s computer to the employees of the small business. How should Owen proceed?",
    a: [{ text: "File a data breach case; immediately restore data from an offline backup.", isCorrect: false},
    { text: "Immediately remove the malware from your device using trustworthy antivirus, then Owen must inform his contacts that his device has been compromised and emails from Owen’s computer are malicious.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "32: Because Owen has successfully recovered from the software, he has mitigated damage from the malware. However, he still receives significantly more phishing emails than normal. How should he proceed?",
    a: [{ text: "Attempt to remove Owen’s email address from the black web, this will remove the source of the issue.", isCorrect: false},
    { text: "Install a firewall to filter phishing emails out.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "31: Owen has successfully removed the malware at this point, however, a bad choice caused Owen’s data to reach the wrong hands. The customer’s data, only the email addresses, on Owen’s computer has been leaked. How do you proceed?",
    a: [{ text: "File a data breach. Inform the customers. Follow the disaster recovery plan.", isCorrect: true},
    { text: "Run antivirus software on all the organization’s computers to effectively resolve the problems.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "30: Some of Owen’s employees have had their data compromised due to the worm malware. How should Owen proceed?",
    a: [{ text: "Have all the passwords of his employees changed and have the employees’ contacts be warned that the employees’ device has been compromised, and have them run antivirus software.", isCorrect: true},
    { text: "Owen can simply replace the infected devices with new uncompromised devices.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "43: You have done very well in maintaining the integrity of Owen’s business. Owen received an email regarding a violation. What should Owen do?",
    a: [{ text: "The email appears suspicious because the link is suspicious.", isCorrect: true},
    { text: "The email appears suspicious because the link is suspicious.", isCorrect: false}
    ],
    showImage: true, // Add a property to indicate whether to show image
    imagePath: "osha-violation.jpeg" // Add the path to the image 
},
{
    q: "42: Owen’s company has only suffered from one bad decision. Some information about Owen’s employees or Owen himself may be in the dark web. However, one specific employee, Meep, has their medical records compromised because their computer’s data got stolen. How should Meep proceed?",
    a: [{ text: "Meep should focus on maintaining accurate records of his healthcare. He should consider subscribing to antivirus software.", isCorrect: false},
    { text: "Meep should stay alert on bill, loans, back accounts, and health care insurance payments to ensure there is no suspicious activity. Meep should be prepared to report identify theft.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "41: The company is in a vulnerable position, losing its reputation. Major mistakes in the right plans of action caused many problems. Certain data about Owen, the employees, and the customers have been leaked. How should Owen proceed?",
    a: [{ text: "File a data breach. Mitigate the sharing of the leaked data. Prevent any more attacks by disconnecting the server until the situation is fully addressed.", isCorrect: true},
    { text: "Shut the company down. This is the best way to prevent further loss on both sides.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "40: The company’s customers’ data, including social security numbers, first and last names, date of birth, financial data, has been leaked. There are cases of identity theft reported by the customers. Owen’s business lost its reputation. How do you proceed?",
    a: [{ text: "Hire ethical white hat hackers to counter the damage caused by the black hat hackers. Then, report the damage done to a Federal Agency.", isCorrect: false},
    { text: "File a data breach. Inform the customers. Follow the disaster recovery plan. Offer the victims of the data breach compensation through free resources and financial compensation.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "54: You have helped Owen manage his business’ security well. How should Owen continue to maintain the security of the business?",
    a: [{ text: "Invest in better infrastructure.", isCorrect: true},
    { text: "Do not interfere with infrastructure that is already performing well.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "53: Owen’s company has only made one poor decision. However, some of their sensitive data regarding customer passwords was compromised. What should Owen do?",
    a: [{ text: "Invest in new infrastructure regarding cybersecurity.", isCorrect: false},
    { text: "Inform customers of the situation, have them update their passwords.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "52: The actions taken by Owen so far put the company in a poor situation. What should you do?",
    a: [{ text: "Make a better disaster improvement plan for the entire company and educate the employees about cybersecurity by having them read this website Security... Is a Tough Topic. (dream-team-nfl03.github.io).", isCorrect: true},
    { text: "Isolate the server connections to prevent malware such as spyware, worms, and trojans are unable to spread. However, the company’s computers would also become unusable.", isCorrect: false}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "51: With only one correct cybersecurity action, Owen’s company is not being successful. Loans were denied to the company; the company is financially suffering. Another ransomware attack occurs on the company’s insensitive data. How should Owen proceed?",
    a: [{ text: "Pay the ransom. Even though the hackers may not return the insensitive data or even ask for a higher ransom.", isCorrect: false},
    { text: "Refuse to pay the ransom, restore the lost data through a backup.", isCorrect: true}
    ],
    showImage: false, // Add a property to indicate whether to show image
    imagePath: "image1.jpg" // Add the path to the image 
},
{
    q: "50: Owen’s business has received lots of backlashes because of its poor management techniques. The company has noticed a 78% percent decrease in the number of customers. Profits dropped by 93%. The business cannot run anymore. What should Owen do?",
    a: [{ text: "Apologize to the customers for the harm caused, file bankruptcy.", isCorrect: true},
    { text: "Purchase Ransomware as a Service (Raas) software to start making money.", isCorrect: false}
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
    if (score >= 4) {
        resultHeading.textContent = "Good job!";
        resultParagraph.textContent = "Owen's business has prospered with prober cybersecurity tactics.";
        resultImage.src = "sampimg.jpg"; // Replace with the path to your image
    } else if (score >= 3) {
        resultHeading.textContent = "That was alright.";
        resultParagraph.textContent = "Owen's business and his employees have had a few issues when their cybersecurity was not managed well.";
        resultImage.src = "sampimg.jpg"; // Replace with the path to your image
    } else {
        resultHeading.textContent = "Oh no.";
        resultParagraph.textContent = "YOwen's business has suffered because of poor cybersecurity management.";
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
