# Fragments Back-End API

This is the back-end microservice for the **Fragments** project.  
It is built using **Node.js**, **Express**, and **Pino** for structured logging.  
This README explains how to set up, run, debug, and test the server.

---

## Requirements

- Node.js (LTS)
- npm
- Git
- VS Code
- curl (or curl.exe on Windows)
- jq (optional, for pretty-printing JSON)
- WSL2 (for Windows users)

---

## Installation

1. Clone your repository:
```bash
git clone git@github.com:RohitSiva2004/fragments.git
cd fragments

2. Install dependencies:

```bash
npm install
```

3. Install development dependencies:

npm install --save-dev --save-exact prettier
npm init @eslint/config@latest

Project Structure

fragments/
├─ .vscode/
│  ├─ launch.json
│  └─ settings.json
├─ src/
│  ├─ app.js
│  ├─ server.js
│  └─ logger.js
├─ package.json
├─ package-lock.json
├─ .prettierrc
├─ .prettierignore
└─ .env.debug

src/app.js — Express app and routes

src/server.js — Server startup and graceful shutdown

src/logger.js — Pino logger configuration

.vscode/ — VS Code debugging settings

.env.debug — Development environment variables

Scripts
Script	Command	Description
start	npm start	Start server normally on port 8080
dev	npm run dev	Start server in watch mode with debug logging
debug	npm run debug	Start server in watch mode with Node debugger (VS Code)
lint	npm run lint	Run ESLint to check for linting errors
test	npm test	Default test script (no tests yet)

Running the Server
Normal Start
npm start


Access in browser: http://localhost:8080

Development Mode (watch + debug logs)
npm run dev

Debug Mode (VS Code)
npm run debug


Open VS Code → Debug panel → select "Debug via npm run debug"

Set breakpoints in src/app.js

Access server via browser or curl to trigger breakpoints

Linting & Formatting
Prettier

Auto-formats code on save (configured in .vscode/settings.json)

ESLint

Run:

npm run lint

Health Check Route

URL: /
Method: GET

Response:

{
  "status": "ok",
  "description": "fragments service running normally",
  "author": "Rohit Sivakumar",
  "githubUrl": "https://github.com/RohitSiva2004/fragments",
  "version": "0.0.1",
  "timestamp": "2026-01-12TXX:XX:XX.XXXZ"
}


Cache-Control: no-cache

CORS enabled: Access-Control-Allow-Origin: *

Testing with curl and jq
curl localhost:8080
curl -s localhost:8080 | jq

Debugging Steps

Set a breakpoint in src/app.js at:

res.status(200).json({


Start server in debug mode:

npm run debug


Open browser or run curl:

curl localhost:8080


VS Code will pause at the breakpoint. Inspect variables (req, res, author, etc.)

Press F5 to continue and let the JSON response return

⚠️ Note: While paused, the server will not send a response until you continue.

Author: Rohit Sivakumar
License: UNLICENSED
