# aisro

This is a full-stack application with a React frontend and an Express backend, built with TypeScript.

## Project Structure

- `client/`: Contains the React frontend application.
  - `src/`: Source files for the frontend.
  - `index.html`: Entry point for the Vite build.
- `server/`: Contains the Express backend application.
  - `index.ts`: Main server file.
- `shared/`: Intended for code shared between frontend and backend (currently empty).
- `dist/`: Contains the built assets.
  - `public/`: Frontend assets built by Vite.
  - `index.js`: Backend server script built by esbuild.

## Prerequisites

- Node.js (version specified in `.nvmrc` if available, otherwise latest LTS recommended)
- npm (comes with Node.js)

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

### `npm run dev`

Runs the backend development server (using `tsx` for on-the-fly TypeScript execution) and typically you would run your frontend dev server separately if needed (though this project's `dev` script only starts the backend). The server will be available at `http://localhost:3000`.

### `npm run build`

Builds both the frontend (using Vite) and backend (using esbuild) for production.
- Frontend assets are output to `dist/public/`.
- Backend server script is output to `dist/index.js`.

### `npm run start`

Starts the production server using the built assets from `dist/`.
Before running this, ensure you have built the project using `npm run build`.

### `npm run check`

Runs the TypeScript compiler (`tsc`) to perform type checking on the entire codebase (`client`, `server`, `shared`).

### `npm run db:push`

Pushes database schema changes using Drizzle Kit. This likely requires database connection environment variables to be set up.

## Running the Application

1.  **Development:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000` (or the configured port).
    *Note: The current `server/index.ts` only serves a basic "Hello from Express server!" message. The Vite dev server for the client part is not automatically started by this script. You would typically run `vite` or `npm run dev` from the `client` directory if you wanted a separate client dev server with HMR.*

2.  **Production:**
    ```bash
    npm run build
    npm run start
    ```
    The application will be served from `http://localhost:3000` (or the port configured for production). The production server should be set up to serve static files from `dist/public` and handle API routes. The current minimal server does not serve static files from `dist/public` yet.

## Further Development

-   **Frontend:** The frontend is in `client/`. To run a dedicated Vite dev server with Hot Module Replacement (HMR):
    ```bash
    cd client
    npm run dev # Assuming a "dev": "vite" script is added to client/package.json
    ```
    Or, modify the root `vite.config.ts` and `npm run dev` script to serve the client in dev mode.
-   **Backend:** The backend is in `server/`.
-   **Database:** Configure your database connection details (likely via environment variables) for Drizzle ORM and run `npm run db:push` to sync your schema.