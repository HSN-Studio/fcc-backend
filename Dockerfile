# Use the official Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies first (better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all remaining project files
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose the default Strapi port
EXPOSE 1337

# Start Strapi in development mode
CMD ["npm", "run", "develop"]
