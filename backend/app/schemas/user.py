from uuid import UUID

from pydantic import BaseModel, ConfigDict


class UserSearchResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    username: str
    public_key_fingerprint: str | None = None
