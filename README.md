
# Admin Panel Project

Lightweight admin panel with a Node.js/Express backend and a Vite + React frontend.

**Repository layout**
- `backend/` — Express API, controllers, models, routes
- `frontend/` — Vite + React app (JSX), components, pages

**Tech stack**
- Backend: Node.js, Express, MongoDB (or other DB via `database.js`)
- Frontend: React (Vite)
- Auth: JWT-based authentication

**Features**
- User authentication (register/login)
- Role-based access / admin routes
- Admin dashboard and user management pages

**Admin sample credentials**
- Email: `admin@gmail.com`
- Password: `admin123`

If your project does not already include a seeded admin user, register via the frontend or the API and set the role to `admin` in the database.

---

**Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn
- A running MongoDB instance (or configure your preferred DB)

**Environment variables (example)**
Create a `.env` file in `backend/` with values similar to:

```
DATABASE_URL=mongodb://localhost:27017/admin-panel
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=1d
PORT=5000
```

Adjust keys in `backend/config/database.js` if your DB config differs.

**Setup & Run (development)**

1) Backend

```bash
cd backend
npm install
# start in dev mode (if package.json has a dev script, e.g., nodemon)
npm run dev
```

2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the frontend dev server (typically `http://localhost:5173`) and use the admin credentials above to login.

**Build for production**

Backend: build steps depend on your hosting. Often you run:

```bash
cd backend
npm install --production
# then start your server with a process manager, e.g.:
node server.js
```

Frontend:

```bash
cd frontend
npm run build
# then serve the `dist` output with a static host or copy into backend static folder
```

**API quick notes**
- Auth routes: `backend/routes/authRoutes.js`
- User routes: `backend/routes/userRoutes.js`
- Protect routes with middleware in `backend/middleware/`

If you'd like me to add a database seed script to create the sample admin automatically, I can add that next.

