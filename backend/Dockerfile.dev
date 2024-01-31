# Use the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Expose the port your application will use
EXPOSE 3001

# Run migrations and then start the application in development mode
CMD yarn migration:run && yarn dev
