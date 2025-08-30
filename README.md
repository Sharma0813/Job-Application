# Job Application Platform — Minimal Full-Stack Demo

This demo contains:
- frontend: A Vite + React single-page app (folder `frontend`)
- backend: A Node + Express restful API (folder `backend`)

Quick start (local dev):
1. Start backend:
   - `cd backend`
   - `npm install`
   - `npm start`
2. Start frontend (in another terminal):
   - `cd frontend`
   - `npm install`
   - `npm run dev`
3. By default Vite dev server runs on 5173 and the backend on 3001.
   You can configure a proxy in `frontend/vite.config.js` if you like,
   or run the frontend with `--port` and set `VITE` env vars.

Notes:
- This project uses in-memory storage for simplicity — not for production.
- To persist data, connect the backend to a database (MongoDB, PostgreSQL, etc.).
