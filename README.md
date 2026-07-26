# 🏋️ BroGram — Workout Planner

> A no-account, no-backend workout tracker built with React. Log your exercises, track progress, and keep everything in your browser.

🔗 **[Live Demo → bogdansworkout.netlify.app](https://bogdansworkout.netlify.app/)**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

---

## 🧩 Problem → Solution

**Problem:** Most workout apps require sign-ups, subscriptions, or constant internet connections. For someone who just wants to log sets, reps, and weights and review their history, the overhead of accounts and servers is unnecessary friction.

**Solution:** Build a fully client-side workout tracker using React and browser `localStorage`. No sign-up, no backend, no server costs — all data lives in the user’s own browser. The app is deployed as a static site, making it free to host and instant to load.

---

## ✨ Features

- **Log workouts** with exercises, sets, reps, and weights
- **View history** organized by date
- **localStorage persistence** — data survives page refreshes without any backend
- **No account required** — open and start tracking immediately
- **Fast** — Vite-powered build with minimal bundle size

---

## 🛠️ Tech Stack & Why

| Technology | Role | Why This Choice |
|---|---|---|
| **React** | UI framework | Component model makes it natural to build a workout logger — each exercise, set row, and history card is an isolated, reusable component |
| **Vite** | Build tool & dev server | Dramatically faster than Create React App for both cold starts and HMR. No Webpack config needed, and the production build is highly optimized |
| **Browser localStorage** | Data persistence | Eliminates the need for any backend infrastructure. For a personal workout log, localStorage is sufficient, free, and respects user privacy — nothing leaves the device |
| **Netlify** | Deployment / hosting | One-command deploy from a GitHub repo, free tier, automatic HTTPS, and instant CDN distribution — perfect for a static React app |

---

## 📁 Project Structure

```text
BroGram/
├── src/
│   ├── components/     # Reusable UI components (WorkoutCard, ExerciseRow, etc.)
│   ├── pages/          # Page-level views (Dashboard, History, Log Workout)
│   ├── utils/          # localStorage helpers and data formatters
│   └── App.jsx         # Root component and routing
├── public/             # Static assets
└── vite.config.js      # Vite configuration
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+

### Installation

```bash
git clone https://github.com/BK0SS/workoutPlanner.git
cd workoutPlanner/BroGram
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Netlify, Vercel, or GitHub Pages.

---

## 🔒 Data & Privacy

All workout data is stored exclusively in your browser’s `localStorage`. Nothing is sent to any server. Clearing browser data will erase your history, so export if needed.

---

## 👤 Author

**Bogdan Kosulin**
- GitHub: [@BK0SS](https://github.com/BK0SS)
- LinkedIn: [bogdan-kosulin](https://www.linkedin.com/in/bogdan-kosulin/)

---

## 📄 License

MIT
