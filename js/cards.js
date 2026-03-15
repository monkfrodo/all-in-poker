/* ========================================
   All In Poker — Card Components
   Renderização de cartas, flip, drag
   ======================================== */

const Cards = (() => {
  const SUITS = {
    hearts: { symbol: '♥', name: 'Copas', color: 'red' },
    diamonds: { symbol: '♦', name: 'Ouros', color: 'red' },
    spades: { symbol: '♠', name: 'Espadas', color: 'black' },
    clubs: { symbol: '♣', name: 'Paus', color: 'black' }
  };

  const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function renderCard(value, suit, options = {}) {
    const s = SUITS[suit];
    if (!s) return '';

    const classes = ['playing-card', s.color];
    if (options.draggable) classes.push('draggable-card');
    if (options.className) classes.push(options.className);

    const draggableAttr = options.draggable
      ? `draggable="true" ondragstart="Cards.handleDragStart(event)" data-card="${value}-${suit}"`
      : '';

    return `
      <div class="${classes.join(' ')}" ${draggableAttr}>
        <span class="card-value">${value}</span>
        <span class="card-suit">${s.symbol}</span>
      </div>
    `;
  }

  function renderFlipCard(value, suit, id) {
    const s = SUITS[suit];
    if (!s) return '';

    return `
      <div class="card-flip-container" id="${id}" onclick="Cards.flipCard('${id}')">
        <div class="card-flip-inner">
          <div class="card-flip-front">♠</div>
          <div class="card-flip-back ${s.color}">
            <span class="card-value">${value}</span>
            <span class="card-suit">${s.symbol}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderCardBack() {
    return '<div class="playing-card card-back">♠</div>';
  }

  function renderHand(cards, name, rank) {
    const cardsHtml = cards.map(c => renderCard(c.value, c.suit)).join('');
    return `
      <div class="hand-display">
        <div>
          <div class="hand-name">${name}</div>
          ${rank ? `<div class="hand-rank">#${rank}</div>` : ''}
        </div>
        <div class="hand-cards">${cardsHtml}</div>
      </div>
    `;
  }

  function flipCard(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('flipped');
  }

  function handleDragStart(e) {
    const card = e.target.closest('.draggable-card');
    if (!card) return;
    e.dataTransfer.setData('text/plain', card.dataset.card);
    card.classList.add('dragging');
    setTimeout(() => card.classList.remove('dragging'), 0);
  }

  function setupDropZone(zoneEl, onDrop) {
    zoneEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      zoneEl.classList.add('drag-over');
    });

    zoneEl.addEventListener('dragleave', () => {
      zoneEl.classList.remove('drag-over');
    });

    zoneEl.addEventListener('drop', (e) => {
      e.preventDefault();
      zoneEl.classList.remove('drag-over');
      const cardData = e.dataTransfer.getData('text/plain');
      if (cardData && onDrop) onDrop(cardData, zoneEl);
    });
  }

  return {
    SUITS,
    VALUES,
    renderCard,
    renderFlipCard,
    renderCardBack,
    renderHand,
    flipCard,
    handleDragStart,
    setupDropZone
  };
})();
