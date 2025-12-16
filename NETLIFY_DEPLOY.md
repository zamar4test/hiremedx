# HireMedX - Netlify Deployment Guide

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Prerequisites

Before deploying to Netlify, ensure you have:
- Node.js installed on your local machine
- Dependencies installed (`npm install`)
- The project builds successfully (`npm run build`)

## Deployment Methods

### 1. Connect Git Repository (Recommended)

This method enables automatic deployments on every push to your repository.

**Steps:**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose your Git provider and authorize Netlify
5. Select your repository
6. Configure build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **"Deploy site"**

Your site will be deployed and you'll get a URL like `https://random-name.netlify.app`

### 2. Netlify CLI

Deploy directly from your terminal.

**Steps:**
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project (first time only)
netlify init

# Build and deploy
npm run build
netlify deploy --prod
```

### 3. Drag & Drop (Manual)

For quick one-time deployments without Git.

**Steps:**
1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site will be deployed instantly

## Configuration Files

The following files are configured for Netlify deployment:

### `netlify.toml`
Defines build settings and redirect rules for React Router:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### `public/_redirects`
Fallback redirect configuration:
```
/*    /index.html   200
```

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your site's dashboard on Netlify
2. Click **"Domain settings"**
3. Click **"Add custom domain"**
4. Follow the instructions to configure your DNS

## Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Edit variables"**
3. Add your variables (e.g., `VITE_API_URL`)

## Troubleshooting

### Routes return 404
- Ensure `netlify.toml` and `public/_redirects` exist
- Check that redirects are configured correctly

### Build fails
- Run `npm run build` locally to debug
- Check the build logs on Netlify
- Ensure all dependencies are in `package.json`

### Blank page after deployment
- Check browser console for errors
- Verify the build output in the `dist` folder
- Ensure `index.html` is in the `dist` folder

## Success!

Your React app should now be live on Netlify with working client-side routing! 🚀
