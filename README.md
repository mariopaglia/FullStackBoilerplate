# Basic Infrastructure Project with Next.js, Node.js, and TypeORM

This project is a foundational infrastructure built with Next.js in the frontend and a combination of Node.js and TypeORM in the backend. It offers a solid starting point for modern web applications with a clean and efficient architecture.

## Project Structure

- **Frontend**: Next.js-based application in the `frontend` folder.
- **Backend**: Node.js application using TypeORM in the `backend` folder.

### Frontend (Next.js)

The frontend includes reusable components, global style configurations, and a default theme setup.

### Backend (Node.js and TypeORM)

The backend provides a robust and scalable API, with controllers, entities, middlewares, and more.

## Setup and Usage

### Local Development

1. **Clone the Repository**: Clone the project to your local machine.

2. **Install Dependencies**:

   - Run `installProject.sh` for a first-time setup.
   - Or navigate to each of `frontend` and `backend` folders and run `yarn install`.

3. **Configure Environment**:

   - Create a `.env` file in the `backend` folder based on the `.env.example` template.
   - Adjust database settings (`DB_TYPE`, `DB_HOST`, etc.) according to your local database setup.

4. **Start the Application**:
   - In the `frontend` folder, run `yarn dev` to start the frontend.
   - In the `backend` folder, run `yarn dev` to start the backend.

### Using Docker

1. **Configure Environment for Docker**:

   - Ensure `DB_HOST` in your `.env` file is set to the service name of the database in `docker-compose.yml` (usually `db`).
   - Set other environment variables as required.

2. **Start with Docker Compose**:
   - Run `docker-compose up` in the root directory to start both frontend and backend in containers.

## Contributions

Contributions are welcome! Feel free to fork the project, make changes, and open a pull request.

---

### Additional Notes:

- Make sure to include any specific instructions related to your `installProject.sh` script, if necessary.
- If there are additional steps or prerequisites for setting up the database or any other services, include those details.
- Customize the contribution guidelines as per your project's needs.
