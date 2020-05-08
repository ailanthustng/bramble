from fastapi import FastAPI, Header

from app.handlers import router

app = FastAPI()


async def get_token_header(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


app.include_router(
    router,
    prefix="/api/keys",
    tags=["keys"],
    # dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)
