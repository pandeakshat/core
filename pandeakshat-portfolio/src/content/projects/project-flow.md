# ProjectFlow

> Centralized project tracking system for managing all PandeAkshat projects.

---

## 📘 Overview

ProjectFlow is a lightweight web-based management tool built to track progress, milestones, and dependencies across multiple active projects in the PandeAkshat ecosystem. It provides real-time visibility into each project's lifecycle, promoting structured development and efficient progress monitoring through Supabase-backed data management.

- Type: Web App  
- Tech Stack: Next.js, Supabase, TailwindCSS  
- Status: Active  

---

## ⚙️ Features

- CRUD operations for project tracking and updates.  
- Dashboard interface displaying active project progress.  
- Real-time sync with Supabase database for collaborative updates.  

---

## 🧩 Architecture / Design

```text
projectflow/
├── pages/
│   ├── index.tsx
│   ├── projects/
├── components/
│   ├── ProjectCard.tsx
│   └── ProgressBar.tsx
├── lib/
│   └── supabaseClient.ts
└── README.md
```

Explain briefly how your components fit together:
- `pages/` defines routing and project views.  
- `components/` contains UI modules for project tracking and visualization.  
- `lib/` manages Supabase configuration and real-time data connectivity.  

---

## 🚀 Quick Start

### 1. Clone and setup environment
```bash
git clone https://github.com/pandeakshat/projectflow.git
cd projectflow
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run
```bash
npm run dev
```

> The app will start at http://localhost:3000

---

## 🧠 Example Output / Demo

Displays a structured dashboard showing all active projects with status bars, task summaries, and progress metrics.

> Example: “Visualizes the lifecycle of Customer Intelligence, Data Audit, and Sales Dashboard with progress indicators.”

---

## 🔍 Core Concepts

| Area | Tools | Purpose |
|------|--------|----------|
| Backend | Supabase | Data persistence and sync |
| Frontend | Next.js, TailwindCSS | Interface and layout |
| Tracking | Custom logic | Progress and milestone updates |

---

## 📈 Roadmap

- [x] Core project and milestone tracking  
- [ ] Integration with GitHub activity and commits  
- [ ] AI-based task prioritization engine  
- [ ] Notification and reporting system  

---

## 🧮 Tech Highlights

**Languages:** TypeScript, SQL  
**Frameworks:** Next.js, Supabase, TailwindCSS  
**Cloud:** Vercel, Supabase  
**Integrations:** GitHub, ProjectFlow Internal APIs  

---

## 🧰 Dependencies

- next  
- react  
- supabase-js  
- tailwindcss  

---

## 🧾 License

MIT License © [Akshat Pande](https://github.com/pandeakshat)

---

## 🧩 Related Projects

- [Customer Intelligence](https://github.com/pandeakshat/customer-intelligence) — Comprehensive analytics suite.  
- [Data Intelligence](https://github.com/pandeakshat/data-intelligence) — Dataset audit & enrichment tool.  

---

## 💬 Contact

**Akshat Pande**  
📧 [mail@pandeakshat.com](mailto:mail@pandeakshat.com)  
🌐 [Portfolio](https://pandeakshat.com) | [LinkedIn](https://linkedin.com/in/pandeakshat)
