// ══════════════════════════════════════════════════════════
// COMMANDER CODEX — Live data from tracking spreadsheet
// Last synced: March 2026
// ══════════════════════════════════════════════════════════

// ── NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-page="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); showPage(link.dataset.page); });
});

// ── PLAYER DATA (source of truth: tracking spreadsheet) ──
const players = [
  { name: 'Mike',   games: 22, wins: 9, second: 4,  third: 4,  fourth: 5,  kills: 23, t1SolRing: 3, winRate: 40.91 },
  { name: 'Jarrad', games: 36, wins: 9, second: 10, third: 7,  fourth: 10, kills: 34, t1SolRing: 4, winRate: 25.00 },
  { name: 'Sean',   games: 36, wins: 9, second: 4,  third: 16, fourth: 7,  kills: 31, t1SolRing: 2, winRate: 25.00 },
  { name: 'Will',   games:  8, wins: 3, second: 1,  third: 2,  fourth: 2,  kills:  9, t1SolRing: 0, winRate: 37.50 },
  { name: 'Joe',    games: 37, wins: 7, second: 17, third: 5,  fourth: 8,  kills: 14, t1SolRing: 4, winRate: 18.92 },
];

// ── DECK DATA (source of truth: tracking spreadsheet) ──
const allDecks = [
  // ── Jarrad ──
  { owner:'Jarrad', name:'Nekusar, the Mindrazer',        games:8, wins:2, second:1, third:3, fourth:2, t1SolRing:1, winRate:25.00 },
  { owner:'Jarrad', name:'Jaws, Relentless Predator',     games:5, wins:1, second:4, third:0, fourth:0, t1SolRing:0, winRate:20.00 },
  { owner:'Jarrad', name:"Glarb, Calamity's Augur",       games:2, wins:1, second:1, third:0, fourth:0, t1SolRing:0, winRate:50.00 },
  { owner:'Jarrad', name:'Dr. Eggman',                    games:3, wins:0, second:0, third:2, fourth:1, t1SolRing:2, winRate:0.00  },
  { owner:'Jarrad', name:'Indoraptor, the Perfect Hybrid',games:2, wins:0, second:1, third:0, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Jarrad', name:'Coram, the Undertaker',         games:1, wins:0, second:0, third:0, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Jarrad', name:'Cloud, Ex-SOLDIER',             games:1, wins:1, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Jarrad', name:'Roon of the Hidden Realm',      games:4, wins:0, second:0, third:1, fourth:3, t1SolRing:0, winRate:0.00  },
  { owner:'Jarrad', name:"Ihsan's Shade",                 games:3, wins:0, second:2, third:1, fourth:0, t1SolRing:0, winRate:0.00  },
  { owner:'Jarrad', name:'Ashling, the Limitless',        games:4, wins:3, second:0, third:0, fourth:1, t1SolRing:0, winRate:75.00 },
  { owner:'Jarrad', name:'Velomachus Lorehold',           games:3, wins:1, second:1, third:0, fourth:1, t1SolRing:1, winRate:33.33 },
  // ── Joe ──
  { owner:'Joe', name:'Dihada, Binder of Wills',          games:3, wins:1, second:1, third:0, fourth:1, t1SolRing:1, winRate:33.33 },
  { owner:'Joe', name:"Eshki, Temur's Roar",              games:6, wins:3, second:1, third:1, fourth:1, t1SolRing:1, winRate:50.00 },
  { owner:'Joe', name:'Wilhelt, the Rotcleaver',          games:6, wins:0, second:2, third:2, fourth:2, t1SolRing:1, winRate:0.00  },
  { owner:'Joe', name:'Kaust, Eyes of the Glade',         games:4, wins:0, second:2, third:1, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Joe', name:'Ms. Bumbleflower',                 games:6, wins:1, second:3, third:0, fourth:2, t1SolRing:1, winRate:16.67 },
  { owner:'Joe', name:"Zinnia, Valley's Voice",           games:4, wins:0, second:4, third:0, fourth:0, t1SolRing:0, winRate:0.00  },
  { owner:'Joe', name:'Treebeard, Gracious Host',         games:6, wins:2, second:2, third:1, fourth:1, t1SolRing:0, winRate:33.33 },
  { owner:'Joe', name:'Gisa and Geralf',                  games:2, wins:0, second:2, third:0, fourth:0, t1SolRing:0, winRate:0.00  },
  // ── Mike ──
  { owner:'Mike', name:'Cloud, Ex-SOLDIER',               games:1, wins:1, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Mike', name:'Felothar the Steadfast',          games:3, wins:2, second:0, third:0, fourth:1, t1SolRing:0, winRate:66.67 },
  { owner:'Mike', name:'Frodo, Adventurous Hobbit',       games:1, wins:0, second:0, third:0, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Mike', name:'Giada, Font of Hope',             games:1, wins:1, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Mike', name:'Hakbal of the Surging Soul',      games:3, wins:2, second:1, third:0, fourth:0, t1SolRing:0, winRate:66.67 },
  { owner:'Mike', name:'Hazel of the Rootbloom',          games:1, wins:0, second:0, third:1, fourth:0, t1SolRing:1, winRate:0.00  },
  { owner:'Mike', name:'Krenko, Mob Boss',                games:1, wins:0, second:1, third:0, fourth:0, t1SolRing:1, winRate:0.00  },
  { owner:'Mike', name:'Minsc & Boo, Timeless Heroes',    games:1, wins:0, second:0, third:0, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Mike', name:'Shorikai, Genesis Engine',        games:2, wins:1, second:0, third:0, fourth:1, t1SolRing:0, winRate:50.00 },
  { owner:'Mike', name:'Sliver Overlord',                 games:2, wins:1, second:0, third:1, fourth:0, t1SolRing:0, winRate:50.00 },
  { owner:'Mike', name:'Hearthhull, the Worldseed',       games:2, wins:1, second:0, third:0, fourth:1, t1SolRing:1, winRate:50.00 },
  { owner:'Mike', name:'Thrun, Breaker of Silence',       games:4, wins:1, second:0, third:2, fourth:1, t1SolRing:0, winRate:25.00 },
  { owner:'Mike', name:'Lightning, Army of One',          games:3, wins:1, second:2, third:0, fourth:0, t1SolRing:0, winRate:33.33 },
  // ── Sean ──
  { owner:'Sean', name:'Radagast the Brown',              games:2, wins:0, second:0, third:0, fourth:2, t1SolRing:0, winRate:0.00  },
  { owner:'Sean', name:'Tom Bombadil',                    games:1, wins:0, second:0, third:0, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Sean', name:'Sephiroth, Fabled SOLDIER',       games:2, wins:2, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Sean', name:'Sauron, the Dark Lord',           games:3, wins:0, second:0, third:3, fourth:0, t1SolRing:0, winRate:0.00  },
  { owner:'Sean', name:'Hylda of the Icy Crown',          games:4, wins:1, second:0, third:2, fourth:1, t1SolRing:0, winRate:25.00 },
  { owner:'Sean', name:'Galadriel, Light of Valinor',     games:4, wins:0, second:0, third:3, fourth:1, t1SolRing:0, winRate:0.00  },
  { owner:'Sean', name:'Slimefoot, the Stowaway',         games:7, wins:1, second:2, third:3, fourth:1, t1SolRing:0, winRate:14.29 },
  { owner:'Sean', name:'Kiora, Sovereign of the Deep',    games:4, wins:1, second:1, third:2, fourth:0, t1SolRing:1, winRate:25.00 },
  { owner:'Sean', name:'Muldrotha, the Gravetide',        games:1, wins:1, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Sean', name:'Kenrith, the Returned King',      games:1, wins:0, second:0, third:1, fourth:0, t1SolRing:0, winRate:0.00  },
  { owner:'Sean', name:'Wick, the Whorled Mind',          games:1, wins:1, second:0, third:0, fourth:0, t1SolRing:0, winRate:100.00},
  { owner:'Sean', name:'Shilgengar, Sire of Famine',      games:7, wins:2, second:1, third:3, fourth:1, t1SolRing:1, winRate:28.57 },
];

// ── CHARITY DATA ──
const charityYears = [
  { year:2024, raised:'$1,842', goal:'$1,500', pct:100, games:12, desc:"Our biggest year yet — we hit our goal in the first weekend and kept going. The pod ran a marathon stream for Extra Life, playing through the night to raise funds for children's hospitals." },
  { year:2023, raised:'$1,210', goal:'$1,200', pct:100, games:9,  desc:"Crossed the finish line with hours to spare. We auctioned off deck-building sessions and raised over a thousand dollars for the first time as a pod." },
  { year:2022, raised:'$640',   goal:'$800',   pct:80,  games:7,  desc:"Our inaugural year participating in Extra Life. We fell short of the goal but established the tradition and learned how to rally our community." },
];

// ── GLOBAL STATS ──
const TOTAL_GAMES  = 37;
const TOTAL_KILLS  = players.reduce((s,p) => s+p.kills, 0);       // 111
const TOTAL_T1     = players.reduce((s,p) => s+p.t1SolRing, 0);   // 13
const TOTAL_DECKS  = allDecks.filter(d => d.games > 0).length;    // 44
const TOP_WINRATE  = Math.max(...players.map(p => p.winRate));     // 40.91

document.getElementById('stat-games').textContent   = TOTAL_GAMES;
document.getElementById('stat-players').textContent = players.length;
document.getElementById('stat-kills').textContent   = TOTAL_KILLS;
document.getElementById('stat-t1').textContent      = TOTAL_T1;
document.getElementById('stat-decks').textContent   = TOTAL_DECKS;
document.getElementById('stat-rate').textContent    = TOP_WINRATE.toFixed(0) + '%';

// ── LEADERBOARD ──
function renderLeaderboard() {
  const medals = ['♔','♕','♖','✦','✧'];
  document.getElementById('lb-body').innerHTML = players.map((p, i) => {
    const bestDeck = allDecks
      .filter(d => d.owner === p.name && d.games >= 2)
      .sort((a,b) => b.winRate - a.winRate || b.wins - a.wins)[0];
    const badge = bestDeck
      ? `${bestDeck.name} <span style="color:var(--gold-dim);font-size:0.8rem;">(${bestDeck.winRate.toFixed(0)}% WR)</span>`
      : allDecks.filter(d => d.owner === p.name && d.wins > 0).sort((a,b) => b.wins - a.wins)[0]?.name ?? '—';
    return `
      <div class="lb-row rank-${i+1}">
        <div class="lb-rank">${medals[i]||i+1}</div>
        <div>
          <div class="lb-player">${p.name}</div>
          <div class="lb-commander">${badge}</div>
        </div>
        <div class="lb-stat lb-wins">${p.wins}</div>
        <div class="lb-stat">${p.games}</div>
        <div class="lb-stat">${p.winRate.toFixed(2)}%</div>
        <div class="lb-stat">${p.kills}</div>
        <div class="lb-stat">${p.t1SolRing || '—'}</div>
      </div>`;
  }).join('');
}

// ── DECK TABLE ──
function renderDeckTable(filter = 'all') {
  let decks = allDecks.filter(d => d.games > 0);
  if (filter !== 'all') decks = decks.filter(d => d.owner === filter);
  decks = [...decks].sort((a,b) => b.winRate - a.winRate || b.wins - a.wins || b.games - a.games);
  document.getElementById('deck-body').innerHTML = decks.map(d => `
    <tr>
      <td style="color:var(--gold-dim);font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:0.1em;">${d.owner}</td>
      <td style="font-weight:600;cursor:pointer;" onclick="quickViewCard('${d.name.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">
        ${d.name} <span style="color:var(--arcane-bright);font-size:0.75rem;">⧉</span>
      </td>
      <td style="text-align:center;">${d.games}</td>
      <td style="text-align:center;color:var(--gold);font-weight:600;">${d.wins}</td>
      <td style="text-align:center;">${d.second}</td>
      <td style="text-align:center;">${d.third}</td>
      <td style="text-align:center;color:${d.winRate >= 50?'var(--gold)':d.winRate>0?'var(--text-dim)':'var(--text-faint)'};">${d.winRate.toFixed(0)}%</td>
      <td style="text-align:center;color:var(--text-dim);">${d.t1SolRing || '—'}</td>
    </tr>
  `).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDeckTable(btn.dataset.filter);
  });
});

// ── CARD VIEWER ──
const cardCache = {};

// ── CARD HOVER PREVIEW ──
const cardPreview = document.getElementById('card-preview');
const cardPreviewImg = cardPreview.querySelector('img');

function showCardPreview(imgSrc, name, anchorEl) {
  cardPreviewImg.src = imgSrc;
  cardPreviewImg.alt = name;

  const rect = anchorEl.getBoundingClientRect();
  const previewWidth = 260;
  const previewHeight = 362; // approx card height at 260px wide

  let left = rect.left + rect.width / 2 - previewWidth / 2;
  let top = rect.top - previewHeight - 16;

  // Not enough space above → show below
  if (top < 8) top = rect.bottom + 12;

  // Clamp horizontally within viewport
  left = Math.max(8, Math.min(left, window.innerWidth - previewWidth - 8));

  cardPreview.style.left = left + 'px';
  cardPreview.style.top  = top  + 'px';
  cardPreview.classList.add('visible');
}

function hideCardPreview() {
  cardPreview.classList.remove('visible');
}

async function fetchCard(name) {
  if (cardCache[name]) return cardCache[name];
  try {
    const res = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`);
    if (!res.ok) return null;
    const data = await res.json();
    cardCache[name] = data;
    return data;
  } catch { return null; }
}

function getCardImage(card) {
  if (card.image_uris) return card.image_uris.normal;
  if (card.card_faces?.[0]?.image_uris) return card.card_faces[0].image_uris.normal;
  return null;
}

function createCardEl(card, badge = null) {
  const img = getCardImage(card);
  if (!img) return null;
  const div = document.createElement('div');
  div.className = 'card-item';
  div.innerHTML = `
    <div class="card-glow"></div>
    ${badge ? `<div class="card-badge">${badge}</div>` : ''}
    <img src="${img}" alt="${card.name}" loading="lazy">
    <div class="card-label">${card.name}</div>
  `;
  div.addEventListener('mouseenter', () => showCardPreview(img, card.name, div));
  div.addEventListener('mouseleave', hideCardPreview);
  div.addEventListener('click', () => { hideCardPreview(); openCardModal(card); });
  return div;
}

function openCardModal(card) {
  const img = getCardImage(card);
  const modal = document.getElementById('card-modal');
  const oracleText = card.oracle_text || card.card_faces?.[0]?.oracle_text || '';
  // Find deck record — match by name (could be multiple owners)
  const deckMatches = allDecks.filter(d => d.name.toLowerCase() === card.name.toLowerCase() && d.games > 0);

  modal.querySelector('.modal-card-name').textContent = card.name;
  modal.querySelector('.modal-card-type').textContent = card.type_line || '';
  modal.querySelector('.modal-card-img img').src = img || '';
  modal.querySelector('.modal-card-text').innerHTML = oracleText.replace(/\n/g,'<br><br>');

  const statsEl = modal.querySelector('.modal-deck-stats');
  if (deckMatches.length > 0) {
    statsEl.innerHTML = `
      <div style="font-family:'Cinzel',serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-dim);margin-bottom:1rem;">Pod Record</div>
      ${deckMatches.map(d => `
        <div style="margin-bottom:${deckMatches.length>1?'1rem':'0'};">
          ${deckMatches.length>1 ? `<div style="font-family:'Cinzel',serif;font-size:0.65rem;color:var(--text-faint);margin-bottom:0.5rem;letter-spacing:0.1em;">${d.owner.toUpperCase()}</div>` : ''}
          <div class="modal-stat-row"><span>Games</span><strong>${d.games}</strong></div>
          <div class="modal-stat-row"><span>Wins</span><strong style="color:var(--gold)">${d.wins}</strong></div>
          <div class="modal-stat-row"><span>2nd / 3rd</span><strong>${d.second} / ${d.third}</strong></div>
          <div class="modal-stat-row"><span>Win Rate</span><strong style="color:${d.winRate>=50?'var(--gold)':'var(--text-dim)'}">${d.winRate.toFixed(0)}%</strong></div>
          ${d.t1SolRing ? `<div class="modal-stat-row"><span>T1 Sol Ring</span><strong style="color:var(--arcane-bright)">${d.t1SolRing}</strong></div>` : ''}
        </div>
      `).join('')}
    `;
    statsEl.style.display = 'block';
  } else {
    statsEl.style.display = 'none';
  }
  modal.classList.add('open');
}

async function quickViewCard(name) {
  const card = await fetchCard(name);
  if (card) openCardModal(card);
}

document.getElementById('card-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('card-modal')) closeModal();
});
document.querySelector('.modal-close').addEventListener('click', closeModal);
function closeModal() { document.getElementById('card-modal').classList.remove('open'); }

// Pod commanders to auto-load on the home vault — top performers + most played
const podHighlights = [
  'Ashling, the Limitless',
  "Eshki, Temur's Roar",
  'Nekusar, the Mindrazer',
  'Shilgengar, Sire of Famine',
  'Sephiroth, Fabled SOLDIER',
  'Slimefoot, the Stowaway',
  'Felothar the Steadfast',
  'Hakbal of the Surging Soul',
  'Treebeard, Gracious Host',
  'Ms. Bumbleflower',
  'Velomachus Lorehold',
  'Hylda of the Icy Crown',
];

async function loadPodCommanders() {
  const grid = document.getElementById('card-grid');
  grid.innerHTML = '<div class="card-loading">Summoning your commanders…</div>';
  const results = await Promise.all(podHighlights.map(fetchCard));
  grid.innerHTML = '';
  results.forEach(card => {
    if (!card) return;
    const deck = allDecks.find(d => d.name.toLowerCase() === card.name.toLowerCase() && d.games > 0);
    const badge = deck ? `${deck.winRate.toFixed(0)}% WR` : null;
    const el = createCardEl(card, badge);
    if (el) grid.appendChild(el);
  });
}

async function searchCard(gridId, inputId) {
  const query = document.getElementById(inputId).value.trim();
  if (!query) return;
  const grid = document.getElementById(gridId);
  grid.innerHTML = '<div class="card-loading">Consulting the archives…</div>';
  try {
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}&order=name`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    grid.innerHTML = '';
    data.data.slice(0,12).forEach(card => {
      const el = createCardEl(card);
      if (el) grid.appendChild(el);
    });
    if (!grid.children.length) grid.innerHTML = '<div class="card-loading">No cards found in the archives.</div>';
  } catch {
    grid.innerHTML = '<div class="card-loading">The arcane connection failed. Try again.</div>';
  }
}

document.getElementById('card-search-btn').addEventListener('click', () => searchCard('card-grid','card-search-input'));
document.getElementById('card-search-input').addEventListener('keydown', e => { if(e.key==='Enter') searchCard('card-grid','card-search-input'); });
document.getElementById('history-card-btn').addEventListener('click', () => searchCard('history-card-grid','history-card-input'));
document.getElementById('history-card-input').addEventListener('keydown', e => { if(e.key==='Enter') searchCard('history-card-grid','history-card-input'); });

// ── STREAM EMBED ──
function embedStream() {
  const url = document.getElementById('stream-url').value.trim();
  if (!url) return;
  let embedUrl = '';
  if (url.includes('twitch.tv/')) {
    const ch = url.split('twitch.tv/')[1].split('/')[0].split('?')[0];
    embedUrl = `https://player.twitch.tv/?channel=${ch}&parent=${location.hostname||'localhost'}`;
  } else if (url.includes('youtube.com/watch?v=')) {
    embedUrl = `https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}?autoplay=1`;
  } else if (url.includes('youtu.be/')) {
    embedUrl = `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}?autoplay=1`;
  } else { alert('Please enter a valid Twitch or YouTube URL.'); return; }
  document.getElementById('stream-frame').innerHTML =
    `<iframe src="${embedUrl}" width="100%" height="100%" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
  document.querySelector('.stream-status .status-dot').classList.add('live');
  document.getElementById('status-label').textContent = 'Live';
}
document.getElementById('embed-btn').addEventListener('click', embedStream);

// ── EXTRA LIFE ──
function renderCharity() {
  const total = charityYears.reduce((s,y) => s + parseFloat(y.raised.replace(/[^0-9.]/g,'')), 0);
  document.getElementById('el-total').textContent = '$' + total.toLocaleString('en-US',{minimumFractionDigits:0});
  document.getElementById('el-years').textContent = charityYears.length;
  document.getElementById('el-games').textContent = charityYears.reduce((s,y) => s+y.games, 0);
  document.getElementById('charity-grid').innerHTML = charityYears.slice().reverse().map(y => `
    <div class="charity-card">
      <div class="charity-year">${y.year}</div>
      <div class="charity-amount">${y.raised}</div>
      <p class="charity-desc">${y.desc}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1rem;">
        <span style="font-family:Cinzel,serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-faint);">Goal: ${y.goal}</span>
        <span style="font-family:Cinzel,serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:${y.pct>=100?'var(--extra-life)':'var(--text-faint)'};">${y.pct>=100?'✓ Goal Met':y.pct+'% Complete'}</span>
      </div>
      <div class="el-progress-bar"><div class="el-progress-fill" style="width:${Math.min(y.pct,100)}%"></div></div>
    </div>
  `).join('');
}

// ── INIT ──
renderLeaderboard();
renderDeckTable('all');
renderCharity();
loadPodCommanders();
