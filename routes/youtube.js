const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;


router.get('/api/youtube', async (req, res) => {
  //Logic needed to handle YouTube search GET request
  const searchQuery = req.query.search;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchQuery,
        maxResults: 10,
        key: apiKey
      }
    });
    
    const results = response.data.items;
    res.status(200).json(results);
  } catch (error) {
    console.error('Search failed: ', error);
    res.status(500).json({ error: 'Search failed' });
  }
});