const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');


require('dotenv').config();


// Middleware to parse JSON
app.use(express.json());

// Serve static files (like your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const ideaRoutes = require('./routes/ideas');
app.use('/api/ideas', ideaRoutes);

// Route to generate a business idea based on the industry
app.post('/api/ideas/generate', (req, res) => {
  const { industry } = req.body;

  const query = 'SELECT idea FROM ideas WHERE industry = ?';
  connection.query(query, [industry.toLowerCase()], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching data' });
    }

    if (results.length === 0) {
      return res.json({ idea: 'No ideas available for this industry yet!' });
    }

    res.json({ idea: results[0].idea });
  });
});

// Placeholder route for generating business ideas
app.post('/api/ideas/generate', (req, res) => {
  const { industry } = req.body;

  // Logic to generate an idea based on industry (database will be added later)
  res.json({ idea: `Here's a great idea for the ${industry} industry!` });
});


// Start server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});