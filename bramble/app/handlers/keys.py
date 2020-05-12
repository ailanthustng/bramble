import secrets

from pydantic import UUID4
from fastapi import APIRouter, Depends

import app.db as db
from app.utils import get_user_uuid


router = APIRouter()

@router.get("/")
async def list_keys(user: UUID4 = Depends(get_user_uuid)):
    return db.list_by_user(user)


@router.post("/")
async def create(app: str, user: UUID4 = Depends(get_user_uuid)):
    # TODO Validate that the app is among the valid apps
    # TODO check for exception during create

    api_key = secrets.token_urlsafe(16)
    return db.create(user, api_key, app)


@router.delete("/")
async def revoke(api_key: str, user: UUID4 = Depends(get_user_uuid)):
    # TODO validate api_key length
    # TODO validate owner actually owns this api_key
    # TODO check for exception during delete

    return db.delete(api_key)


@router.post("/expire")
async def expire():
    """Allow for some external system to trigger invalidation of expired keys
    Not publicly accessible (only calls from localhost will be accepted)
    """
    raise NotImplementedError()
