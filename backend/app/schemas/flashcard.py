from datetime import datetime

from pydantic import BaseModel, ConfigDict


class FlashcardCreate(BaseModel):
    front: str
    back: str
    subject_id: int


class FlashcardResponse(BaseModel):
    id: int
    front: str
    back: str
    subject_id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
