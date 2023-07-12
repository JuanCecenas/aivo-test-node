const youtubeService = require('../services/youtubeService');

const searchYouTube = async (req, res) => {
  const searchQuery = req.query.search;

  try {
    const results = await youtubeService.searchVideos(searchQuery);
    res.status(200).json(results);
  } catch (error) {
    console.error('Search failed: ', error);
    res.status(500).json({ error: 'Search failed' });
  }
};

module.exports = {
  searchYouTube,
}
