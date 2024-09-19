const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const ideaRoutes = require('./routes/ideas');
app.use('/api/ideas', ideaRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
