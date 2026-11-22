from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    description = Column(Text, nullable=True)
    color = Column(String(20), default="#4F46E5")
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="subjects")
    documents = relationship(
        "Document",
        back_populates="subject",
        cascade="all, delete-orphan",
    )
    quizzes = relationship(
        "Quiz",
        back_populates="subject",
        cascade="all, delete-orphan",
    )
    flashcards = relationship(
        "Flashcard",
        back_populates="subject",
        cascade="all, delete-orphan",
    )
