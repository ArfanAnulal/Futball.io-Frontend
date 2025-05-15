# futball.io Frontend

**futball.io** is a football data viewer app that allows users to explore match details and standings from popular European leagues. It uses the [API-Football](https://www.api-football.com/) service to fetch data for seasons between 2021 and 2024 (as supported by the free tier).

The backend for this project handles API requests and is available separately. This is the frontend built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).

## 📚 Table of Contents

- [🚀 Features](#features)
- [📦 Tech Stack](#tech-stack)
- [🔧 Setup & Development](#setup--development)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Configure environment variables](#3-configure-environment-variables)
  - [4. Run the development server](#4-run-the-development-server)
  - [5. Build for Production](#5-build-for-production)
  - [6. Deployment](#6-deployment)
- [📄 License](#license)

## Features

- View football match data and league standings from 2021–2024
- Choose between Premier League, La Liga, and Serie A
- Search by season using the top search bar
- Clean, responsive UI
- Environment-based configuration

## Tech Stack

- **React** (with Vite)
- **Axios** for HTTP requests
- **React Router** for client-side routing
- **API-Football** for match data (via backend)

## Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/futball.io-frontend.git
cd futball.io-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file 
in the root of the project and add:
```bash
VITE_API_BASE_URL=http://localhost:5000
```

- During development, use your local backend URL.

- In production, set `VITE_API_BASE_URL` to your deployed backend's URL.

### 4. Run the development server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```
This will create an optimized production build in the dist/ folder.

### 6. Deployment
You can deploy the production build to any static site hosting service (like Vercel, Netlify, or your custom server). Just ensure the `VITE_API_BASE_URL` 
is set to the correct backend endpoint in your deployed environment.

## License
This project is open-source and available under the MIT License.
