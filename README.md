# BookNest - Backend

This repository contains the backend code for the BookNest application, built with Node.js, Express, and MongoDB.

## Table of Contents

- Project Structure
- Prerequisites
- Installation
- Setting Up the Environment Variables
- Running the Application
- Connecting to the Frontend
- API Endpoints
- Built With

## Project Structure

The project structure is as follows:

src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── config/
  ├── index.js
  └── .env (not included, needs to be created)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB Atlas Account
  - You’ll need to set up a MongoDB Atlas account and create a cluster.

## Installation

1. **Clone the repository**:

   git clone https://github.com/Hackintosh-02/BookNest-backend.git

2. **Navigate to the project directory**:

   cd BookNest-backend

3. **Install dependencies**:

   npm install

## Setting Up the Environment Variables

1. **Create a `.env` file** in the root directory.

2. **Add the following environment variable**:

   DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority

   Replace `<username>`, `<password>`, and `your-database-name` with your actual MongoDB Atlas credentials.

## Running the Application

1. **Start the backend server**:

   node index.js

2. **API will be accessible** at http://localhost:5000.

## Connecting to the Frontend

This backend is designed to work with the BookNest frontend, which is hosted in a separate repository. Ensure that the frontend is running locally or is accessible via a remote server.

Frontend Repository: [BookNest Frontend](https://github.com/Hackintosh-02/BookNest-frontend)

The frontend will make HTTP requests to the API endpoints exposed by this backend.

## API Endpoints

- GET /books        : Retrieve all books
- POST /books       : Add a new book
- GET /books/:id    : Retrieve a specific book by ID
- PUT /books/:id    : Update a specific book by ID
- DELETE /books/:id : Delete a specific book by ID

## Built With

- Node.js - JavaScript runtime for the backend.
- Express - Web framework for Node.js.
- MongoDB - NoSQL database.
- Mongoose - ODM for MongoDB.

