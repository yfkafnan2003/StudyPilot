
from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Flashcard(Base):
    __tablename__ = "flashcards"

    id = Column(Integer, primary_key=True, index=True)
    front = Column(Text, nullable=False)
    back = Column(Text, nullable=False)

    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    subject = relationship("Subject", back_populates="flashcards")
