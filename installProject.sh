#!/bin/bash

# Check and install dependencies in the root directory
echo "Checking dependencies in the root directory..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies in the root..."
    yarn
else
    echo "Dependencies in the root are already installed."
fi

# Check and install dependencies in the frontend directory
echo "Checking dependencies in the frontend directory..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies in the frontend..."
    yarn
else
    echo "Dependencies in the frontend are already installed."
fi
cd ..

# Check and install dependencies in the backend directory
echo "Checking dependencies in the backend directory..."
cd backend
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies in the backend..."
    yarn
else
    echo "Dependencies in the backend are already installed."
fi
cd ..

echo "Project setup completed successfully!"