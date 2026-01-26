// src/response.js

// Helper functions to create consistent API responses
// Success response should have status: "ok" and any other data
module.exports.createSuccessResponse = function (data) {
  return {
    status: 'ok',
    ...data, // spread the data into the response
  };
};

// Error response should have status: "error" and error object with code and message
module.exports.createErrorResponse = function (code, message) {
  return {
    status: 'error',
    error: {
      code,
      message,
    },
  };
};
