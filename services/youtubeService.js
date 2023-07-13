const axios = require('axios');
require('dotenv').config();

const formatResult = (result, video) => {
  const { id, snippet, statistics } = result;
  const videoId = video?.id ?? id ?? 'N/A'; // Default value if no valid video ID

  return {
    published_at: snippet.publishedAt,
    id: videoId,
    title: snippet.title,
    description: snippet.description,
    thumbnail: snippet.thumbnails.default.url,
    extra: {
      link: `https://www.youtube.com/watch?v=${videoId}`,
      views: video?.statistics?.viewCount ?? statistics?.viewCount ?? 0,
      likes: video?.statistics?.likeCount ?? statistics?.likeCount ?? 0,
      comments: video?.statistics?.commentCount ?? statistics?.commentCount ?? 0
    }
  };
};

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

    const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,statistics',
        id: videoIds,
        key: API_KEY,
      },
    });

    const videos = videoResponse.data.items;

    const formattedResults = results.map((result) => {
      const videoId = result.id.videoId ?? 'N/A'; // Default value if no valid video ID
      const video = videos.find((v) => v.id === videoId);

      return formatResult(result, video);
    });

    return formattedResults;
  } catch (error) {
    throw new Error('Search failed');
  }
};

module.exports = {
  searchVideos
};