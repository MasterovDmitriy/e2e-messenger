from uuid import UUID

from app.models.user import User
from app.services.auth_service import auth_service


class UserService:
    def search_users(self, *, query: str, limit: int, exclude_user_id: UUID) -> list[User]:
        normalized_query = query.strip().lower()
        if not normalized_query:
            return []

        matched_users: list[User] = []
        for user in auth_service.users.values():
            if user.id == exclude_user_id:
                continue
            if normalized_query not in user.username.lower():
                continue
            matched_users.append(user)
            if len(matched_users) >= limit:
                break
        return matched_users


user_service = UserService()
