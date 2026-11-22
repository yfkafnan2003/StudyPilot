
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    total_questions = Column(Integer, default=0, nullable=False)

    subject_id = Column(
        Integer,
        ForeignKey("subjects.id"),
        nullable=False,
    )

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    subject = relationship("Subject", back_populates="quizzes")
    questions = relationship(
        "Question",
        back_populates="quiz",
        cascade="all, delete-orphan",
    )
