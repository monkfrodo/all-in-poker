/* ========================================
   All In Poker — App Core
   Estado, localStorage, navegação
   ======================================== */

const App = (() => {
  const STORAGE_KEY = 'allinpoker_state';
  const PASS_THRESHOLD = 0.7;

  const DEFAULT_STATE = {
    currentLevel: 1,
    completedLevels: [],
    xp: 0,
    achievements: [],
    quizResults: {}
  };

  const ACHIEVEMENTS = [
    { id: 'primeiro_passo', name: 'Primeiro Passo', icon: '🎯', desc: 'Completou o Nível 1', xp: 25 },
    { id: 'maos_de_ouro', name: 'Mãos de Ouro', icon: '🏅', desc: '100% no quiz do Nível 2', xp: 25 },
    { id: 'sem_erros', name: 'Sem Erros', icon: '💎', desc: 'Nota perfeita em qualquer quiz', xp: 25 },
    { id: 'all_in', name: 'All In', icon: '🃏', desc: 'Completou todos os 6 níveis', xp: 25 },
    { id: 'graduado', name: 'Graduado', icon: '🎓', desc: 'Desbloqueou o glossário', xp: 25 }
  ];

  let state = null;

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      state = saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
    } catch {
      state = { ...DEFAULT_STATE };
    }
    return state;
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getState() {
    if (!state) load();
    return state;
  }

  function isLevelUnlocked(levelNum) {
    const s = getState();
    if (levelNum === 1) return true;
    return s.completedLevels.includes(levelNum - 1);
  }

  function isLevelCompleted(levelNum) {
    return getState().completedLevels.includes(levelNum);
  }

  function completeLevel(levelNum) {
    const s = getState();
    if (!s.completedLevels.includes(levelNum)) {
      s.completedLevels.push(levelNum);
      addXP(50);
      checkAchievements(levelNum);
      save();
    }
  }

  function addXP(amount) {
    getState().xp += amount;
    save();
    updateHeaderXP();
  }

  function saveQuizResult(levelNum, score, total) {
    const s = getState();
    s.quizResults[levelNum] = { score, total, percent: score / total };
    save();
  }

  function unlockAchievement(id) {
    const s = getState();
    if (s.achievements.includes(id)) return false;
    s.achievements.push(id);
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      s.xp += ach.xp;
      showAchievementPopup(ach);
    }
    save();
    return true;
  }

  function checkAchievements(levelNum) {
    const s = getState();

    if (levelNum === 1) {
      unlockAchievement('primeiro_passo');
    }

    if (s.quizResults[levelNum]?.percent === 1) {
      unlockAchievement('sem_erros');
    }

    if (levelNum === 2 && s.quizResults[2]?.percent === 1) {
      unlockAchievement('maos_de_ouro');
    }

    if (levelNum === 5 && s.completedLevels.includes(5)) {
      unlockAchievement('graduado');
    }

    if (s.completedLevels.length === 6) {
      unlockAchievement('all_in');
    }
  }

  function showAchievementPopup(ach) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
      <div class="achievement-popup-icon">${ach.icon}</div>
      <div>
        <div class="achievement-popup-text">${ach.name}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">+${ach.xp} XP</div>
      </div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
  }

  function getProgressPercent() {
    return Math.round((getState().completedLevels.length / 6) * 100);
  }

  function updateHeaderXP() {
    const xpEl = document.querySelector('.xp-badge');
    const progressFill = document.querySelector('.progress-bar-fill');
    if (xpEl) xpEl.textContent = `⭐ ${getState().xp} XP`;
    if (progressFill) progressFill.style.width = `${getProgressPercent()}%`;
  }

  function resetProgress() {
    state = { ...DEFAULT_STATE };
    save();
  }

  return {
    load,
    save,
    getState,
    isLevelUnlocked,
    isLevelCompleted,
    completeLevel,
    addXP,
    saveQuizResult,
    unlockAchievement,
    checkAchievements,
    getProgressPercent,
    updateHeaderXP,
    resetProgress,
    ACHIEVEMENTS,
    PASS_THRESHOLD
  };
})();
