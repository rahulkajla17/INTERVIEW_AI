# 🎯 Interview AI

An intelligent interview preparation platform designed to help candidates prepare for their target job roles. By analyzing job descriptions against the candidate's resume or self-description, the platform generates customized technical/behavioral questions, match scores, severity-based skill gaps, and preparation roadmaps.

---

## 🚀 Key Features

*   **Custom Strategy Generation**: Custom plan based on target job description and candidate profile.
*   **Technical & Behavioral Questions**: Curated questions, intentions, and model answers.
*   **Preparation Roadmap**: Day-by-day study roadmap focusing on key skills.
*   **Resume Optimization & PDF Export**: Tailor resumes and export them as clean PDFs.
*   **Match Score & Skill Gaps**: Highlights match percentage and skill gaps.
*   **Authentication**: JWT-based session security.

---

## 🛠️ Technology Stack

### Frontend
*   **Core**: React + Vite
*   **Routing**: React Router
*   **Styles**: SCSS (Sass)

### Backend
*   **Server**: Node.js + Express
*   **Database**: MongoDB (Mongoose)
*   **AI SDK**: `@google/genai`
*   **Resume Parsing**: `pdf-parse`
*   **PDF Generation**: `puppeteer`
*   **Validation**: `zod` & `zod-to-json-schema`

---

## 📂 Project Structure

```
INTERVIEW_AI_Complete/
├── Backend/                 # Express Server and Database Layer
│   ├── src/
│   │   ├── config/          # Configurations
│   │   ├── controllers/     # Route logic controllers
│   │   ├── middlewares/     # Auth and upload middleware
│   │   ├── models/          # Schemas (User, InterviewReport)
│   │   ├── routes/          # Express route definitions
│   │   └── services/        # AI prompts & PDF generation logic
│   ├── server.js            # Server entry point
│   └── package.json
│
├── Frontend/                # React Vite Client
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/        # Auth pages & components
│   │   │   └── interview/   # Home, Interview Details & contexts
│   │   ├── style/           # Scoped styles
│   │   ├── App.jsx          # Route container
│   │   ├── main.jsx         # App bootstrap
│   │   └── style.scss       # Global stylesheet
│   ├── vite.config.js       # Vite configuration
│   └── package.json
└── README.md                # Project documentation
```

---

## ⚙️ Environment Setup

Create a `.env` file inside the `Backend` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/interview-ai
JWT_SECRET=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

---

## 💻 Installation & Local Development

### 1. Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the `Frontend` directory:
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

---

## 📡 API Reference

### Authentication Routes (`/api/auth`)
*   `POST /register` - Register a new candidate.
*   `POST /login` - Log in with email/password.
*   `GET /logout` - Log out and clear cookies.
*   `GET /get-me` - Get profile details of the current logged-in user.

### Interview Routes (`/api/interview`)
*   `POST /` - Generate a new strategy plan.
*   `GET /` - Fetch all generated interview plans.
*   `GET /report/:interviewId` - Retrieve detailed preparation cards for a single interview.
*   `POST /resume/pdf/:interviewReportId` - Generates and returns a dynamically optimized PDF version of the candidate's resume.
