const express = require('express');
const app = express();

// Use process.env.PORT or default to 3000
const port = process.env.PORT || 3000;

// Middleware to ensure it binds to 0.0.0.0
app.set('trust proxy', true);

// Define the root endpoint handler
app.get('/', (req, res) => {
  res.json({ ok: true });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
