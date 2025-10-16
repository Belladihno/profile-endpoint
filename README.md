# Profile Endpoint API

A simple RESTful API that returns profile information along with dynamic cat facts from an external API.

# Features

- Profile endpoint with user information
- Dynamic cat facts integration
- Error handling with graceful fallbacks
- Rate limiting
- Health check endpoint
- CORS enabled
- Security headers with Helmet

# Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **HTTP Client:** Axios

# Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

# Dependencies

# Production Dependencies
- `express` (^5.1.0) - Web framework
- `axios` (^1.12.2) - HTTP client for API calls
- `cors` (^2.8.5) - Enable CORS
- `dotenv` (^17.2.3) - Environment variable management
- `express-rate-limit` (^8.1.0) - Rate limiting middleware
- `helmet` (^8.1.0) - Security headers

# Development Dependencies
- `typescript` (^5.9.3) - TypeScript compiler
- `ts-node-dev` (^2.0.0) - Development server with hot reload
- `tsconfig-paths` (^4.2.0) - Path mapping support
- `@types/cors` (^2.8.19) - TypeScript types for CORS
- `@types/express` (^5.0.3) - TypeScript types for Express
- `@types/node` (^24.7.2) - TypeScript types for Node.js

# Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Belladihno/profile-endpoint.git
   cd profile-endpoint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Then edit the `.env` file with your information:
   ```env
   PORT=5500
   NODE_ENV=development
   EMAIL=your.email@example.com
   NAME=Your Full Name
   CAT_FACT_API=https://catfact.ninja/fact
   ```

# Running Locally

# Development Mode (with hot reload)
```bash
npm run dev
```

The server will start on `http://localhost:5500`

# Production Mode
```bash
# Build TypeScript to JavaScript
npm run build

# Start the server
npm start
```

# API Endpoints

# Get Profile
**Endpoint:** `GET /me`

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express/TypeScript"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

**Status Codes:**
- `200` - Success
- `500` - Server error

# Health Check
**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-16T12:34:56.789Z"
}
```

# Rate Limiting

The API implements rate limiting:
- **Window:** 60 seconds (1 minute)
- **Max Requests:** 50 requests per window per IP
- **Response when exceeded:**
  ```json
  {
    "error": "You have sent too many requests. Please try again later"
  }
  ```

# Error Handling

# Cat Facts API Failure
If the external Cat Facts API fails or times out, the endpoint returns a fallback message:
```json
{
  "fact": "Could not fetch cat fact at this time. Please try again later."
}
```

The `/me` endpoint will still return a `200` status code with the fallback message.

# 404 Not Found
For undefined routes:
```json
{
  "status": "error",
  "message": "Can't find /unknown-route on this server!"
}
```

# Project Structure

```
profile-endpoint/
├── src/
│   ├── config/
│   │   └── app.config.ts      # Configuration management
│   ├── controllers/
│   │   └── me.ts              # Profile controller
│   ├── routes/
│   │   └── me.ts              # Route definitions
│   ├── services/
│   │   └── cat.service.ts     # Cat Facts API service
│   └── server.ts              # Main application entry
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── nodemon.json               # Nodemon configuration
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

# Testing the API

# Using cURL
```bash
# Get profile
curl http://localhost:5500/me

# Health check
curl http://localhost:5500/health
```

# Using a Browser
Simply navigate to:
- Profile: http://localhost:5500/me
- Health: http://localhost:5500/health

# Using Postman or Thunder Client
1. Create a new GET request
2. Set URL to `http://localhost:5500/me`
3. Send the request

# Development Notes

- The server uses `nodemon` for automatic restarts during development
- TypeScript path aliases are configured (`@/` maps to `src/`)
- All timestamps are in UTC ISO 8601 format
- CORS is enabled for all origins
- Helmet adds security headers automatically

# Troubleshooting

# Missing environment variables
If you see "ERROR: EMAIL and NAME environment variables are missing":
- Ensure your `.env` file exists
- Check that EMAIL and NAME are set in `.env`

### TypeScript errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## License

ISC

## Author

Abimbola Omisakin - abimbolaomisakin678@gmail.com