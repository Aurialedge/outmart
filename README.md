OutMart — local development

Quick start

- Backend:
	- copy `backend/.env.example` to `backend/.env` and set `MONGO_URI` and `JWT_SECRET`
	- cd backend && npm install
	- npm run dev
- Frontend:
	- copy `frontend/.env.example` to `frontend/.env` if you want to override `VITE_API_URL`
	- cd frontend && npm install
	- npm run dev

Auth endpoints (backend):

- POST `/api/auth/signup` — body `{ name, email, password }` (backend defaults role to `customer`)
- POST `/api/auth/login` — body `{ email, password }`
 - POST `/api/auth/request-otp` — body `{ email, phone? }` sends an OTP to email and phone (if configured)
 - POST `/api/auth/verify-otp` — body `{ email, code }` verifies the one-time code and returns `{ user, token }` on success
	- If `verify-otp` is called with `{ name }` and the user does not exist, the server will create the user (password is set randomly) and return `{ user, token }` — enabling OTP-based signup.

Both return `{ user, token }` on success. Frontend stores token in `localStorage`.
