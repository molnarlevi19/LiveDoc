FROM node:24-alpine

ARG GROUP_ID
ARG USER_ID
RUN addgroup -g ${GROUP_ID} appuser && \
    adduser -D -u ${USER_ID} -G appuser appuser
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN chown -R appuser:appuser /app/client
USER appuser

EXPOSE 5173

CMD ["npm", "run", "dev"]
