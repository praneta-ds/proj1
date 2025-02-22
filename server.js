// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve the front-end HTML file
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Azure!</h1><p>This is the backend API response.</p>');
});

// Define a simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Azure App Service!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
