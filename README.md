# 🧠 Zustand + React + Vite + TypeScript Boilerplate

A modern boilerplate using **Zustand** for global state management with localStorage persistence and devtools integration. Built with **React 19**, **Vite**, and **TypeScript** for a fast and scalable frontend development experience.

---

## 🚀 Tech Stack

- ⚛️ React 19
- ⚡ Vite 6.3.5
- 🔡 TypeScript 5.8.3
- 🧠 Zustand 5.0.5 (with `persist` and `devtools` middleware)
- 💾 localStorage (for state persistence)
- 🐳 Docker (for production-ready deployment)

---

## 📦 Getting Started

### Clone and Run Locally

```bash
git clone https://github.com/programmingwithnavilla/react-typescript-vite-zustand
cd react-typescript-vite-zustand
npm install
npm run dev

# Build the Docker Image
docker build -t zustand-react-app .

# Run the Docker Container
docker run -p 3000:80 zustand-react-app
