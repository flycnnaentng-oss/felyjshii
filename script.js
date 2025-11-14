let correctAnswer = 0;
let score = 0;

// Generate random question
function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    let operators = ["+", "-", "*"];
    let op = operators[Math.floor(Math.random() * operators.length)];

    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").value = "";

    // ✅ Use backticks for template literal
    document.getElementById("question").textContent = `${num1} ${op} ${num2}`;

    if (op === "+") correctAnswer = num1 + num2;
    else if (op === "-") correctAnswer = num1 - num2;
    else correctAnswer = num1 * num2;
}


// Check answer
function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);
    let feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        score++;
    } else {
        // ✅ Use backticks here too
        feedback.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    document.getElementById("score").textContent = "Score: " + score;
}


// Load the first question

generateQuestion();
