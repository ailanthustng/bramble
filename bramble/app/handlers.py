import secrets

from pydantic import UUID4
from fastapi import APIRouter

import app.db as db


router = APIRouter()

@router.get("/")
async def list_keys(user: UUID4):
    # TODO read user uuid from the token instead of from a query parameter
    return db.list_by_user(user)


@router.post("/")
async def create(user: UUID4, app: str):
    # TODO read user uuid from the token instead of from a query parameter
    # TODO Validate that the app is among the valid apps
    # TODO check for exception during create

    api_key = secrets.token_urlsafe(16)
    return db.create(user, api_key, app)


@router.delete("/")
async def revoke(user: UUID4, api_key: str):
    # TODO read user uuid from the token instead of from a query parameter

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
