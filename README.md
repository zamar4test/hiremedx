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
