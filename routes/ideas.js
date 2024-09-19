const express = require('express');
const router = express.Router();

// Sample route to generate a business idea
router.post('/generate', (req, res) => {
  const { industry, skills } = req.body;
  
  // Basic idea generation logic (just an example for now)
  const ideas = {
    tech: 'Start a web development agency',
    food: 'Open a cloud kitchen',
    retail: 'Launch an online fashion store'
  };
  
  const businessIdea = ideas[industry.toLowerCase()] || 'Explore more opportunities!';

  res.json({ idea: businessIdea });
});

module.exports = router;
