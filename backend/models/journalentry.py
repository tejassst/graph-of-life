from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from typing import List

class JournalEntry:
    __tablename__ = "journal_entries"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False) # raw_input

    # LLM scoring
    score = Column(Integer, nullable=False)
    confidence = Column(Integer, nullable=True)
    summary = Column(String(255), nullable=True)

    # metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # relationships
    user = relationship("User", back_populates="journal_entries")