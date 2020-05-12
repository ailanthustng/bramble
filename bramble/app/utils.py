import jwt
from fastapi import Header


async def get_user_uuid(x_auth_token: str = Header(...)):
    # No need to verify because we can trust traffic coming from gatekeeper
    token = jwt.decode(x_auth_token, verify=False)
    return token["sub"]
