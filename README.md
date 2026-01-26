# Fragments Back-End API

This is the back-end microservice for the **Fragments** project.
It is built using **Node.js**, **Express**, and **Pino** for structured logging.

---

## Requirements


- Node.js (LTS)
- npm
- Git
- VS Code
- curl (or curl.exe on Windows)
- jq (optional, for pretty-printing JSON)
- WSL2 (for Windows users)

=======

* Node.js (LTS)
* npm
* Git
* VS Code
* curl (or curl.exe on Windows)
* jq (optional, for pretty-printing JSON)
* WSL2 (for Windows users)


=======


---

## Installation

1. Clone your repository:

```bash
git clone git@github.com:RohitSiva2004/fragments.git
cd fragments
```

2. Install dependencies:

```bash
npm install
```

3. Install development dependencies:

```bash
npm install --save-dev --save-exact prettier
npm init @eslint/config@latest
```

---

## Project Structure

```
fragments/
├─ .vscode/
│  ├─ launch.json
│  └─ settings.json
├─ src/
│  ├─ app.js
│  ├─ server.js
│  ├─ logger.js
│  ├─ auth.js
│  ├─ index.js
│  └─ routes/
│     ├─ index.js
│     └─ api/
│        ├─ index.js
│        └─ get.js
├─ package.json
├─ package-lock.json
├─ .prettierrc
├─ .prettierignore
└─ .env
```


- `src/app.js` — Express app and routes
- `src/server.js` — Server startup and graceful shutdown
- `src/logger.js` — Pino logger configuration
- `.vscode/` — VS Code debugging settings
- `.env.debug` — Development environment variables
=======
* `src/app.js` — Express app and routes
=======
* `src/app.js` — Express app and middleware configuration

* `src/server.js` — Server startup and graceful shutdown
* `src/logger.js` — Pino logger configuration
* `src/auth.js` — JWT authentication with AWS Cognito
* `src/index.js` — Application entry point
* `src/routes/` — API route handlers
* `.vscode/` — VS Code debugging settings

* `.env.debug` — Development environment variables

=======
* `.env` — Environment variables (not committed to git)


---

## Scripts


- **start**: `npm start` — Start server normally on port 8080
- **dev**: `npm run dev` — Start server in watch mode with debug logging
- **debug**: `npm run debug` — Start server in watch mode with Node debugger (VS Code)
- **lint**: `npm run lint` — Run ESLint to check for linting errors
- **test**: `npm test` — Default test script (no tests yet)
=======
=======

* **start**: `npm start` — Start server normally on port 8080
* **dev**: `npm run dev` — Start server in watch mode with debug logging
* **debug**: `npm run debug` — Start server in watch mode with Node debugger (VS Code)
* **lint**: `npm run lint` — Run ESLint to check for linting errors
* **test**: `npm test` — Default test script (no tests yet)

---

## Running the Server

### Normal Start

```bash
npm start
```

Access in browser: [http://localhost:8080](http://localhost:8080)

### Development Mode (watch + debug logs)

```bash
npm run dev
```

### Debug Mode (VS Code)

```bash
npm run debug
```


- Open VS Code → Debug panel → select **"Debug via npm run debug"**
- Set breakpoints in `src/app.js`
- Access server via browser or curl to trigger breakpoints
=======
=======

* Open VS Code → Debug panel → select **"Debug via npm run debug"**
* Set breakpoints in `src/app.js`
* Access server via browser or curl to trigger breakpoints

---

## Environment Variables

Create a `.env` file in the root directory:

- Auto-formats code on save (configured in `.vscode/settings.json`)
=======
* Auto-formats code on save (configured in `.vscode/settings.json`)

### ESLint

Run:

```bash
npm run lint
=======
```env
PORT=8080
FRAGMENTS_LOG_LEVEL=debug
AWS_COGNITO_POOL_ID=us-east-2_xxxxxxxxx
AWS_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx

```

---

## API Routes

### Health Check


- **URL:** `/`
- **Method:** `GET`
=======
=======

* **URL:** `/`
* **Method:** `GET`

**Response:**

```json
{
  "status": "ok",
  "description": "fragments service running normally",
  "author": "Rohit Sivakumar",
  "githubUrl": "https://github.com/RohitSiva2004/fragments",
  "version": "0.0.1",
  "timestamp": "2026-01-12TXX:XX:XX.XXXZ"
}
```


- Cache-Control: `no-cache`
- CORS enabled: `Access-Control-Allow-Origin: *`
=======
=======

* Cache-Control: `no-cache`
* CORS enabled: `Access-Control-Allow-Origin: *`

### Fragments API

* **URL:** `/v1/fragments`
* **Method:** `GET`
* **Authentication:** Required (Bearer token)

**Response:**

```json
{
  "status": "ok",
  "fragments": []
}
```

---

## Testing with curl

```bash
# Health check (public)
curl localhost:8080

# Fragments API (requires authentication)
curl localhost:8080/v1/fragments
```

---

## Linting & Formatting

### Prettier

* Auto-formats code on save (configured in `.vscode/settings.json`)

### ESLint

Run:

```bash
npm run lint
```

---

## Repository

[GitHub - RohitSiva2004/fragments](https://github.com/RohitSiva2004/fragments)

---

**Author:** Rohit Sivakumar  
**License:** UNLICENSED
