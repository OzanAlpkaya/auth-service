# Auth Service

## Live
https://auth-service-production-ad40.up.railway.app/api/docs

## Stack
- **Runtime:** Node.js 24 (nvm)
- **Framework:** NestJS
- **Database:** PostgreSQL 18 (Docker - local), Railway PostgreSQL (production)
- **ORM:** TypeORM
- **Auth:** JWT (access token 15m, refresh token 7d)
- **Deploy:** Railway

## Purpose
Authentication microservice for an e-commerce platform. Handles user registration, login, and token management. Will be extended with order-service, storefront, and admin dashboard.

## Completed
- [x] NestJS project initialized
- [x] PostgreSQL 18 Docker container configured
- [x] TypeORM connection established
- [x] ConfigModule with .env management
- [x] User entity created (id, email, password, role, createdAt, updatedAt)
- [x] Users table auto-generated in database
- [x] UsersModule configured
- [x] UsersService (findByEmail, createUser)
- [x] AuthModule configured
- [x] Register endpoint (POST /auth/register)
- [x] Login endpoint (POST /auth/login)
- [x] Refresh token endpoint (POST /auth/refresh)
- [x] JWT access token (15m)
- [x] JWT refresh token (7d)
- [x] JwtStrategy
- [x] JwtAuthGuard
- [x] Protected endpoint example (GET /users/me)
- [x] Swagger documentation (/api/docs)
- [x] Dockerfile
- [x] Railway deploy

## Endpoints
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /auth/register | No | Register new user |
| POST | /auth/login | No | Login, returns tokens |
| POST | /auth/refresh | No | Refresh access token |
| GET | /users/me | Yes | Get current user |

## Project Structure
