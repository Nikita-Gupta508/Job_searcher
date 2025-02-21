# Full Stack Application

## Project Overview
This is a full-stack web application consisting of a **backend** built with Node.js, Express, and MongoDB, and a **frontend** built with React, Vite, and TailwindCSS.

---

## Project Structure
```
root/
│── backend/   # Node.js Express backend
│── frontend/  # React frontend using Vite
│── package.json  # Root package.json with scripts
```

## Technologies Used
### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) for authentication
- Cloudinary for file storage
- Multer for handling file uploads

### Frontend:
- React.js with Vite
- Redux Toolkit for state management
- TailwindCSS for styling
- Radix UI for UI components
- React Router for navigation
- Framer Motion for animations

---

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Backend Setup
```sh
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Start the backend server:
```sh
npm run dev
```

### Frontend Setup
```sh
cd frontend
npm install
```
Start the frontend development server:
```sh
npm run dev
```

---

## Scripts
### Root Scripts
```json
"scripts": {
  "dev": "nodemon backend/index.js",
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
  "start": "nodemon backend/index.js"
}
```

### Backend Scripts
```json
"scripts": {
  "dev": "nodemon backend/index.js",
  "start": "node backend/index.js"
}
```

### Frontend Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
```

---

## Usage
1. Start the backend server.
2. Start the frontend server.
3. Open `http://localhost:5173` in your browser to access the application.

---

## Deployment
To build the frontend for production:
```sh
npm run build --prefix frontend
```
To deploy the backend, use platforms like **Render, Vercel, or DigitalOcean**.

---

## License
This project is licensed under the ISC License.
