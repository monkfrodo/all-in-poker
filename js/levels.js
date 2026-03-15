/* ========================================
   All In Poker — Level Content Data
   Conteúdo dos 6 níveis + quizzes
   ======================================== */

const LevelData = {
  1: {
    name: 'O Baralho',
    icon: '🃏',
    steps: [
      {
        title: 'Os 4 Naipes',
        content: `
          <p>Um baralho padrão tem <strong>52 cartas</strong> divididas em <strong>4 naipes</strong>. Cada naipe tem 13 cartas.</p>
          <p>No poker, <strong>todos os naipes têm o mesmo valor</strong> — nenhum é "mais forte" que outro.</p>

          <div class="cards-row">
            ${Cards.renderCard('A', 'hearts')}
            ${Cards.renderCard('A', 'diamonds')}
            ${Cards.renderCard('A', 'spades')}
            ${Cards.renderCard('A', 'clubs')}
          </div>

          <table class="poker-table">
            <thead>
              <tr><th>Naipe</th><th>Símbolo</th><th>Cor</th></tr>
            </thead>
            <tbody>
              <tr><td>Copas</td><td style="color:var(--card-red);font-size:1.3rem">♥</td><td>Vermelho</td></tr>
              <tr><td>Ouros</td><td style="color:var(--card-red);font-size:1.3rem">♦</td><td>Vermelho</td></tr>
              <tr><td>Espadas</td><td style="font-size:1.3rem">♠</td><td>Preto</td></tr>
              <tr><td>Paus</td><td style="font-size:1.3rem">♣</td><td>Preto</td></tr>
            </tbody>
          </table>

          <p><strong>Dica:</strong> As cores ajudam a diferenciar rapidamente — vermelho (♥♦) e preto (♠♣).</p>
        `
      },
      {
        title: 'Valores das Cartas',
        content: `
          <p>Cada naipe contém 13 cartas, do <strong>Ás (A)</strong> ao <strong>Rei (K)</strong>:</p>

          <div class="cards-row">
            ${Cards.renderCard('A', 'spades')}
            ${Cards.renderCard('2', 'hearts')}
            ${Cards.renderCard('3', 'diamonds')}
            ${Cards.renderCard('4', 'clubs')}
            ${Cards.renderCard('5', 'spades')}
          </div>
          <div class="cards-row">
            ${Cards.renderCard('6', 'hearts')}
            ${Cards.renderCard('7', 'diamonds')}
            ${Cards.renderCard('8', 'clubs')}
            ${Cards.renderCard('9', 'spades')}
            ${Cards.renderCard('10', 'hearts')}
          </div>
          <div class="cards-row">
            ${Cards.renderCard('J', 'diamonds')}
            ${Cards.renderCard('Q', 'clubs')}
            ${Cards.renderCard('K', 'spades')}
          </div>

          <h3>Hierarquia de Valor</h3>
          <p>Do menor para o maior: <strong>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</strong></p>
          <ul>
            <li><strong>Ás (A)</strong> — A carta mais forte. Também pode valer como 1 em sequências baixas (A-2-3-4-5).</li>
            <li><strong>Figuras (J, Q, K)</strong> — Valete, Dama e Rei. Cartas de "cara".</li>
            <li><strong>Numéricas (2-10)</strong> — Valem seu número.</li>
          </ul>
        `
      },
      {
        title: 'Exercício — Identifique as Cartas',
        content: `
          <p>Clique nas cartas viradas para revelá-las. Tente identificar o naipe e o valor de cada uma!</p>

          <div class="cards-row">
            ${Cards.renderFlipCard('K', 'hearts', 'flip1')}
            ${Cards.renderFlipCard('7', 'spades', 'flip2')}
            ${Cards.renderFlipCard('A', 'diamonds', 'flip3')}
            ${Cards.renderFlipCard('J', 'clubs', 'flip4')}
            ${Cards.renderFlipCard('3', 'hearts', 'flip5')}
          </div>

          <p style="margin-top:1rem"><strong>Responda mentalmente antes de virar:</strong></p>
          <ul>
            <li>Qual é o naipe? (Copas, Ouros, Espadas ou Paus?)</li>
            <li>Qual é o valor? (A, 2-10, J, Q ou K?)</li>
            <li>Qual é a cor? (Vermelho ou Preto?)</li>
          </ul>
        `
      }
    ],
    quiz: [
      {
        question: 'Quantas cartas tem um baralho padrão?',
        options: ['32', '48', '52', '54'],
        correct: 2
      },
      {
        question: 'Quais naipes são vermelhos?',
        options: ['Espadas e Paus', 'Copas e Ouros', 'Copas e Espadas', 'Ouros e Paus'],
        correct: 1
      },
      {
        question: 'No poker, qual naipe é mais forte?',
        options: ['Espadas', 'Copas', 'Nenhum — todos são iguais', 'Ouros'],
        correct: 2
      },
      {
        question: 'Qual é a carta mais alta (excluindo o Ás)?',
        options: ['Dama (Q)', 'Valete (J)', 'Rei (K)', '10'],
        correct: 2
      }
    ]
  },

  2: {
    name: 'Ranking de Mãos',
    icon: '🏆',
    steps: [
      {
        title: 'As 10 Mãos do Poker',
        content: `
          <p>No Texas Hold'em, você forma a <strong>melhor mão de 5 cartas</strong> usando suas 2 cartas + as 5 da mesa. Aqui estão as 10 mãos possíveis, da mais fraca à mais forte:</p>

          ${Cards.renderHand([
            {value:'7',suit:'hearts'},{value:'3',suit:'spades'},{value:'J',suit:'diamonds'},{value:'9',suit:'clubs'},{value:'2',suit:'hearts'}
          ], 'High Card (Carta Alta)', 10)}

          ${Cards.renderHand([
            {value:'K',suit:'hearts'},{value:'K',suit:'spades'},{value:'7',suit:'diamonds'},{value:'4',suit:'clubs'},{value:'2',suit:'hearts'}
          ], 'One Pair (Um Par)', 9)}

          ${Cards.renderHand([
            {value:'J',suit:'hearts'},{value:'J',suit:'spades'},{value:'4',suit:'diamonds'},{value:'4',suit:'clubs'},{value:'9',suit:'hearts'}
          ], 'Two Pair (Dois Pares)', 8)}

          ${Cards.renderHand([
            {value:'8',suit:'hearts'},{value:'8',suit:'spades'},{value:'8',suit:'diamonds'},{value:'K',suit:'clubs'},{value:'3',suit:'hearts'}
          ], 'Three of a Kind (Trinca)', 7)}

          ${Cards.renderHand([
            {value:'5',suit:'hearts'},{value:'6',suit:'spades'},{value:'7',suit:'diamonds'},{value:'8',suit:'clubs'},{value:'9',suit:'hearts'}
          ], 'Straight (Sequência)', 6)}
        `
      },
      {
        title: 'Mãos Fortes',
        content: `
          <p>Estas são as mãos que todo jogador sonha em ter:</p>

          ${Cards.renderHand([
            {value:'3',suit:'hearts'},{value:'7',suit:'hearts'},{value:'10',suit:'hearts'},{value:'J',suit:'hearts'},{value:'A',suit:'hearts'}
          ], 'Flush (Cor)', 5)}

          ${Cards.renderHand([
            {value:'9',suit:'hearts'},{value:'9',suit:'spades'},{value:'9',suit:'diamonds'},{value:'5',suit:'clubs'},{value:'5',suit:'hearts'}
          ], 'Full House', 4)}

          ${Cards.renderHand([
            {value:'Q',suit:'hearts'},{value:'Q',suit:'spades'},{value:'Q',suit:'diamonds'},{value:'Q',suit:'clubs'},{value:'7',suit:'hearts'}
          ], 'Four of a Kind (Quadra)', 3)}

          ${Cards.renderHand([
            {value:'6',suit:'diamonds'},{value:'7',suit:'diamonds'},{value:'8',suit:'diamonds'},{value:'9',suit:'diamonds'},{value:'10',suit:'diamonds'}
          ], 'Straight Flush', 2)}

          ${Cards.renderHand([
            {value:'10',suit:'hearts'},{value:'J',suit:'hearts'},{value:'Q',suit:'hearts'},{value:'K',suit:'hearts'},{value:'A',suit:'hearts'}
          ], 'Royal Flush', 1)}

          <p style="margin-top:1rem"><strong>Royal Flush</strong> é a mão mais rara — a chance de receber uma é de apenas <strong>0,000154%</strong>!</p>
        `
      },
      {
        title: 'Qual Mão Ganha?',
        content: `
          <p>Teste seu conhecimento! Olhe os pares de mãos abaixo e pense: <strong>qual ganha?</strong></p>

          <h3>Duelo 1</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
            <div>
              <div style="color:var(--gold);font-weight:600;margin-bottom:0.5rem">Jogador A</div>
              <div class="cards-row" style="justify-content:flex-start">
                ${Cards.renderCard('K', 'hearts')}${Cards.renderCard('K', 'spades')}
              </div>
              <div style="font-size:0.85rem;margin-top:0.25rem">Par de Reis</div>
            </div>
            <div>
              <div style="color:var(--gold);font-weight:600;margin-bottom:0.5rem">Jogador B</div>
              <div class="cards-row" style="justify-content:flex-start">
                ${Cards.renderCard('5', 'diamonds')}${Cards.renderCard('6', 'diamonds')}${Cards.renderCard('7', 'diamonds')}${Cards.renderCard('8', 'diamonds')}${Cards.renderCard('9', 'diamonds')}
              </div>
              <div style="font-size:0.85rem;margin-top:0.25rem">Straight Flush</div>
            </div>
          </div>
          <p>✅ <strong>Jogador B ganha!</strong> Straight Flush (#2) bate Par (#9).</p>

          <h3>Duelo 2</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">
            <div>
              <div style="color:var(--gold);font-weight:600;margin-bottom:0.5rem">Jogador A</div>
              <div class="cards-row" style="justify-content:flex-start">
                ${Cards.renderCard('A', 'hearts')}${Cards.renderCard('A', 'spades')}${Cards.renderCard('A', 'diamonds')}${Cards.renderCard('8', 'clubs')}${Cards.renderCard('8', 'hearts')}
              </div>
              <div style="font-size:0.85rem;margin-top:0.25rem">Full House</div>
            </div>
            <div>
              <div style="color:var(--gold);font-weight:600;margin-bottom:0.5rem">Jogador B</div>
              <div class="cards-row" style="justify-content:flex-start">
                ${Cards.renderCard('2', 'hearts')}${Cards.renderCard('5', 'hearts')}${Cards.renderCard('9', 'hearts')}${Cards.renderCard('J', 'hearts')}${Cards.renderCard('K', 'hearts')}
              </div>
              <div style="font-size:0.85rem;margin-top:0.25rem">Flush</div>
            </div>
          </div>
          <p>✅ <strong>Jogador A ganha!</strong> Full House (#4) bate Flush (#5).</p>

          <p style="margin-top:1rem"><strong>Regra de ouro:</strong> Quanto mais rara a mão, mais forte ela é.</p>
        `
      }
    ],
    quiz: [
      {
        question: 'Qual é a mão mais forte do poker?',
        options: ['Four of a Kind', 'Full House', 'Straight Flush', 'Royal Flush'],
        correct: 3
      },
      {
        question: 'O que é um "Full House"?',
        options: ['5 cartas do mesmo naipe', 'Uma trinca + um par', 'Uma sequência de 5 cartas', '4 cartas iguais + 1'],
        correct: 1
      },
      {
        question: 'Qual mão é mais forte: Flush ou Straight?',
        options: ['Straight', 'Flush', 'São iguais', 'Depende das cartas'],
        correct: 1
      },
      {
        question: 'Um par de Ases ganha de um par de Reis?',
        options: ['Não, Reis são mais fortes', 'Sim, Ás é a carta mais alta', 'Depende dos naipes', 'Empata sempre'],
        correct: 1
      },
      {
        question: 'Quantas cartas formam uma mão de poker?',
        options: ['2', '3', '5', '7'],
        correct: 2
      }
    ]
  },

  3: {
    name: 'Regras do Texas Hold\'em',
    icon: '🎯',
    steps: [
      {
        title: 'Estrutura do Jogo',
        content: `
          <p>No Texas Hold'em, cada jogador recebe <strong>2 cartas fechadas</strong> (só você vê). Depois, <strong>5 cartas comunitárias</strong> são reveladas na mesa, compartilhadas por todos.</p>

          <h3>Sua mão</h3>
          <div class="cards-row">
            ${Cards.renderCard('A', 'hearts')}
            ${Cards.renderCard('K', 'hearts')}
          </div>
          <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Suas 2 cartas — só você vê</p>

          <h3>Mesa (Comunitárias)</h3>
          <div class="cards-row">
            ${Cards.renderCard('10', 'hearts')}
            ${Cards.renderCard('J', 'hearts')}
            ${Cards.renderCard('Q', 'hearts')}
            ${Cards.renderCard('5', 'spades')}
            ${Cards.renderCard('2', 'clubs')}
          </div>
          <p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">5 cartas da mesa — todos veem</p>

          <p>Seu objetivo: formar a <strong>melhor mão de 5 cartas</strong> combinando suas cartas com as da mesa. Você pode usar as duas, uma, ou nenhuma das suas cartas.</p>

          <p>Neste exemplo, a melhor mão é um <strong>Royal Flush</strong>! (10♥ J♥ Q♥ K♥ A♥)</p>
        `
      },
      {
        title: 'Posições e Blinds',
        content: `
          <p>Antes de distribuir cartas, dois jogadores são obrigados a apostar:</p>

          <table class="poker-table">
            <thead><tr><th>Posição</th><th>Função</th></tr></thead>
            <tbody>
              <tr><td><strong>Dealer (D)</strong></td><td>Distribui as cartas. Marcado por um botão.</td></tr>
              <tr><td><strong>Small Blind (SB)</strong></td><td>À esquerda do dealer. Posta metade da aposta mínima.</td></tr>
              <tr><td><strong>Big Blind (BB)</strong></td><td>À esquerda do SB. Posta a aposta mínima completa.</td></tr>
            </tbody>
          </table>

          <div style="background:rgba(0,0,0,0.2);border-radius:12px;padding:1.5rem;margin:1rem 0;text-align:center">
            <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.75rem">Ordem na mesa (sentido horário)</div>
            <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap">
              <span style="background:var(--gold);color:var(--green-dark);padding:6px 14px;border-radius:20px;font-weight:700">D</span>
              <span style="color:var(--text-muted)">→</span>
              <span style="background:rgba(255,255,255,0.15);padding:6px 14px;border-radius:20px">SB</span>
              <span style="color:var(--text-muted)">→</span>
              <span style="background:rgba(255,255,255,0.15);padding:6px 14px;border-radius:20px">BB</span>
              <span style="color:var(--text-muted)">→</span>
              <span style="background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:20px">UTG</span>
              <span style="color:var(--text-muted)">→</span>
              <span style="background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:20px">...</span>
            </div>
          </div>

          <p>Os blinds existem para garantir que sempre haja dinheiro no pote — sem eles ninguém teria motivo para jogar!</p>
          <p>A posição do dealer roda no sentido horário a cada mão.</p>
        `
      },
      {
        title: 'Ações do Jogador',
        content: `
          <p>Na sua vez, você tem as seguintes opções:</p>

          <table class="poker-table">
            <thead><tr><th>Ação</th><th>O que faz</th><th>Quando usar</th></tr></thead>
            <tbody>
              <tr>
                <td><strong style="color:var(--error)">Fold</strong></td>
                <td>Desiste da mão</td>
                <td>Cartas fracas ou aposta muito alta</td>
              </tr>
              <tr>
                <td><strong style="color:var(--text-muted)">Check</strong></td>
                <td>Passa a vez sem apostar</td>
                <td>Quando ninguém apostou antes de você</td>
              </tr>
              <tr>
                <td><strong style="color:var(--success)">Call</strong></td>
                <td>Iguala a aposta anterior</td>
                <td>Quer continuar, mas não aumentar</td>
              </tr>
              <tr>
                <td><strong style="color:var(--gold)">Raise</strong></td>
                <td>Aumenta a aposta</td>
                <td>Mão forte ou quer pressionar</td>
              </tr>
              <tr>
                <td><strong style="color:var(--card-red)">All-In</strong></td>
                <td>Aposta tudo que tem</td>
                <td>Mão muito forte ou desespero</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Importante:</strong> Você só pode dar <em>check</em> se ninguém apostou antes de você naquela rodada. Se alguém apostou, você precisa dar <em>call</em>, <em>raise</em> ou <em>fold</em>.</p>
        `
      },
      {
        title: 'As Rodadas de Aposta',
        content: `
          <p>Uma mão de Texas Hold'em tem <strong>4 rodadas de aposta</strong>:</p>

          <h3>1. Pré-Flop</h3>
          <p>Cada jogador recebe 2 cartas fechadas. Primeira rodada de apostas.</p>
          <div class="cards-row">
            ${Cards.renderCard('A', 'spades')}
            ${Cards.renderCard('K', 'diamonds')}
            <span style="color:var(--text-muted);align-self:center;margin:0 0.5rem">← suas cartas</span>
          </div>

          <h3>2. Flop</h3>
          <p>3 cartas comunitárias são reveladas na mesa.</p>
          <div class="cards-row">
            ${Cards.renderCard('10', 'hearts')}
            ${Cards.renderCard('J', 'clubs')}
            ${Cards.renderCard('2', 'spades')}
            <span style="opacity:0.3;align-self:center">| ?  ?</span>
          </div>

          <h3>3. Turn</h3>
          <p>A 4ª carta comunitária é revelada.</p>
          <div class="cards-row">
            ${Cards.renderCard('10', 'hearts')}
            ${Cards.renderCard('J', 'clubs')}
            ${Cards.renderCard('2', 'spades')}
            ${Cards.renderCard('Q', 'diamonds')}
            <span style="opacity:0.3;align-self:center">| ?</span>
          </div>

          <h3>4. River</h3>
          <p>A 5ª e última carta é revelada. Última rodada de apostas.</p>
          <div class="cards-row">
            ${Cards.renderCard('10', 'hearts')}
            ${Cards.renderCard('J', 'clubs')}
            ${Cards.renderCard('2', 'spades')}
            ${Cards.renderCard('Q', 'diamonds')}
            ${Cards.renderCard('8', 'hearts')}
          </div>

          <p style="margin-top:1rem">Depois do river, se mais de um jogador ainda estiver na mão, acontece o <strong>Showdown</strong> — todos mostram as cartas e a melhor mão ganha!</p>
        `
      }
    ],
    quiz: [
      {
        question: 'Quantas cartas fechadas cada jogador recebe no Texas Hold\'em?',
        options: ['1', '2', '3', '5'],
        correct: 1
      },
      {
        question: 'O que é o "Flop"?',
        options: ['Suas 2 cartas iniciais', 'As 3 primeiras cartas comunitárias', 'A última carta da mesa', 'Quando todos desistem'],
        correct: 1
      },
      {
        question: 'O que significa "Fold"?',
        options: ['Apostar tudo', 'Igualar a aposta', 'Desistir da mão', 'Aumentar a aposta'],
        correct: 2
      },
      {
        question: 'Quem é obrigado a apostar antes de ver as cartas?',
        options: ['O Dealer', 'Small Blind e Big Blind', 'Todos os jogadores', 'Ninguém'],
        correct: 1
      },
      {
        question: 'Quantas rodadas de aposta existem em uma mão?',
        options: ['2', '3', '4', '5'],
        correct: 2
      }
    ]
  },

  4: {
    name: 'Anatomia de uma Rodada',
    icon: '🔄',
    steps: [
      {
        title: 'Pré-Flop — O Início',
        content: `
          <p>Vamos simular uma mão completa de Texas Hold'em com 4 jogadores:</p>

          <div style="background:rgba(0,0,0,0.2);border-radius:12px;padding:1.5rem;margin:1rem 0">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
              <div>
                <div style="color:var(--gold);font-weight:600">🎯 Você (BB)</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCard('A', 'hearts')}${Cards.renderCard('J', 'hearts')}
                </div>
              </div>
              <div>
                <div style="color:var(--text-muted);font-weight:600">👤 Jogador 2 (UTG)</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCardBack()}${Cards.renderCardBack()}
                </div>
              </div>
              <div>
                <div style="color:var(--text-muted);font-weight:600">👤 Jogador 3 (D)</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCardBack()}${Cards.renderCardBack()}
                </div>
              </div>
              <div>
                <div style="color:var(--text-muted);font-weight:600">👤 Jogador 4 (SB)</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCardBack()}${Cards.renderCardBack()}
                </div>
              </div>
            </div>
          </div>

          <p><strong>Situação:</strong> Blinds são 10/20. SB postou 10, você (BB) postou 20.</p>
          <p><strong>Pote:</strong> 30 fichas</p>

          <h3>Ações do Pré-Flop</h3>
          <ul>
            <li>Jogador 2 (UTG): <strong style="color:var(--success)">Call 20</strong> — iguala o big blind</li>
            <li>Jogador 3 (D): <strong style="color:var(--error)">Fold</strong> — desiste</li>
            <li>Jogador 4 (SB): <strong style="color:var(--success)">Call 10</strong> — completa para 20</li>
            <li>Você (BB): <strong style="color:var(--text-muted)">Check</strong> — já postou o BB, decide não aumentar</li>
          </ul>
          <p><strong>Pote após pré-flop: 60 fichas</strong></p>
        `
      },
      {
        title: 'Flop — As 3 Primeiras Cartas',
        content: `
          <p>O dealer queima uma carta (descarta sem mostrar) e revela 3 cartas na mesa:</p>

          <h3>Mesa</h3>
          <div class="cards-row">
            ${Cards.renderCard('K', 'hearts')}
            ${Cards.renderCard('8', 'hearts')}
            ${Cards.renderCard('3', 'spades')}
          </div>

          <h3>Suas cartas</h3>
          <div class="cards-row">
            ${Cards.renderCard('A', 'hearts')}
            ${Cards.renderCard('J', 'hearts')}
          </div>

          <div style="background:rgba(255,215,0,0.1);border:1px solid var(--gold);border-radius:8px;padding:1rem;margin:1rem 0">
            <strong style="color:var(--gold)">Análise:</strong> Você tem A♥ J♥ e na mesa há K♥ 8♥. São <strong>4 cartas de Copas!</strong> Falta apenas 1 para um Flush. Isso se chama <strong>Flush Draw</strong> — uma mão em construção.
          </div>

          <h3>Ações do Flop</h3>
          <ul>
            <li>Jogador 4 (SB): <strong style="color:var(--text-muted)">Check</strong></li>
            <li>Você (BB): <strong style="color:var(--text-muted)">Check</strong> — quer ver mais cartas de graça</li>
            <li>Jogador 2 (UTG): <strong style="color:var(--gold)">Raise 30</strong></li>
            <li>Jogador 4 (SB): <strong style="color:var(--error)">Fold</strong></li>
            <li>Você (BB): <strong style="color:var(--success)">Call 30</strong> — vale pagar pelo flush draw</li>
          </ul>
          <p><strong>Pote: 120 fichas</strong></p>
        `
      },
      {
        title: 'Turn e River',
        content: `
          <h3>Turn — 4ª carta</h3>
          <div class="cards-row">
            ${Cards.renderCard('K', 'hearts')}
            ${Cards.renderCard('8', 'hearts')}
            ${Cards.renderCard('3', 'spades')}
            ${Cards.renderCard('5', 'hearts')}
          </div>

          <div style="background:rgba(76,175,80,0.15);border:1px solid var(--success);border-radius:8px;padding:1rem;margin:1rem 0">
            <strong style="color:var(--success)">FLUSH!</strong> 5♥ completou seu Flush! A♥ J♥ + K♥ 8♥ 5♥ = Flush de Copas com Ás alto. Uma mão muito forte!
          </div>

          <h3>Ações do Turn</h3>
          <ul>
            <li>Você (BB): <strong style="color:var(--text-muted)">Check</strong> — "armadilha" para o oponente apostar</li>
            <li>Jogador 2: <strong style="color:var(--gold)">Raise 50</strong></li>
            <li>Você: <strong style="color:var(--gold)">Raise 120</strong> — re-raise! Hora de extrair valor</li>
            <li>Jogador 2: <strong style="color:var(--success)">Call 120</strong></li>
          </ul>
          <p><strong>Pote: 360 fichas</strong></p>

          <h3>River — 5ª e última carta</h3>
          <div class="cards-row">
            ${Cards.renderCard('K', 'hearts')}
            ${Cards.renderCard('8', 'hearts')}
            ${Cards.renderCard('3', 'spades')}
            ${Cards.renderCard('5', 'hearts')}
            ${Cards.renderCard('Q', 'clubs')}
          </div>

          <p>Q♣ na mesa. Não muda nada para o seu flush — a carta não é de Copas.</p>
        `
      },
      {
        title: 'Showdown — Quem Ganha?',
        content: `
          <h3>Hora da verdade!</h3>

          <div style="background:rgba(0,0,0,0.2);border-radius:12px;padding:1.5rem;margin:1rem 0">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
              <div>
                <div style="color:var(--gold);font-weight:700;margin-bottom:0.5rem">🎯 Você</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCard('A', 'hearts')}${Cards.renderCard('J', 'hearts')}
                </div>
                <div style="color:var(--success);font-weight:600;margin-top:0.5rem">Flush de Copas (A alto)</div>
                <div style="font-size:0.85rem;color:var(--text-muted)">A♥ K♥ J♥ 8♥ 5♥</div>
              </div>
              <div>
                <div style="color:var(--text-muted);font-weight:700;margin-bottom:0.5rem">👤 Jogador 2</div>
                <div class="cards-row" style="justify-content:flex-start;margin:0.5rem 0">
                  ${Cards.renderCard('K', 'spades')}${Cards.renderCard('Q', 'spades')}
                </div>
                <div style="color:var(--error);font-weight:600;margin-top:0.5rem">Two Pair (Reis e Damas)</div>
                <div style="font-size:0.85rem;color:var(--text-muted)">K K Q Q 8</div>
              </div>
            </div>
          </div>

          <div style="text-align:center;font-size:1.5rem;color:var(--gold);font-weight:700;margin:1rem 0">
            🏆 Você ganha 360 fichas!
          </div>

          <p><strong>Flush (#5) bate Two Pair (#8).</strong></p>

          <p>Observe como a paciência valeu a pena: você começou com um flush draw no flop, completou no turn, e extraiu o máximo de valor do oponente com o check-raise!</p>
        `
      }
    ],
    quiz: [
      {
        question: 'Antes do flop, o que o dealer faz com a primeira carta?',
        options: ['Dá para o jogador mais velho', 'Queima (descarta sem mostrar)', 'Coloca na mesa aberta', 'Guarda para o river'],
        correct: 1
      },
      {
        question: 'O que é um "Flush Draw"?',
        options: ['Um flush completo', 'Falta 1 carta para completar um flush', 'Duas cartas do mesmo valor', 'Desistir de uma mão'],
        correct: 1
      },
      {
        question: 'Quantas cartas são reveladas no Flop?',
        options: ['1', '2', '3', '4'],
        correct: 2
      },
      {
        question: 'O que é "check-raise"?',
        options: ['Desistir e aumentar', 'Dar check e depois aumentar quando alguém apostar', 'Igualar e depois foldar', 'Apostar duas vezes seguidas'],
        correct: 1
      }
    ]
  },

  5: {
    name: 'Posição e Estratégia',
    icon: '🧠',
    steps: [
      {
        title: 'Posições na Mesa',
        content: `
          <p>A posição em que você senta <strong>é uma das maiores vantagens no poker</strong>. Quem age por último tem mais informação.</p>

          <div style="background:rgba(0,0,0,0.2);border-radius:16px;padding:2rem;margin:1rem 0;text-align:center">
            <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">Mesa de 6 jogadores</div>
            <div style="display:flex;flex-direction:column;gap:0.5rem;align-items:center">
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap;justify-content:center">
                <span style="background:rgba(239,83,80,0.3);border:1px solid var(--error);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>UTG</strong><br><span style="font-size:0.7rem">Early</span></span>
                <span style="background:rgba(239,83,80,0.2);border:1px solid var(--error);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>MP</strong><br><span style="font-size:0.7rem">Middle</span></span>
              </div>
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap;justify-content:center">
                <span style="background:rgba(76,175,80,0.2);border:1px solid var(--success);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>CO</strong><br><span style="font-size:0.7rem">Cutoff</span></span>
                <span style="background:rgba(76,175,80,0.3);border:1px solid var(--success);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>BTN</strong><br><span style="font-size:0.7rem">Dealer ⭐</span></span>
              </div>
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap;justify-content:center">
                <span style="background:rgba(255,255,255,0.08);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>SB</strong><br><span style="font-size:0.7rem">Small Blind</span></span>
                <span style="background:rgba(255,255,255,0.08);padding:8px 16px;border-radius:8px;font-size:0.85rem"><strong>BB</strong><br><span style="font-size:0.7rem">Big Blind</span></span>
              </div>
            </div>
          </div>

          <table class="poker-table">
            <thead><tr><th>Posição</th><th>Vantagem</th><th>Estratégia</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--error)"><strong>Early (UTG, MP)</strong></td><td>Baixa — age primeiro</td><td>Jogar poucas mãos, só as fortes</td></tr>
              <tr><td style="color:var(--success)"><strong>Late (CO, BTN)</strong></td><td>Alta — age por último</td><td>Pode jogar mais mãos, tem informação</td></tr>
              <tr><td><strong>Blinds (SB, BB)</strong></td><td>Obrigado a apostar</td><td>Defender com mãos razoáveis</td></tr>
            </tbody>
          </table>

          <p><strong>A melhor posição é o Dealer (BTN)</strong> — você é o último a agir em todas as rodadas após o pré-flop!</p>
        `
      },
      {
        title: 'Mãos Iniciais — O que Jogar?',
        content: `
          <p>Nem todas as mãos valem a pena jogar. Aqui está um guia simplificado:</p>

          <h3 style="color:var(--success)">🟢 Sempre Jogue (qualquer posição)</h3>
          <div class="cards-row" style="margin:0.5rem 0">
            ${Cards.renderCard('A', 'spades')}${Cards.renderCard('A', 'hearts')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('K', 'hearts')}${Cards.renderCard('K', 'spades')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('Q', 'diamonds')}${Cards.renderCard('Q', 'clubs')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('A', 'hearts')}${Cards.renderCard('K', 'hearts')}
          </div>
          <p style="font-size:0.85rem;color:var(--text-muted)">AA, KK, QQ, AKs (s = mesmo naipe)</p>

          <h3 style="color:var(--gold)">🟡 Jogue em posição média/tardia</h3>
          <div class="cards-row" style="margin:0.5rem 0">
            ${Cards.renderCard('J', 'spades')}${Cards.renderCard('J', 'hearts')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('A', 'diamonds')}${Cards.renderCard('Q', 'diamonds')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('K', 'clubs')}${Cards.renderCard('Q', 'clubs')}
          </div>
          <p style="font-size:0.85rem;color:var(--text-muted)">JJ, 10-10, AQs, KQs, AJs</p>

          <h3 style="color:var(--error)">🔴 Geralmente Fold</h3>
          <div class="cards-row" style="margin:0.5rem 0">
            ${Cards.renderCard('7', 'hearts')}${Cards.renderCard('2', 'spades')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('9', 'diamonds')}${Cards.renderCard('3', 'clubs')}
            <span style="margin:0 0.5rem;opacity:0.3">|</span>
            ${Cards.renderCard('J', 'hearts')}${Cards.renderCard('4', 'spades')}
          </div>
          <p style="font-size:0.85rem;color:var(--text-muted)">Cartas desconectadas e de naipes diferentes com valores baixos</p>

          <p style="margin-top:1rem"><strong>Dica de ouro:</strong> Na dúvida, <em>fold</em>. Paciência é a habilidade #1 do iniciante.</p>
        `
      },
      {
        title: 'Pot Odds — Vale a Pena Pagar?',
        content: `
          <p><strong>Pot Odds</strong> te ajudam a decidir se vale pagar uma aposta. A ideia é simples:</p>

          <div style="background:rgba(0,0,0,0.2);border-radius:12px;padding:1.5rem;margin:1rem 0;text-align:center">
            <div style="font-size:1.3rem;color:var(--gold);font-weight:700;margin-bottom:0.5rem">Pot Odds = Custo ÷ (Pote + Custo)</div>
            <div style="font-size:0.85rem;color:var(--text-muted)">Se as suas chances de ganhar são maiores que o pot odds, vale pagar!</div>
          </div>

          <h3>Exemplo prático</h3>
          <ul>
            <li>Pote: <strong>100 fichas</strong></li>
            <li>Oponente aposta: <strong>50 fichas</strong></li>
            <li>Pot Odds: 50 ÷ (100 + 50 + 50) = <strong>25%</strong></li>
            <li>Você precisa de pelo menos <strong>25% de chance de ganhar</strong> para pagar</li>
          </ul>

          <h3>Outs — Suas cartas salvadoras</h3>
          <p><strong>Outs</strong> são as cartas restantes que completam sua mão.</p>

          <table class="poker-table">
            <thead><tr><th>Draw</th><th>Outs</th><th>Chance (Turn)</th><th>Chance (Turn+River)</th></tr></thead>
            <tbody>
              <tr><td>Flush Draw</td><td>9</td><td>~19%</td><td>~35%</td></tr>
              <tr><td>Straight Draw (aberta)</td><td>8</td><td>~17%</td><td>~32%</td></tr>
              <tr><td>Straight Draw (gutshot)</td><td>4</td><td>~9%</td><td>~17%</td></tr>
              <tr><td>Par → Trinca</td><td>2</td><td>~4%</td><td>~8%</td></tr>
            </tbody>
          </table>

          <p><strong>Regra rápida:</strong> Multiplique seus outs por 2 (para o turn) ou por 4 (para turn + river) para ter uma estimativa da porcentagem.</p>
        `
      },
      {
        title: 'Dicas de Leitura do Jogo',
        content: `
          <p>Estratégia básica que vai te ajudar nas primeiras mesas:</p>

          <h3>1. Observe os padrões</h3>
          <ul>
            <li>Jogador que sempre dá raise pré-flop? Provavelmente blefa bastante.</li>
            <li>Jogador que só joga poucas mãos? Quando ele apostar, respeite — ele tem algo forte.</li>
          </ul>

          <h3>2. Tamanho da aposta conta</h3>
          <ul>
            <li><strong>Aposta grande</strong> (pote inteiro ou mais) = geralmente mão forte ou blefe grande</li>
            <li><strong>Aposta pequena</strong> (1/3 do pote) = quer que você pague, ou está testando</li>
          </ul>

          <h3>3. Posição é tudo</h3>
          <ul>
            <li>Jogue mais mãos em posição tardia (CO, BTN)</li>
            <li>Jogue menos mãos em posição inicial (UTG, MP)</li>
            <li>Nos blinds, defenda com mãos razoáveis mas não force</li>
          </ul>

          <h3>4. Dicas para iniciantes</h3>
          <div style="background:rgba(255,215,0,0.1);border:1px solid var(--gold);border-radius:8px;padding:1rem;margin:1rem 0">
            <ul style="margin:0">
              <li>Jogue poucas mãos, mas jogue-as com agressividade</li>
              <li>Não tenha medo de dar fold — é a ação mais comum</li>
              <li>Nunca aposte por desespero — aposte por estratégia</li>
              <li>Gerencie seu bankroll — nunca jogue com dinheiro que não pode perder</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: 'Qual é a melhor posição na mesa?',
        options: ['UTG (Under the Gun)', 'Small Blind', 'Dealer (Button)', 'Big Blind'],
        correct: 2
      },
      {
        question: 'Você tem um Flush Draw (faltam 1 carta). Quantos outs você tem?',
        options: ['4', '8', '9', '13'],
        correct: 2
      },
      {
        question: 'Qual mão inicial você SEMPRE deve jogar?',
        options: ['7-2 offsuit', 'Par de Ases (AA)', 'J-4 suited', 'Q-3 offsuit'],
        correct: 1
      },
      {
        question: 'O pote tem 200 fichas e o oponente aposta 100. Qual é o pot odds?',
        options: ['50%', '33%', '25%', '20%'],
        correct: 1
      },
      {
        question: 'Qual é a dica #1 para iniciantes?',
        options: ['Jogar todas as mãos', 'Blefar sempre', 'Jogar poucas mãos com agressividade', 'Sempre dar all-in'],
        correct: 2
      }
    ]
  },

  6: {
    name: 'Glossário & Cheat Sheet',
    icon: '👑',
    steps: [
      {
        title: 'Glossário de Poker A-M',
        content: `
          <table class="poker-table">
            <thead><tr><th>Termo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>All-In</strong></td><td>Apostar todas as suas fichas</td></tr>
              <tr><td><strong>Bankroll</strong></td><td>Dinheiro total reservado para jogar poker</td></tr>
              <tr><td><strong>Big Blind (BB)</strong></td><td>Aposta obrigatória do jogador 2 posições à esquerda do dealer</td></tr>
              <tr><td><strong>Blefe</strong></td><td>Apostar com uma mão fraca para fazer o oponente desistir</td></tr>
              <tr><td><strong>Board</strong></td><td>As cartas comunitárias na mesa</td></tr>
              <tr><td><strong>Button (BTN)</strong></td><td>Posição do dealer — a melhor posição</td></tr>
              <tr><td><strong>Call</strong></td><td>Igualar a aposta de outro jogador</td></tr>
              <tr><td><strong>Check</strong></td><td>Passar a vez sem apostar (só quando ninguém apostou)</td></tr>
              <tr><td><strong>Community Cards</strong></td><td>As 5 cartas da mesa compartilhadas por todos</td></tr>
              <tr><td><strong>Cutoff (CO)</strong></td><td>Posição à direita do dealer — segunda melhor posição</td></tr>
              <tr><td><strong>Draw</strong></td><td>Mão incompleta que precisa de mais cartas (ex: flush draw)</td></tr>
              <tr><td><strong>Flop</strong></td><td>As 3 primeiras cartas comunitárias</td></tr>
              <tr><td><strong>Fold</strong></td><td>Desistir da mão</td></tr>
              <tr><td><strong>Heads-Up</strong></td><td>Jogo entre apenas 2 jogadores</td></tr>
              <tr><td><strong>Hole Cards</strong></td><td>Suas 2 cartas fechadas</td></tr>
              <tr><td><strong>Kicker</strong></td><td>Carta desempate quando dois jogadores têm a mesma mão</td></tr>
              <tr><td><strong>Limp</strong></td><td>Apenas igualar o big blind pré-flop (geralmente ruim)</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Glossário de Poker N-Z',
        content: `
          <table class="poker-table">
            <thead><tr><th>Termo</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td><strong>Nuts</strong></td><td>A melhor mão possível naquele board</td></tr>
              <tr><td><strong>Offsuit</strong></td><td>Cartas de naipes diferentes (ex: A♠ K♥)</td></tr>
              <tr><td><strong>Outs</strong></td><td>Cartas restantes que podem melhorar sua mão</td></tr>
              <tr><td><strong>Pocket Pair</strong></td><td>Par nas suas cartas fechadas (ex: 8♠ 8♥)</td></tr>
              <tr><td><strong>Position</strong></td><td>Seu lugar na mesa em relação ao dealer</td></tr>
              <tr><td><strong>Pot</strong></td><td>O total de fichas apostadas na mão</td></tr>
              <tr><td><strong>Pot Odds</strong></td><td>Razão entre o custo para pagar e o tamanho do pote</td></tr>
              <tr><td><strong>Pre-Flop</strong></td><td>Rodada antes do flop — quando você só tem suas 2 cartas</td></tr>
              <tr><td><strong>Raise</strong></td><td>Aumentar a aposta</td></tr>
              <tr><td><strong>Re-Raise (3-Bet)</strong></td><td>Aumentar por cima de um raise</td></tr>
              <tr><td><strong>River</strong></td><td>A 5ª e última carta comunitária</td></tr>
              <tr><td><strong>Showdown</strong></td><td>Momento em que os jogadores mostram suas cartas</td></tr>
              <tr><td><strong>Small Blind (SB)</strong></td><td>Aposta obrigatória menor, à esquerda do dealer</td></tr>
              <tr><td><strong>Suited</strong></td><td>Cartas do mesmo naipe (ex: A♥ K♥)</td></tr>
              <tr><td><strong>Tilt</strong></td><td>Jogar mal por estar emocionalmente abalado</td></tr>
              <tr><td><strong>Turn</strong></td><td>A 4ª carta comunitária</td></tr>
              <tr><td><strong>Under the Gun (UTG)</strong></td><td>Primeiro a agir — pior posição</td></tr>
              <tr><td><strong>Value Bet</strong></td><td>Apostar com uma mão forte para extrair valor</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Cheat Sheet — Ranking de Mãos',
        content: `
          <p>Referência rápida — do mais forte ao mais fraco:</p>

          <table class="poker-table">
            <thead><tr><th>#</th><th>Mão</th><th>Exemplo</th><th>Descrição</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--gold);font-weight:700">1</td><td><strong>Royal Flush</strong></td><td>10♥ J♥ Q♥ K♥ A♥</td><td>Sequência do 10 ao Ás, mesmo naipe</td></tr>
              <tr><td style="color:var(--gold);font-weight:700">2</td><td><strong>Straight Flush</strong></td><td>5♦ 6♦ 7♦ 8♦ 9♦</td><td>Sequência de 5 cartas, mesmo naipe</td></tr>
              <tr><td>3</td><td><strong>Four of a Kind</strong></td><td>Q♠ Q♥ Q♦ Q♣ 7</td><td>4 cartas do mesmo valor</td></tr>
              <tr><td>4</td><td><strong>Full House</strong></td><td>A♠ A♥ A♦ K♠ K♥</td><td>Trinca + Par</td></tr>
              <tr><td>5</td><td><strong>Flush</strong></td><td>2♠ 5♠ 8♠ J♠ A♠</td><td>5 cartas do mesmo naipe</td></tr>
              <tr><td>6</td><td><strong>Straight</strong></td><td>4♥ 5♠ 6♦ 7♣ 8♥</td><td>Sequência de 5 cartas</td></tr>
              <tr><td>7</td><td><strong>Three of a Kind</strong></td><td>9♠ 9♥ 9♦ K♣ 3♥</td><td>3 cartas do mesmo valor</td></tr>
              <tr><td>8</td><td><strong>Two Pair</strong></td><td>J♠ J♥ 5♦ 5♣ A♥</td><td>2 pares diferentes</td></tr>
              <tr><td>9</td><td><strong>One Pair</strong></td><td>10♠ 10♥ K♦ 7♣ 2♥</td><td>2 cartas do mesmo valor</td></tr>
              <tr><td>10</td><td><strong>High Card</strong></td><td>A♠ J♥ 8♦ 5♣ 2♥</td><td>Nenhuma combinação</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Cheat Sheet — Mãos Iniciais & Pot Odds',
        content: `
          <h3>Mãos Iniciais Recomendadas</h3>
          <table class="poker-table">
            <thead><tr><th>Tier</th><th>Mãos</th><th>Ação</th></tr></thead>
            <tbody>
              <tr><td style="color:var(--success)"><strong>Premium</strong></td><td>AA, KK, QQ, AKs</td><td>Raise/Re-raise sempre</td></tr>
              <tr><td style="color:var(--success)"><strong>Forte</strong></td><td>JJ, 10-10, AQs, AKo, KQs</td><td>Raise na maioria das posições</td></tr>
              <tr><td style="color:var(--gold)"><strong>Bom</strong></td><td>99-77, AJs, ATs, KJs, QJs</td><td>Jogar em posição média/tardia</td></tr>
              <tr><td style="color:var(--gold)"><strong>Especulativo</strong></td><td>66-22, suited connectors (87s, 76s)</td><td>Jogar barato em posição tardia</td></tr>
              <tr><td style="color:var(--error)"><strong>Fold</strong></td><td>Todo o resto</td><td>Desistir sem dó</td></tr>
            </tbody>
          </table>
          <p style="font-size:0.85rem;color:var(--text-muted)">s = suited (mesmo naipe) | o = offsuit (naipes diferentes)</p>

          <h3 style="margin-top:1.5rem">Tabela Rápida de Pot Odds</h3>
          <table class="poker-table">
            <thead><tr><th>Outs</th><th>% no Turn</th><th>% Turn+River</th><th>Exemplo</th></tr></thead>
            <tbody>
              <tr><td>2</td><td>4%</td><td>8%</td><td>Par → Trinca</td></tr>
              <tr><td>4</td><td>9%</td><td>17%</td><td>Gutshot Straight</td></tr>
              <tr><td>8</td><td>17%</td><td>32%</td><td>Open-ended Straight</td></tr>
              <tr><td>9</td><td>19%</td><td>35%</td><td>Flush Draw</td></tr>
              <tr><td>12</td><td>26%</td><td>45%</td><td>Flush + Straight Draw</td></tr>
              <tr><td>15</td><td>33%</td><td>54%</td><td>Flush + Straight + Overcards</td></tr>
            </tbody>
          </table>

          <div style="background:rgba(255,215,0,0.1);border:1px solid var(--gold);border-radius:8px;padding:1rem;margin:1.5rem 0;text-align:center">
            <div style="font-size:1.1rem;color:var(--gold);font-weight:700;margin-bottom:0.5rem">🎓 Parabéns!</div>
            <p>Você completou todo o tutorial. Agora é hora de praticar! Boa sorte nas mesas.</p>
          </div>
        `
      }
    ],
    quiz: null
  }
};
