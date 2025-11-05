# Vercel Deployment Guide

## Overview
Your app has two parts:
- **Frontend (React)** - Deploy to Vercel
- **Backend (FastAPI)** - Deploy to Railway or Render (Vercel doesn't support long-running Python servers well)

## Option 1: Recommended Approach (Separate Deployments)

### Step 1: Deploy Backend to Railway

1. Go to [Railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect the backend
6. Add environment variables:
   - `MONGO_URL` - Your MongoDB Atlas connection string
   - `DB_NAME` - Your database name
   - `CORS_ORIGINS` - `*` (or your Vercel domain later)
7. Click "Deploy"
8. Copy your Railway backend URL (e.g., `https://your-app.railway.app`)

### Step 2: Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install --legacy-peer-deps`
6. Add environment variables:
   - `REACT_APP_BACKEND_URL` - Your Railway backend URL from Step 1
7. Click "Deploy"

### Step 3: Update CORS

After deployment, update your backend `.env` on Railway:
```
CORS_ORIGINS=https://your-vercel-app.vercel.app
```

---

## Option 2: Alternative - Use Render for Backend

### Deploy Backend to Render

1. Go to [Render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** your-app-backend
   - **Root Directory:** `backend`
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Add environment variables (same as Railway)
7. Click "Create Web Service"

Then follow Step 2 above for frontend deployment.

---

## MongoDB Setup (Required)

You need MongoDB Atlas (free tier available):

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist all IPs: `0.0.0.0/0` (for production, restrict this)
5. Get your connection string
6. Use it as `MONGO_URL` in your backend deployment

---

## Quick Deploy Commands

### If you have Vercel CLI installed:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd frontend
vercel --prod

# Note: Backend needs separate deployment to Railway/Render
```

---

## Environment Variables Summary

### Backend (Railway/Render):
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=your_database_name
CORS_ORIGINS=https://your-vercel-app.vercel.app
```

### Frontend (Vercel):
```
REACT_APP_BACKEND_URL=https://your-backend.railway.app
```

---

## Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend loads without errors
- [ ] Contact form submits successfully
- [ ] MongoDB is receiving data
- [ ] CORS is configured correctly
- [ ] Custom domain configured (optional)

---

## Troubleshooting

### Frontend shows white screen:
- Check browser console for errors
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Make sure backend is deployed and running

### Contact form doesn't work:
- Check CORS settings on backend
- Verify MongoDB connection string
- Check backend logs on Railway/Render

### Build fails:
- Use `--legacy-peer-deps` flag for npm install
- Check Node version (should be 18+)
- Verify all dependencies are in package.json

---

## Cost Estimate

- **Vercel (Frontend):** Free (Hobby plan)
- **Railway (Backend):** $5/month (or free tier with $5 credit)
- **MongoDB Atlas:** Free (512MB)
- **Total:** $0-5/month

---

## Alternative: All-in-One Vercel Deployment (Not Recommended)

Vercel doesn't handle Python backends well for production, but if you want to try:

1. Deploy from root directory
2. Vercel will try to use the `vercel.json` in root
3. This may have cold start issues and limitations

**Better to use separate deployments as described above.**
