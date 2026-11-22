from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class SubjectCreate(BaseModel):
    name: str
    description: Optional[str] = None
    color: Optional[str] = "#4F46E5"


class SubjectUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    color: Optional[str] = None


class SubjectResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    color: Optional[str]
    user_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
