FROM python
ENV PYTHONBUFFERED 1
RUN mkdir /src
WORKDIR /src
RUN pip install Django
RUN pip install psycopg2
ADD . /src
