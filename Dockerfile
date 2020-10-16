FROM node:12

WORKDIR /app

COPY src/ ./
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm run build

EXPOSE 8000
CMD ["node", "dist/server.js"]
