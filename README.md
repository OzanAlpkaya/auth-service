# Auth Service

Authentication microservice for an e-commerce platform. Built with NestJS, PostgreSQL, and JWT.

## Live Demo
[Swagger UI](https://auth-service-production-ad40.up.railway.app/api/docs)

## Features
- User registration and login
- JWT access token (15 min) + refresh token (7 days)
- Role-based access control (admin / customer)
- Protected endpoints with JWT Guard
- Input validation with class-validator
- Swagger documentation

## Tech Stack
- **Framework:** NestJS
- **Database:** PostgreSQL 18
- **ORM:** TypeORM
- **Auth:** Passport.js + JWT
- **Deploy:** Railway

## Endpoints
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /auth/register | No | Register new user |
| POST | /auth/login | No | Login, returns tokens |
| POST | /auth/refresh | No | Refresh access token |
| GET | /users/me | Yes | Get current user profile |

## Getting Started

### Prerequisites
- Node.js 24+
- Docker

### Installation
```bash
git clone git@github.com:OzanAlpkaya/auth-service.git
cd auth-service
npm install
```

### Environment Variables

Create a `.env` file in the root directory:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=auth_service
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d
```

### Run with Docker
```bash
docker compose up -d
npm run start:dev
```

### API Documentation

Once running, visit [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
