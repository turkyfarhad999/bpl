# 🏏 BPL Players Auction

A mini fantasy-cricket auction simulator built with React, where users get a virtual purse and "bid" on players for their dream BPL (Bangladesh Premier League) squad.

**🔗 Live Demo:** [bpl-players-auction.netlify.app](https://bpl-players-auction.netlify.app/)

---

## 📖 Overview

BPL Players Auction lets a user start with a fixed virtual budget (5,000,000 coins) and pick players from an available pool. Each player has a price, country, role, batting style, and rating — pick wisely, because once your coins run out, you can't buy more! Switch between **Available Players** and **Selected Players** tabs to track your squad in real time.

## ✨ Features

- 💰 Real-time coin balance tracking as players are bought
- 🧑‍🤝‍🧑 Browse all available players with stats (role, rating, batting style, price)
- ✅ Toast notifications on successful purchase / insufficient balance
- 🔄 Toggle between "Available" and "Selected" player views
- 📱 Fully responsive grid layout (1 / 2 / 3 columns based on screen size)
- ⚡ Built with React 19 `use()` hook + `Suspense` for async data fetching

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS 4 + DaisyUI |
| Icons | Lucide React, FontAwesome |
| Notifications | react-toastify |
| Deployment | Netlify |

## 📂 Project Structure

```
bpl/
├── public/
│   └── data.json        # Player dataset
├── src/
│   ├── component/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Players.jsx
│   │   ├── Player.jsx
│   │   ├── Selected.jsx
│   │   └── SelectedPlayer.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🚀 Getting Started

\`\`\`bash
# Clone the repo
git clone https://github.com/turkyfarhad999/bpl.git
cd bpl

# Install dependencies
npm install

# Run locally
npm run dev
\`\`\`

## 🔮 Future Improvements

- Persist selected team with localStorage / backend
- Player search & filter by role/country
- Auction countdown timer / live bidding style UX
- Team budget analytics dashboard

## 👤 Author

**Turky Farhad**
CSE, RUET | MERN Stack Developer
[GitHub](https://github.com/turkyfarhad999)

---

⭐ If you liked this project, consider giving it a star!
