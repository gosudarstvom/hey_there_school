<!-- настройка вопросника -->
function submitQuiz() {
const questions = document.querySelectorAll('.quiz-question');
let correctAnswers = 0;
let totalQuestions = questions.length;

questions.forEach(question => {
const correctAnswer = question.querySelector('.quiz-options').dataset.correct;
const selectedOption = question.querySelector('input[type="radio"]:checked');

if (selectedOption && selectedOption.value === correctAnswer) {
correctAnswers++;
}
});

const resultElement = document.getElementById('quiz-result');

if (correctAnswers === totalQuestions) {
resultElement.textContent = `Excellent! You got all ${totalQuestions} questions correct.`;
resultElement.className = 'quiz-result correct';
} else {
resultElement.textContent = `You got ${correctAnswers} out of ${totalQuestions} correct. Try again!`;
resultElement.className = 'quiz-result incorrect';
}

resultElement.style.display = 'block';
}

<!-- карусель картинок -->

let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel img');
  const totalSlides = images.length;
  const slideWidth = 360 + 10; // ширина картинки + отступ

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(() => {
  moveSlide(1);
}, 2500);