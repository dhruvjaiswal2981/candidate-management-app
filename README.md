# Candidate Management Web App

A full-stack web application built with **React.js** (Frontend), **Node.js with Express** (Backend), and **SQLite** (Database) to manage and display candidates' data. The app supports features like search, filter, pagination, and an "Add Candidate" form.

## Features

- **Table View**: Display candidates in a table format with name, phone, email, gender, experience, and skills.
- **Add Candidate**: Add new candidates with name, phone, email, gender, experience, and skills.
- **Search**: Search candidates by name, phone, or email.
- **Filter**: Filter candidates by gender, experience, or skills.
- **Pagination**: Display 10 candidates per page with previous/next navigation.
  
## Technologies

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: SQLite

---

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn** (optional)

---

## Setup Instructions

### Step 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/dhruvjaiswal2981/candidate-management-app.git
cd candidate-management-app
```


### Step 2: Backend Setup

- Navigate to the backend directory and install the necessary dependencies:

```bash
cd backend
npm install
```

- Start the backend server:

```bash
node server.js
```

- The backend will run on http://localhost:5000.

### Step 3: Frontend Setup

- Navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

- Start the React development server:

```bash
npm start
```

- The frontend will run on http://localhost:3000.

## Database Setup

- The application uses SQLite for the database. The database schema is already included in the backend/db.js file and will be automatically created when the backend server is run for the first time.

- If you want to initialize the database with sample data, you can use the included sample.db file. Place it in the backend folder and make sure it's named sample.db.

- Alternatively, you can seed the database by using the POST /api/candidates endpoint with some sample candidate data after the backend is up and running.

## API Endpoints

- GET /api/candidates

- Fetch candidates based on the following optional query parameters:

    - search: Search candidates by name, phone, or email

    - gender: Filter by gender (e.g., "Male", "Female", "Other")

    - experience: Filter by experience (e.g., "1 Year", "2 Years")

    - skills: Filter by comma-separated skills (e.g., "JavaScript,React")

    - page: Pagination (default is 1)

    - limit: Number of candidates per page (default is 10)

- POST /api/candidates

- Add a new candidate to the database with the following JSON body:

```json
{
  "name": "John Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "gender": "Male",
  "experience": "2 Years",
  "skills": ["JavaScript", "React"]
}
```

## Frontend Overview
- The frontend is built using React.js and TailwindCSS for styling. It consists of the following components:

1. CandidateTable: Displays the candidates in a table with pagination and search functionality.

2. CandidateForm: A form for adding a new candidate.

3. SearchBar: Allows searching for candidates by name, phone, or email.

4. FilterBar: A filter section to filter candidates by gender, experience, or skills.

## 🚀 Deployment

- Backend Deployment

    - Live Demo: The application is hosted on Render
    - Access it here: https://candidate-management-app.onrender.com/api/candidates

- Frontend Deployment

    - Live Demo: The application is hosted on Netlify.
    - Access it here: 

## Live Demo

- Demo Video Link : 

## 📌 Author

- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉