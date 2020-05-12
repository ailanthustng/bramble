from fastapi import FastAPI, Header

from app.handlers.keys import router as keys_router

app = FastAPI()

api = FastAPI(openapi_prefix="/api")


async def get_token_header(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


api.include_router(
    keys_router,
    prefix="/keys",
    tags=["keys"],
    # dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)

app.mount("/api", api)
