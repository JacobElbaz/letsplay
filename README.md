# Playgrounds API - NestJS Application

## Description
Playgrounds API is a backend service built using **NestJS**. This application allows users to create and participate in public "playgrounds," which are invitations to play a match of a given sport at a specified time, date, and location. Each playground has limited slots, and players can join or leave a playground. The application uses **PostgreSQL** for user management and **MongoDB** for managing playgrounds, and it is fully containerized using **Docker**.

## Features
- **User Management:** Users can create an account and log in.
- **Playground Management:** Users can create and join playgrounds, with details like the number of players, location, sport type, date, and time.
- **Comments System:** Playgrounds have a comment section where players can leave reviews or feedback.

## Tech Stack
- **NestJS**: Backend framework for building the application.
- **PostgreSQL**: SQL database for storing user data.
- **MongoDB**: NoSQL database for storing playground data.
- **Docker**: Containerization tool used for running the application and its dependencies.
- **Swagger**: API documentation generated automatically.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Docker**: [Download Docker](https://www.docker.com/get-started)
- **Node.js** (version 18.x or later): [Download Node.js](https://nodejs.org/)
- **npm**: This is included with Node.js.

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/playgrounds-api.git
cd playgrounds-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application with Docker Compose
To start the application and all its services (PostgreSQL, MongoDB, and the NestJS API), run:
```bash
docker-compose up --build
```

### 4. Running in Development Mode
```bash
npm run start:dev
```

### 5. API Documentation
Swagger documentation for the API is available at:
```bash
http://localhost:3000/api
```
