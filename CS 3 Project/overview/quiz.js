const quizData = [
    {
        question: "What is the primary cause of climate change?",
        options: ["Deforestation", "Burning fossil fuels", "Plastic waste", "Overpopulation"],
        correct: 1
    },
    {
        question: "Which SDG goal is focused on Peace, Justice, and Strong Institutions?",
        options: ["Goal 10", "Goal 13", "Goal 16", "Goal 17"],
        correct: 2
    },
    {
        question: "What can individuals do to reduce their carbon footprint?",
        options: ["Use public transportation", "Recycle waste", "Switch to renewable energy", "All of the above"],
        correct: 3
    },
    {
        question: "Which organization promotes global peace and justice?",
        options: ["World Health Organization", "United Nations", "IMF", "NATO"],
        correct: 1
    },
    {
        question: "How does deforestation contribute to climate change?",
        options: ["Increases CO2 levels", "Cools the planet", "Increases oxygen levels", "None of the above"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.createElement("div");
quizContainer.id = "quiz-container";
document.body.appendChild(quizContainer);

function loadQuestion() {
    quizContainer.innerHTML = "";
    let questionData = quizData[currentQuestion];
    
    let questionElement = document.createElement("h2");
    questionElement.innerText = questionData.question;
    quizContainer.appendChild(questionElement);
    
    questionData.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("quiz-option");
        button.addEventListener("click", () => checkAnswer(index));
        quizContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>`;
    let feedback = document.createElement("p");
    feedback.innerText = score >= 3 ? "Great job! Keep learning about SDGs." : "Keep learning and try again!";
    quizContainer.appendChild(feedback);
}

loadQuestion();