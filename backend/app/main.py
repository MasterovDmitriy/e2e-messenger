from fastapi import FastAPI

from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as users_router

app = FastAPI(title="E2E Messenger API", version="0.1.0")
app.include_router(auth_router)
app.include_router(users_router)


@app.get("/api/v1/health")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}
