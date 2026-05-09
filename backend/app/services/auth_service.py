from collections.abc import Mapping

import bcrypt
from fastapi import HTTPException, status

from app.core.security import create_access_token
from app.models.user import User


class AuthService:
    def __init__(self) -> None:
        self._users_by_username: dict[str, User] = {}

    def register_user(self, username: str, password: str) -> User:
        normalized_username = username.strip()
        if normalized_username in self._users_by_username:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Username already taken",
            )

        password_hash = self._hash_password(password)
        user = User.create(username=normalized_username, password_hash=password_hash)
        self._users_by_username[user.username] = user
        return user

    def authenticate_user(self, username: str, password: str) -> User:
        normalized_username = username.strip()
        user = self._users_by_username.get(normalized_username)
        if user is None or not self._verify_password(password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials",
            )
        return user

    def issue_access_token(self, user: User) -> str:
        return create_access_token(subject=user.username)

    def get_user_by_username(self, username: str) -> User | None:
        return self._users_by_username.get(username)

    @staticmethod
    def _hash_password(password: str) -> str:
        return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

    @staticmethod
    def _verify_password(password: str, encoded_hash: str) -> bool:
        try:
            return bcrypt.checkpw(password.encode("utf-8"), encoded_hash.encode("utf-8"))
        except ValueError:
            return False

    @property
    def users(self) -> Mapping[str, User]:
        return self._users_by_username


auth_service = AuthService()
