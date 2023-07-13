const youtubeService = require('../services/youtubeService');

const searchYouTube = async (req, res) => {
  const searchQuery = req.query.search;

  try {
    const results = await youtubeService.searchVideos(searchQuery);

    if (results.length === 0) {
      return res.status(404).json({ message: 'No videos found for the given search query' });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error('Search failed: ', error);
    res.status(500).json({ error: 'Error connecting to YouTube API' });
  }
};

module.exports = {
  searchYouTube,
};