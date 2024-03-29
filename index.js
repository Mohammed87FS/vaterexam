import questionsAndAnswers from "./questionsAndAnswers.js";

document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const feedbackElement = document.getElementById('feedback');
    const nextQuestionButton = document.getElementById('next-question');
    const prevQuestionButton = document.getElementById('prev-question');
    const searchNumberButton = document.getElementById('search-number-button');
    const searchNumberInput = document.getElementById('search-number-input');

    searchNumberButton.addEventListener('click', () => {
        const questionNumber = parseInt(searchNumberInput.value, 10);
        if (questionNumber >= 1 && questionNumber <= questionsAndAnswers.length) {
            currentQuestionIndex = questionNumber - 1;
            displayQuestion();
            feedbackElement.textContent = '';
        } else {
            alert(`No question found with number: ${questionNumber}. Please enter a valid question number.`);
        }
    });

    function displayQuestion() {
        const currentQuestion = questionsAndAnswers[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = ''; // You may need to adjust this part depending on how you want to display the answer

        // For example, you might just display the answer directly:
        const answerElement = document.createElement('div');
        answerElement.textContent = currentQuestion.answer; // Assuming 'answer' is the property name in your objects
        answersElement.appendChild(answerElement);


    }

    prevQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            feedbackElement.textContent = '';
        }
    });

    nextQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex < questionsAndAnswers.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            feedbackElement.textContent = '';
        }
    });

    displayQuestion();
});
