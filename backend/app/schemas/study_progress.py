from datetime import date, datetime
from pydantic import BaseModel, ConfigDict, Field


class StudyProgressCreate(BaseModel):
    study_date: date
    study_minutes: int = Field(default=0, ge=0)
    quizzes_completed: int = Field(default=0, ge=0)
    flashcards_reviewed: int = Field(default=0, ge=0)


class StudyProgressResponse(BaseModel):
    id: int
    study_date: date
    study_minutes: int
    quizzes_completed: int
    flashcards_reviewed: int
    user_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
