FROM node:24-alpine

ARG GROUP_ID
ARG USER_ID
RUN addgroup -g ${GROUP_ID} appuser && \
    adduser -D -u ${USER_ID} -G appuser appuser
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server .
RUN chown -R appuser:appuser /app/server
USER appuser

EXPOSE 3000

CMD ["npm", "run", "dev"]
