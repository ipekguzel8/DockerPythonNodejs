FROM python:3.9 as first

COPY requirements.txt .

RUN pip install --user -r requirements.txt

FROM python:3.9-slim

WORKDIR /app

COPY --from=first /root/.local /root/.local

COPY ./source/ .

ENV PATH=/root/.local:$PATH

EXPOSE 80

CMD python ./app.py