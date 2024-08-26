# Stage 1:
FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm install
RUN npm install -g next

EXPOSE 3000

ENV NEXT_PUBLIC_JWT_SECRET="ouiouilesecret"
ENV NEXT_PUBLIC_API_URL="http://localhost:8082/api"

CMD ["npm", "run", "dev"]
