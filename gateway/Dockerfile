FROM kong:3-alpine

# คัดลอกคอนฟิกเข้าไปใน Container
COPY kong.yml /usr/local/kong/declarative/kong.yml

# ตั้งค่าให้ทำงานแบบ DB-less
ENV KONG_DATABASE=off
ENV KONG_DECLARATIVE_CONFIG=/usr/local/kong/declarative/kong.yml
ENV KONG_PROXY_LISTEN=0.0.0.0:8000
ENV KONG_LOG_LEVEL=notice

EXPOSE 8000