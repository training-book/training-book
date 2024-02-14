# Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8100

# Start Ionic server
CMD ["ionic", "serve", "--host", "0.0.0.0"]
