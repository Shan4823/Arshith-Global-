# Deployment Guide

This repo contains two independently deployable projects:

- `frontend/` — Vite + React multi-page site (static build)
- `backend/` — Express + Mongoose API (Node server, also runs as a Vercel serverless function)

Both can be deployed to Vercel as **separate projects** pointing at the same GitHub repo, each with its own "Root Directory" setting. The backend is a standard Express app and also runs unmodified on any Node host (Render, Railway, a VPS, etc.) via `npm start`.

---

## 1. MongoDB Atlas setup

1. Create a free **M0** cluster at https://www.mongodb.com/cloud/atlas.
2. **Database Access** → add a new database user with a strong, generated password and a custom role limited to `readWrite` on the `arshith-group` database only (not `atlasAdmin`).
3. **Network Access** → add `0.0.0.0/0` (allow access from anywhere). This is required because Vercel serverless functions run on dynamic IPs. Restrict further only if you deploy the backend to a host with a static IP.
4. **Database → Connect → Drivers** → copy the connection string and substitute your user/password/db name:
   ```
   mongodb+srv://<user>:<password>@<cluster>.mongodb.net/arshith-group?retryWrites=true&w=majority
   ```
   This becomes `MONGODB_URI`.

---

## 2. Backend deployment

### Local development

```bash
cd backend
npm install
cp .env.example .env   # fill in MONGODB_URI, FRONTEND_URL, NODE_ENV
npm run dev             # or: npm start
```

`GET /api/health` should return `{ "success": true, "message": "OK", ... }`.

### Vercel

1. Create a new Vercel project from the same GitHub repo.
2. Set **Root Directory** to `backend`.
3. Vercel will detect `backend/vercel.json` (uses `@vercel/node` against `api/index.js`) — no build command needed.
4. Add environment variables (Project Settings → Environment Variables):
   - `MONGODB_URI` — from step 1
   - `FRONTEND_URL` — the deployed frontend URL (set after step 3 below; comma-separate multiple origins if needed)
   - `NODE_ENV` — `production`
5. Deploy. Note the resulting backend URL, e.g. `https://arshith-group-backend.vercel.app`.

### Alternative hosts (Render, Railway, VPS)

The backend is a normal Express app — no Vercel-specific code is required to run it:

```bash
cd backend
npm install
npm start
```

Set `MONGODB_URI`, `FRONTEND_URL`, and `NODE_ENV=production` as environment variables on the host. Most platforms (Render/Railway) inject their own `PORT`, which `server.js` already respects.

---

## 3. Frontend deployment

### Local development

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_BASE_URL to the backend URL
npm run dev
```

### Vercel

1. Create a new Vercel project from the same GitHub repo.
2. Set **Root Directory** to `frontend`.
3. Vercel will detect `frontend/vercel.json` (`framework: vite`, build command `npm run build`, output directory `dist`, clean URLs enabled for all 7 pages).
4. Add environment variable:
   - `VITE_API_BASE_URL` — the deployed backend URL from step 2 (no trailing slash)
5. Deploy. Note the resulting frontend URL, e.g. `https://arshith-group.vercel.app`.

> `VITE_API_BASE_URL` is baked into the static build at build time. If you change it, redeploy the frontend.

---

## 4. Wiring it together

Because the two projects reference each other's URLs, deploy in this order:

1. Deploy the **backend** first (CORS will initially reject the frontend, that's fine).
2. Deploy the **frontend** with `VITE_API_BASE_URL` set to the backend URL from step 1.
3. Go back to the **backend** project, set `FRONTEND_URL` to the frontend URL from step 2, and redeploy.

### Final checks

- `GET https://<backend-url>/api/health` → `{ "success": true, ... }`
- Submit the "Contact Us" form (Home/Internship/News pages) and the InfoTech "Service Enquiry" form — both should show a success state and create documents in the `contactenquiries` / `infotechenquiries` collections in Atlas.
- Submitting from a different origin than `FRONTEND_URL` should be blocked by CORS.
