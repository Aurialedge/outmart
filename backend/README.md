# OutMart Backend

Minimal auth API (signup/login) using Express & Mongoose.

Get started:

1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install dependencies: `npm install`.
3. Run (development): `npm run dev`.

API endpoints:
- POST `/api/auth/signup` { name, email, password, role }
- POST `/api/auth/login` { email, password }

Responses include a `token` (JWT) and `user` object (without password).
