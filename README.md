# ⚜ Commander Codex

> *Every win remembered. Every play enshrined. The pod's history, written in mana.*

A living stats site for our Commander pod — tracking match history, player standings, card archives, live streams, and charity work.

---

## Pages

| Page | Description |
|------|-------------|
| **Standings** | Season leaderboard, win rates, eliminations, and card archive powered by Scryfall |
| **Match History** | Full match log with win conditions, turn counts, and color identity stats |
| **Live Stream** | Embed any Twitch or YouTube stream live — past VODs listed below |
| **Extra Life** | Our charity history, year-by-year fundraising stats, and donation links |

---

## Features

- 📊 **Live leaderboard** with wins, win rate, and eliminations
- 🃏 **Card viewer** — search any card via the [Scryfall API](https://scryfall.com/docs/api), click to inspect full details
- 📡 **Stream embed** — paste a Twitch or YouTube URL to display live
- ❤️ **Extra Life page** — tracks years of charity fundraising for children's hospitals
- 🌑 Dark arcane aesthetic — built with vanilla HTML/CSS/JS, no frameworks needed

---

## Setup

This is a static site — no build step required.

```bash
git clone https://github.com/YOUR_USERNAME/commander-codex
cd commander-codex
# Open index.html in your browser, or serve with any static host
```

For live sharing, deploy to:
- **GitHub Pages** (free, recommended) — push to `main`, enable Pages in repo settings → select root
- **Netlify** — drag & drop the folder
- **Vercel** — `vercel` CLI or connect the repo

---

## Updating Stats

Edit the data arrays in `js/app.js`:

```js
// Add a player
const players = [
  { rank: 1, name: 'Your Name', commander: 'Your Commander', wins: 0, games: 0, winRate: 0, eliminations: 0 },
  ...
];

// Add a match
const matches = [
  { date: 'YYYY-MM-DD', winner: 'Name', commander: 'Commander', turns: 14, pod: '4-player', wincon: 'How they won' },
  ...
];

// Add a charity year
const charityYears = [
  { year: 2025, raised: '$0', goal: '$2,000', pct: 0, games: 0, desc: 'Description of the year.' },
  ...
];
```

> **Future enhancement:** Replace the hardcoded arrays with a Google Sheets or Airtable integration to let non-developers update stats without touching code.

---

## Card Archive

The card viewer uses the [Scryfall API](https://scryfall.com/docs/api) — free, no API key required. Search any card by name, or use the **Pod Commanders** button to auto-load your featured commanders.

---

## Extra Life

We participate in [Extra Life](https://www.extra-life.org) each year, raising money for Children's Miracle Network Hospitals. Update `charityYears` in `js/app.js` with each year's results, and replace the donation link in `index.html` with your team's personal fundraising page URL.

---

## License

MIT — fork it, use it, make it yours.
