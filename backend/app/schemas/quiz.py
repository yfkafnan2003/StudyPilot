from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field


class QuizCreate(BaseModel):
    title: str
    subject_id: int


class QuizResponse(BaseModel):
    id: int
    title: str
    total_questions: int
    subject_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class QuizSubmit(BaseModel):
    answers: dict[int, str]
