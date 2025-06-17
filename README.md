# Vaelora: ArionAI Deployment

This project is ready for deployment using **Firebase Hosting** or **GitHub Pages**.

---

## 🚀 Firebase Hosting Deployment

### Prerequisites
- Install Firebase CLI: `npm install -g firebase-tools`
- Authenticate: `firebase login`
- Initialize if not done: `firebase init`

### Deploy
```bash
firebase deploy
```

Ensure your `firebase.json` contains:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

---

## 🌐 GitHub Pages Deployment (via /docs)

### Prerequisites
- Ensure your repo is public or GitHub Pages enabled
- Push this codebase to your GitHub repo

### Configure Pages
- Go to `Settings > Pages`
- Set source to `main` branch and `/docs` folder

---

## 🧪 Local Dev & Build

```bash
npm install
npm run dev      # Start Vite dev server
npm run build    # Build production dist/
```

## 🧹 Lint & Format

```bash
npm run lint:js
npm run lint:css
npm run format
```
