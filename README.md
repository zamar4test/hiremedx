# HireMedX React App

This is a React-based healthcare professional platform converted from the original single-page HTML website.

## Project Structure

```
src/
├── components/
│   └── Layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── FindTalent.jsx
│   ├── Jobs.jsx
│   ├── Professionals.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- **Multi-page Navigation**: Converted single-page app to multi-page with React Router
- **Find Talent**: Post jobs and find healthcare professionals
- **Browse Jobs**: View available healthcare positions
- **Professionals**: Browse professional profiles
- **About**: Learn about institutions served
- **Authentication**: Login and Signup pages

## Technologies

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## Deploying to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Netlify](https://app.netlify.com/) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Option 3: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

> **Note:** The `netlify.toml` and `public/_redirects` files are already configured to handle client-side routing properly.

