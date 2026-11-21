from fastapi import FastAPI

app = FastAPI(
    title="StudyPilot API",
    description="Backend API for the StudyPilot AI learning application.",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Welcome to StudyPilot API",
        "status": "running",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "StudyPilot API",
    }
