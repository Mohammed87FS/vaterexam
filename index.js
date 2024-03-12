import { questions } from "./questions.js";

document.addEventListener('DOMContentLoaded', () => {
   
   

    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    
    const feedbackElement = document.getElementById('feedback');
    const nextQuestionButton = document.getElementById('next-question');

    const prevQuestionButton = document.getElementById('prev-question');

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
        const foundIndex = questions.findIndex(question => question.question.toLowerCase().includes(searchTerm));
    
        if (foundIndex !== -1) {
            currentQuestionIndex = foundIndex;
            displayQuestion();
            feedbackElement.textContent = '';
        } else {
            alert(`No question found containing the word: ${searchTerm}. Please try a different search.`);
        }
    });
    

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent =  (currentQuestionIndex+1)+" "+"-- "+currentQuestion.question;
        answersElement.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const li = document.createElement('div');
            li.textContent = answer;
            li.addEventListener('click', () => checkAnswer(index));
            answersElement.appendChild(li);
        });

        // Manage button visibility
        nextQuestionButton.style.display = 'block';
        prevQuestionButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none'; // Show "Previous" if not on the first question
    }

    prevQuestionButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            feedbackElement.textContent = '';
        }
    });

    function checkAnswer(selectedIndex) {
        const correctIndex = questions[currentQuestionIndex].correct;
        const isCorrect = selectedIndex === correctIndex;
        feedbackElement.innerHTML = ''; // Clear previous feedback
    
        const feedbackMessage = document.createElement('div');
        feedbackMessage.textContent = isCorrect ? "Correct!" : `Incorrect. The correct answer is ${questions[currentQuestionIndex].answers[correctIndex]}.`;
        feedbackMessage.classList.add('feedback-message', isCorrect ? 'correct' : 'incorrect');
    
        feedbackElement.appendChild(feedbackMessage);
        nextQuestionButton.style.display = 'block';
    }
    

    nextQuestionButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            feedbackElement.textContent = '';
            nextQuestionButton.style.display = 'none';
        } else {
            questionElement.textContent = 'Quiz completed!';
            answersElement.innerHTML = '';
            feedbackElement.textContent = '';
            nextQuestionButton.style.display = 'none';
        }
    });

    displayQuestion();
});
