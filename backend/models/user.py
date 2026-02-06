from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from typing import List

class User:
    __tablename__ = "users"
    # columns
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)

    # metadata
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # relationships
    entries = relationship("Entry", back_populates="user")