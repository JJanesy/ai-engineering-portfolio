from fastapi import FastAPI

app = FastAPI(
    title="AI Engineering Portfolio API",
    description="Backend API powering my personal AI engineering portfolio.",
    version="0.1.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to my AI Engineering Portfolio API",
        "status": "online"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }