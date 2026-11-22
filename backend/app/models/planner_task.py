
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.db.database import Base


class PlannerTask(Base):
    __tablename__ = "planner_tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    due_date = Column(DateTime(timezone=True), nullable=True)
    is_completed = Column(Boolean, default=False, nullable=False)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
