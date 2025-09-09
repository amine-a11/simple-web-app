# Use official Node.js runtime as base image
FROM node:16

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (the one our app uses)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
