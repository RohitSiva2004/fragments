// src/routes/api/get.js

function getFragments(req, res) {
  res.status(200).json({
    status: 'ok',
    fragments: [],
  });
}

module.exports = getFragments;
