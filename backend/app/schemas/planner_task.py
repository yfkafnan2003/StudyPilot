from datetime import datetime
from pydantic import BaseModel, ConfigDict


class PlannerTaskCreate(BaseModel):
    title: str
    description: str | None = None
    due_date: datetime | None = None


class PlannerTaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    due_date: datetime | None = None
    is_completed: bool | None = None


class PlannerTaskResponse(BaseModel):
    id: int
    title: str
    description: str | None
    due_date: datetime | None
    is_completed: bool
    user_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
