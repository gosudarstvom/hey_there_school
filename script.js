/* настройка вопросника */
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
  
  /* карусель картинок */
  
  /*let currentIndex = 0;
  
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
  */
  
  /*еще одна карусель*/
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;
  
  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateCarousel();
  }
  
  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });
  
  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  
  // Initial setup
  updateCarousel();