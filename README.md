# Node.js Authentication Backend

## Overview
This project is a simple Node.js backend for user authentication. It includes features like user registration, login, and JWT-based authentication.

## Features
- **User Registration:** Create new users with a unique email and password.
- **User Login:** Authenticate users using email and password.
- **JWT Authentication:** Secure endpoints with JSON Web Tokens.

## Project Structure
```bash
node-backend/
├── app.js
├── config/
│   └── passport.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
└── .env
```

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/EmyEverBlessed/Node-Auth-App.git
   cd node-backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory with the following content:
     ```plaintext
     JWT_SECRET=your_jwt_secret_key
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Run the Application:**
   ```bash
   node app.js
   ```

## Usage

- **Register a User:**  
  `POST /register`  
  Send a JSON object with `email` and `password`.

- **Login a User:**  
  `POST /login`  
  Authenticate with `email` and `password` to receive a JWT.

