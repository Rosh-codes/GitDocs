# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the site
COPY . .

# Build the site
RUN npm run build

# Serve the static site
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
