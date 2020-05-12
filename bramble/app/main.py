import jwt
from fastapi import FastAPI, Header, Request

from app.handlers.keys import router as keys_router


app = FastAPI()

api = FastAPI(openapi_prefix="/api")


# TODO remove in production
from fastapi import Depends
from app.utils import get_user_uuid
@api.get("/debug")
async def debug(request: Request, user: str = Depends(get_user_uuid)):

    from pprint import pprint
    pprint(jwt.decode(request.headers["X-Auth-Token"], verify=False))
    print(user)

    return dict(debug=True)


api.include_router(
    keys_router,
    prefix="/keys",
    tags=["keys"],
    responses={404: {"description": "Not found"}},
)


app.mount("/api", api)


@app.middleware("http")
async def add_user_name_header(
        request: Request,
        call_next,
):
    """Extract user's name from token, return to frontend as a header "X-User-Name"
    """
    response = await call_next(request)

    x_auth_token = request.headers["X-Auth-Token"]
    token = jwt.decode(x_auth_token, verify=False)
    response.headers["X-User-Name"] = token["name"]

    return response
