from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    BigInteger,
    DateTime,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    file_name = Column(String(255), nullable=False)
    file_path = Column(String(500), nullable=False)
    file_type = Column(String(50), nullable=True)
    file_size = Column(BigInteger, nullable=True)
    extracted_text = Column(Text, nullable=True)

    subject_id = Column(
        Integer,
        ForeignKey("subjects.id"),
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    subject = relationship("Subject", back_populates="documents")
