const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON
app.use(express.json());

// Serve static files (like your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const ideaRoutes = require('./routes/ideas');
app.use('/api/ideas', ideaRoutes);

// Start server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
