# E2E Messenger

Web messenger for private 1-to-1 chats with end-to-end encryption where server stores only encrypted payloads.

## Local quick start

### 1) Run all services

```bash
docker compose -f infra/docker-compose.yml up --build
```

### 2) Open services

- Frontend: http://localhost:5173
- Backend healthcheck: http://localhost:8000/api/v1/health

## Current project scope

- Backend bootstrap with FastAPI entrypoint.
- Frontend bootstrap with React + TypeScript + Vite entrypoint.
- Local infrastructure with PostgreSQL, backend and frontend in Docker Compose.
