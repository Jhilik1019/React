const questions = [
    {
        question: "What is a computer’s favorite snack??",
        options: ["Chips","Bits","Cookies","Popcorn"],
        answer: 2
    },
    {
        question: "Why did the computer go to the doctor?",
        options: ["Low battery", "Virus", "Lost memory", "Screen broken"],
        answer: 1
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "Hyper Text Markdown Language"],
        answer: 1
    },
     {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "JavaScript is a ___ language?",
        options: ["Programming", "Markup", "Styling", "Database"],
        answer: 0
    },
    {
        question: "Which tag is used for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<line>"],
        answer: 1
    }
];

let index = 0;
let score = 0;

// Load first question
loadQuestion();

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].question;

    let btns = document.querySelectorAll(".btn");
    btns.forEach((btn, i) => {
        btn.innerText = questions[index].options[i];
        btn.disabled = false;
    });

    document.getElementById("status").innerText = "";
}

function checkAnswer(selected) {
    let status = document.getElementById("status");
    let correct = questions[index].answer;

    if (selected === correct) {
        status.innerText = "Correct!";
        status.style.color = "green";
        score++;
    } else {
        status.innerText = "Wrong!";
        status.style.color = "red";
    }

    // disable options after choosing
    let btns = document.querySelectorAll(".btn");
    btns.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    index++;

    if (index >= questions.length) {
        document.getElementById("quiz-box").innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
            <button onclick="location.reload()">Restart</button>
        `;
        return;
    }

    loadQuestion();
}
