// src/routes/index.js

const express = require('express');

// version and author from package.json
const { version, author } = require('../../package.json');

// Our authentication middleware
const { authenticate } = require('../auth');

// Response helpers
const { createSuccessResponse } = require('../response');

// Create a router that we can use to mount our API
const router = express.Router();

router.use(`/v1`, authenticate(), require('./api'));

router.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json(
    createSuccessResponse({
      description: 'fragments service running normally',
      author,
      githubUrl: 'https://github.com/RohitSiva2004/fragments',
      version,
      timestamp: new Date().toISOString(),
    })
  );
});

module.exports = router;
