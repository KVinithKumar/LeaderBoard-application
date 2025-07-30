# 🏆 Leaderboard Application

A dynamic and interactive leaderboard web app where users can be added, claim random points, and view rankings and recent claim history.

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://leader-board-application.vercel.app](https://leader-board-application.vercel.app)
- **Backend (Render)**: [https://leaderboard-application.onrender.com](https://leaderboard-application.onrender.com)

## 📸 Preview

<img width="1045" height="871" alt="image" src="https://github.com/user-attachments/assets/12564fe2-9b0b-4adb-830b-9eb0629f336d" />


---

## 🚀 Features

- 🎯 Create users with unique names
- 🪙 Claim random points per user
- 🥇 Live leaderboard updates
- 🕒 Claim history with timestamps
- 📱 Responsive design
- 🎨 Visually rich UI with icons and gradients

---

## 🛠 Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | React, Tailwind CSS, Axios |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB (Mongoose)       |
| Deployment| Vercel (frontend), Render (backend) |

---

## 🧾 API Endpoints

| Method | Endpoint                        | Description               |
|--------|----------------------------------|---------------------------|
| GET    | `/api/users`                    | Get all users             |
| POST   | `/api/users`                    | Add a new user            |
| POST   | `/api/users/claim`              | Claim points              |
| GET    | `/api/users/leaderboard`        | Get sorted leaderboard    |
| GET    | `/api/users/history`            | Get claim history         |

---

## 🧑‍💻 Local Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/KVinithKumar/LeaderBoard-application.git
cd LeaderBoard-application


2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend/:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Then start the backend:

bash
Copy
Edit
npm start
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
Create two environment files:

.env

ini
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
.env.production

ini
Copy
Edit
REACT_APP_API_URL=https://leaderboard-application.onrender.com
Then run locally:

bash
Copy
Edit
npm start
📦 Deployment Info
Frontend: Deployed on Vercel

Backend: Deployed on Render

Database: MongoDB Atlas (Cloud)

📂 Folder Structure
lua
Copy
Edit
/backend
  |-- models/
  |-- routes/
  |-- app.js

/frontend
  |-- src/
      |-- components/
      |-- App.js
      |-- config.js
