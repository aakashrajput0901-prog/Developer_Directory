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
│   │   └── Developer.js
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   │   └── developerRoutes.js
│   └── server.js
├── frontend
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── Components
│   │   │   ├── DeveloperCard.jsx
│   │   │   ├── DeveloperForm.jsx
│   │   │   └── DeveloperList.jsx
│   │   └── assets
│   └── vite.config.js
```

### Detailed List of Files

#### backend/models/
- `Developer.js`

#### backend/routes/
- `developerRoutes.js`

#### backend/
- `server.js`
- `package.json`
- `package-lock.json`

#### frontend/
- `.gitignore`
- `README.md`
- `eslint.config.js`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`

#### frontend/src/
- `App.css`
- `App.jsx`
- `index.css`
- `main.jsx`

#### frontend/src/Components/
- `DeveloperCard.jsx`
- `DeveloperForm.jsx`
- `DeveloperList.jsx`

#### frontend/src/assets/
- (folder for static assets like images or icons)

### High-level Structure Overview

- **backend/**  
  Contains all the server-side code for the application. This includes:
  - `server.js`: Main entry for the Express server.
  - `models/`: Mongoose model (Developer.js).
  - `routes/`: API route definitions (developerRoutes.js).
  - `package.json` and `package-lock.json`: Backend dependencies.
  - `node_modules/`: Installed backend dependencies (excluded from repository).
- **frontend/**  
  Houses all the client-side code using React. Includes:
  - `src/`: Source code for React components, hooks, and utilities.
  - `index.html`: HTML entry point for React.
  - `package.json`, `package-lock.json`: Frontend dependencies.
  - `eslint.config.js` and `vite.config.js`: Lint/build configuration.
  - `.gitignore`: Git ignored files spec.
- **README.md**  
  This file. Provides the description, usage, and structure details.

### Technology Summary

- **Frontend**: ReactJS, Tailwind CSS, Vite, ESLint  
- **Backend**: Node.js, Express.js, Mongoose, MongoDB  
- **Deployment**: Netlify  
- **Testing/Validation**: Client and server-side validation

---

This analysis gives a clear overview of the full stack project, major technologies, and how the repository is logically organized for maintainability and scalability.
