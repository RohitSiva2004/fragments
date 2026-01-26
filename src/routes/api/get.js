// src/routes/api/get.js

const { createSuccessResponse } = require('../../response');

function getFragments(req, res) {
  res.status(200).json(
    createSuccessResponse({
      fragments: [],
    })
  );
}

module.exports = getFragments;
