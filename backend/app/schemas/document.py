from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class DocumentCreate(BaseModel):
    title: str
    file_name: str
    file_path: str
    file_type: Optional[str] = None
    file_size: Optional[int] = None
    subject_id: int


class DocumentResponse(BaseModel):
    id: int
    title: str
    file_name: str
    file_path: str
    file_type: Optional[str]
    file_size: Optional[int]
    subject_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
