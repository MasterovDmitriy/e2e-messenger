from dataclasses import dataclass
from datetime import datetime, timezone
from uuid import UUID, uuid4


@dataclass(slots=True)
class User:
    id: UUID
    username: str
    password_hash: str
    created_at: datetime

    @classmethod
    def create(cls, username: str, password_hash: str) -> "User":
        return cls(
            id=uuid4(),
            username=username,
            password_hash=password_hash,
            created_at=datetime.now(timezone.utc),
        )
