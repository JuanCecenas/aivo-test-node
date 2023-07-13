const axios = require('axios');
require('dotenv').config();

const searchVideos = async (searchQuery) => {
  const API_KEY = process.env.API_KEY;

  try {
    const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: searchQuery,
        maxResults: 10,
        key: API_KEY,
      },
    });

    const results = searchResponse.data.items;

    const videoIds = results.map((item) => item.id.videoId).join(',');

    if (videoIds.length === 0) {
      return [];
    }

    const videosResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,statistics',
        id: videoIds,
        key: API_KEY,
      },
    });

    const videos = videosResponse.data.items;

    return videos;
  } catch (error) {
    throw new Error('Search failed');
  }
};


module.exports = {
  searchVideos
}