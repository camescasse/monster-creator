FROM node:20.15.1-alpine3.20
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json .
RUN npm install
RUN mkdir data
COPY . .
ENV BASE_URL="http://localhost:3000"
EXPOSE 3000
CMD ["npm", "start"]
