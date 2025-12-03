# Developer_Directory
The developer directory app is a full stack application designed to manage and display a searchable list of software developers. Users can add new developer profiles, and browse the existing directory.

The project has been built to demostrate profficiency in web development practices.

Features:
1. Developer Onboarding form : A responsive form to add new developer profiles with details like name, role, experience, and list of technology
2. Data Validation : Basic client-side validation, complemented by server-side validation to ensure data integrity.
3. Developer Directory Display: A clean, card-based UI for listing all sorted developers.
4. Search and Filter Functionality : Users can filter the role and search by Tech word stacks
5. Toast messages
6. Clean Architecture

Technology Stack:
The application is built using the following core technologies:

1. ReactJS : To build the user interface. Utilizes functional components and hooks for state management and side effects
2. Tailwind CSS : Used for fast, responsive and clean UI design
3. NodeJS and ExpressJS
4. MongoDB for Database
5. Mongoose for providing structure and schema validation with MongoDB
6. Netlify for Deployment

---

## Repository Analysis

### File Structure
```
.
├── README.md
├── backend
│   ├── models
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   └── server.js
├── frontend
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   └── vite.config.js
```

### High-level Structure Overview

- **backend/**  
  Contains all the server-side code for the application. This includes:
  - `server.js`: Main entry for the Express server.
  - `models/`: Contains all mongoose models/schemas.
  - `routes/`: API route definitions.
  - `package.json` and `package-lock.json`: Declare Node dependencies and lock versions.
  - `node_modules/`: All installed backend dependencies (excluded from repository).
- **frontend/**  
  Houses all the client-side code using React. Includes:
  - `src/`: Source code for React components, hooks, and utilities.
  - `index.html`: HTML entry point for the React application.
  - `package.json`, `package-lock.json`: Declare and lock frontend dependencies.
  - `eslint.config.js` and `vite.config.js`: Configuration for linting and build tooling.
  - `.gitignore`: Specifies files/folders for Git to ignore.
- **README.md**  
  This file. Provides the description, usage, and structure details.

### Technology Summary

- **Frontend**: ReactJS, Tailwind CSS, Vite, ESLint  
- **Backend**: Node.js, Express.js, Mongoose, MongoDB  
- **Deployment**: Netlify  
- **Testing/Validation**: Client and server-side validation

---

This analysis gives a clear overview of the full stack project, major technologies, and how the repository is logically organized for maintainability and scalability.
