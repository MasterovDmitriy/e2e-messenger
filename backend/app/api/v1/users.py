from fastapi import APIRouter, Depends, Query

from app.core.security import get_current_user
from app.models.user import User
from app.schemas.user import UserSearchResponse
from app.services.user_service import user_service

router = APIRouter(prefix="/api/v1/users", tags=["users"])


@router.get("/search", response_model=list[UserSearchResponse])
async def search_users(
    query: str = Query(min_length=1, max_length=64),
    limit: int = Query(default=20, ge=1, le=50),
    current_user: User = Depends(get_current_user),
) -> list[UserSearchResponse]:
    users = user_service.search_users(query=query, limit=limit, exclude_user_id=current_user.id)
    return [UserSearchResponse.model_validate(user) for user in users]
