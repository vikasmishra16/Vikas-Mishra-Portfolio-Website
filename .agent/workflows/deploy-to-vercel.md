---
description: How to deploy this portfolio to Vercel's Free Tier
---

# Deploying to Vercel

Vercel is the best platform for hosting React + Vite applications. Follow these steps to get your portfolio live.

## Option 1: GitHub Integration (Recommended)

This is the easiest method and provides **Automatic Deploys** (every time you push code, your site updates).

### 1. Push your code to GitHub
If you haven't already, create a repository on GitHub and push your code:
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up/login with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. You will see a list of your GitHub repositories. Click **"Import"** next to your portfolio repo.

### 3. Configure and Deploy
1. **Project Name:** You can leave it as is or change it.
2. **Framework Preset:** Vercel should automatically detect **Vite**.
3. **Root Directory:** `./`
4. **Build and Output Settings:** Should be automatically filled:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables:** If you have any (like an API key), add them here. For this current version, you don't need any.
6. Click **"Deploy"**.

---

## Option 2: Vercel CLI (Quickest)

Use this if you don't want to use GitHub.

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login and Deploy
Run this in your project root directory:
```bash
vercel
```
1. **Set up and deploy?** Yes
2. **Which scope?** Your account
3. **Link to existing project?** No
4. **Project name?** vikas-mishra-portfolio (or your choice)
5. **In which directory?** `./`
6. **Modify settings?** No (Vercel will detect Vite automatically)

Once finished, your terminal will provide a live URL!

---

## Troubleshooting

- **Build Failure:** Ensure you have run `npm install` locally and that `npm run build` works without errors.
- **Missing Assets:** Ensure images and your `resume.pdf` are in the `public/` folder.
