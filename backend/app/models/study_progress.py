
from sqlalchemy import Column, Integer, Date, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.db.database import Base


class StudyProgress(Base):
    __tablename__ = "study_progress"

    id = Column(Integer, primary_key=True, index=True)

    study_date = Column(Date, nullable=False)
    study_minutes = Column(Integer, default=0, nullable=False)
    quizzes_completed = Column(Integer, default=0, nullable=False)
    flashcards_reviewed = Column(Integer, default=0, nullable=False)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    created_at = Column(DateTime(timezone=True), server_default=func.now())
