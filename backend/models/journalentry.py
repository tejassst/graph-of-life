from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from typing import List

class JournalEntry:
    __tablename__ = "journal_entries"
    id = Column(Integer, primary_key=True, index=True)

user_id = Column(Integer, ForeignKey("users.id"), nullable=False)