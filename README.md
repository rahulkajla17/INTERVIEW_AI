# 🎯 Interview AI (yt-genai)

**Interview AI** is an intelligent, AI-powered preparation platform designed to help candidates prepare for their dream jobs. By analyzing a target job description and evaluating a candidate's profile (either from a PDF resume or a self-description), the system automatically generates customized interview preparation resources, match scores, severity-based skill gaps, and preparation roadmaps using Google's Gemini generative AI.

---

## 🚀 Key Features

*   **Custom Strategy Generation**: Paste a job description, upload a PDF resume or self-description, and get an instant, custom preparation plan.
*   **Structured Technical & Behavioral Questions**: Gemini-generated interview questions mapped directly to the skills needed for the role, complete with the *Intention* behind the question and *Model Answers*.
*   **Personalized Preparation Roadmap**: A detailed day-by-day plan mapping out what subjects, tasks, and exercises to focus on before the interview.
*   **Resume Optimization & PDF Export**: Dynamically generate tailored resumes and export them as clean PDFs (powered by Puppeteer).
*   **Match Score & Skill Gap Analysis**: High/Medium/Low severity badge scoring showcasing how well the profile aligns with the role.
*   **User Authentication**: JWT-based secure authorization with support for logout blacklists and session persistence.

---

## 🛠️ Technology Stack

### Frontend
*   **Core**: React (v19) + Vite (for lightning-fast building and HMR)
*   **Routing**: React Router (v7)
*   **Styles**: SCSS (Sass) utilizing modern scoped styles, custom variables, and transition-based micro-animations
*   **Icons**: Clean, modern SVG icons for high pixel-density styling

### Backend
*   **Server**: Node.js + Express (v5)
*   **Database**: MongoDB (via Mongoose ODM)
*   **AI SDK**: `@google/genai` (Official Google GenAI SDK for Gemini models)
*   **Resume Parsing**: `pdf-parse` (Extracts text content from uploaded PDFs)
*   **PDF Generation**: `puppeteer` (Headless browser rendering HTML to PDF)
*   **Validation**: `zod` & `zod-to-json-schema` (Strict schema definitions for structured JSON outputs from GenAI)

---

## 📂 Project Structure

```
INTERVIEW_AI_Complete/
├── Backend/                 # Express Server and MongoDB Database Layer
│   ├── src/
│   │   ├── config/          # MongoDB and environment configurations
│   │   ├── controllers/     # Route logic for auth and interviews
│   │   ├── middlewares/     # JWT authentication, file uploading
│   │   ├── models/          # Mongoose database schemas (User, InterviewReport)
│   │   ├── routes/          # Express route definitions
│   │   └── services/        # AI prompt logic and PDF parsing/rendering
│   ├── server.js            # Entry point for Backend server
│   └── package.json
│
├── Frontend/                # React Vite SPA
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/        # Login/Register pages & components
│   │   │   └── interview/   # Home, Interview Details, components & context
│   │   ├── style/           # Global styles and custom button styles
│   │   ├── App.jsx          # Route container
│   │   ├── main.jsx         # App bootstrapping
│   │   └── style.scss       # Global CSS imports
│   ├── vite.config.js       # Vite configuration
│   └── package.json
└── README.md                # Project documentation
```

---

## ⚙️ Prerequisites & Setup

### Backend Environment Variables
Create a `.env` file inside the `Backend` directory containing:

```env
# MongoDB Connection URI
MONGO_URI=mongodb://127.0.0.1:27017/interview-ai

# JWT Secret key
JWT_SECRET=your_jwt_secret_key_here

# Google GenAI API Key (from Google AI Studio)
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
```

---

## 💻 Installation & Local Development

### 1. Backend Setup
1. Open a terminal and navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server (runs nodemon on `server.js`):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React Vite server:
   ```bash
   npm run dev
   ```
4. Access the web app in your browser (typically `http://localhost:5173`).

---

## 📡 API Reference

### Authentication Routes (`/api/auth`)
*   `POST /register` - Register a new candidate.
*   `POST /login` - Log in with email/password. Sets access cookies.
*   `GET /logout` - Clear cookies and blacklist the session token.
*   `GET /get-me` - Get profile details of the currently logged-in user.

### Interview Routes (`/api/interview`)
*   `POST /` - Generate a new strategy plan (requires Job Description + PDF Resume/Self-Description).
*   `GET /` - Fetch all generated interview plans for the logged-in candidate.
*   `GET /report/:interviewId` - Retrieve detailed preparation cards for a single interview report.
*   `POST /resume/pdf/:interviewReportId` - Generates and returns a dynamically optimized PDF version of the candidate's resume based on the target job requirements.
