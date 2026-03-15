/* ========================================
   All In Poker — Quiz Engine
   Perguntas, validação, scoring
   ======================================== */

const Quiz = (() => {
  let currentQuiz = null;
  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function start(levelNum, questions, container, onComplete) {
    currentQuiz = { levelNum, questions, container, onComplete };
    currentQuestion = 0;
    score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const { questions, container } = currentQuiz;
    const q = questions[currentQuestion];

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-question">
          <div class="quiz-question-count">Pergunta ${currentQuestion + 1} de ${questions.length}</div>
          <div class="quiz-question-text">${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" onclick="Quiz.answer(${i})">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div class="quiz-feedback" id="quizFeedback"></div>
        </div>
      </div>
    `;
    answered = false;
  }

  function answer(index) {
    if (answered) return;
    answered = true;

    const { questions } = currentQuiz;
    const q = questions[currentQuestion];
    const correct = index === q.correct;
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');

    options.forEach((opt, i) => {
      if (i === q.correct) {
        opt.classList.add('correct');
      } else if (i === index && !correct) {
        opt.classList.add('wrong');
      }
    });

    if (correct) {
      score++;
      feedback.className = 'quiz-feedback correct';
      feedback.textContent = '✅ Correto!';
      App.addXP(10);
    } else {
      feedback.className = 'quiz-feedback wrong';
      feedback.textContent = `❌ Errado! A resposta certa era: ${q.options[q.correct]}`;
    }

    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        renderQuestion();
      } else {
        showResults();
      }
    }, 1500);
  }

  function showResults() {
    const { levelNum, questions, container, onComplete } = currentQuiz;
    const total = questions.length;
    const percent = score / total;
    const passed = percent >= App.PASS_THRESHOLD;
    const percentDisplay = Math.round(percent * 100);

    App.saveQuizResult(levelNum, score, total);

    if (passed) {
      App.completeLevel(levelNum);
    }

    container.innerHTML = `
      <div class="quiz-results">
        <h2>${passed ? '🎉 Parabéns!' : '😔 Quase lá!'}</h2>
        <div class="quiz-score">${percentDisplay}%</div>
        <div class="quiz-score-label">${score} de ${total} corretas</div>
        <div class="quiz-xp-gained">+${score * 10} XP${passed ? ' +50 XP bônus' : ''}</div>
        <div class="${passed ? 'quiz-pass' : 'quiz-fail'}">
          ${passed
            ? `Nível ${levelNum} completo! Próximo nível desbloqueado.`
            : `Você precisa de ${Math.round(App.PASS_THRESHOLD * 100)}% para avançar. Tente novamente!`
          }
        </div>
        <div class="quiz-actions">
          ${!passed ? `<button class="btn btn-secondary" onclick="Quiz.retry()">🔄 Tentar Novamente</button>` : ''}
          <button class="btn btn-primary" onclick="window.location.href='index.html'">
            ${passed ? '🏠 Voltar ao Mapa' : '🏠 Mapa de Níveis'}
          </button>
          ${passed && levelNum < 6 ? `
            <button class="btn btn-primary" onclick="window.location.href='level.html?level=${levelNum + 1}'">
              Próximo Nível →
            </button>
          ` : ''}
        </div>
      </div>
    `;

    if (onComplete) onComplete(passed, score, total);
  }

  function retry() {
    currentQuestion = 0;
    score = 0;
    renderQuestion();
  }

  return { start, answer, retry };
})();
