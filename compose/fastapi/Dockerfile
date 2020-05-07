FROM tiangolo/uvicorn-gunicorn:python3.7-alpine3.8

COPY ./compose/fastapi/requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt