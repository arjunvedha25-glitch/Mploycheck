# Full-Stack Coding Challenge - Nsqtech

# Mploycheck (Single Page Application)

An enterprise-ready Single Page Application (SPA) built with **Angular 12+** and a **Node.js TypeScript** REST API. The system manages user access control and records processing, utilizing a custom delayed-response architecture to showcase asynchronous data handling and clean modular design.

---

## 🚀 Core Features

### 1. Multi-Role Authentication Dashboard
* **Secure Login Portal:** Evaluates user credentials and dynamic roles (**General User** or **Admin**) against a mock API engine.
* **Lightweight Data Persistence:** Uses a structured, local XML data file to securely parse and validate session tokens.

### 2. Context-Aware User Workspace
* **Profile Insights:** Displays tailored metadata matching the logged-in user's identity and permissions.
* **Access-Controlled Data Tables:** Calls custom endpoints to dynamically fetch and display a tabular list of records based on the user's explicit role tier.

### 3. Administrative Management System
* **User Management Engine:** Grants Admin profiles exclusive access to tools for updating, viewing, and managing the core dataset.
* **Asynchronous Showcase:** Implements a parameterized API network delay on initial page load, demonstrating seamless async state handling, loading animations, and non-blocking performance via modular Angular services.

## 🛠️ Tech Stack

- **Frontend:** Angular (Component-driven architecture, TypeScript)
- **Backend:** Node.js, Express.js (RESTful API endpoints)
- **Database/Storage:** Local XML Files (`.xml` file manipulation for data persistence)

---

## 📦 Project Structure

```text
Mploycheck/
├── backend/
│   ├── data/
│   │   └── database.xml      # Local XML storage file for records
│   ├── controllers/          # Request handling logic (e.g., user.controllers.ts)
│   ├── server.ts             # Express application entry point
│   ├── package.json          # Backend dependencies
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── app/              # Angular components, guards, and services
│   │   └── index.html
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js:** Ensure Node.js (v16 or higher) and `npm` are installed.

### 1. Backend Setup (Node.js & Express)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
   *The backend REST API will be active at `http://localhost:3000`

### 2. Frontend Setup (Angular)
1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary node packages:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm start
   ```
   *The client interface will be viewable at `http://localhost:4200`.*

---

 🧑‍💻 Author

**Arjun Kumar J** *aspiring Java Full Stack Developer/software devloper* - **GitHub:** [@arjunvedha25-glitch](https://github.com/arjunvedha25-glitch)  
- **Education:** Bachelor of Computer Applications (BCA), Bharathidasan University


- arjunvedha25@gmail.com[8838942141]--contact
