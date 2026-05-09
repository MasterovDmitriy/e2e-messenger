from fastapi import FastAPI


app = FastAPI(title="E2E Messenger API", version="0.1.0")


@app.get("/api/v1/health")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}
