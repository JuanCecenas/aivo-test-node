const axios = require('axios');
require('dotenv').config();

//const URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=muse&key=['

const searchVideos = async (searchQuery) => {
  const API_KEY = process.env.API_KEY;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: searchQuery,
        maxResults: 10,
        key: API_KEY,
      },
    });

    const results = response.data.items;
    return results;
  } catch (error) {
    throw new Error('Search failed');
  }
};

module.exports = {
  searchVideos
}