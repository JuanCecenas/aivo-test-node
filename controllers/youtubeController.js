const youtubeService = require('../services/youtubeService');

const formatResult = (result) => {
  const { id, snippet } = result;
  
  return {
    published_at: snippet.publishedAt,
    id: id.videoId,
    title: snippet.title,
    description: snippet.description,
    thumbnail: snippet.thumbnails.default.url,
    extra: {
      something: "extra"
    }
  };
};

const searchYouTube = async (req, res) => {
  const searchQuery = req.query.search;

  try {
    const results = await youtubeService.searchVideos(searchQuery);
    const formattedResults = results.map(formatResult);
    res.status(200).json(formattedResults);
  } catch (error) {
    console.error('Search failed: ', error);
    res.status(500).json({ error: 'Search failed' });
  }
};

module.exports = {
  searchYouTube,
};
