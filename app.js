const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');
const cors = require('cors');

app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 3300;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const ideaRoutes = require('./routes/ideas');
app.use('/api/ideas', ideaRoutes);

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

app.post('/api/ideas/generate', (req, res) => {
  const { industry } = req.body;

  res.json({ idea: `Here's a great idea for the ${industry} industry!` });
});


const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});