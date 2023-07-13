const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');

/**
 * @swagger
 * /api/youtube:
 *   get:
 *     summary: Search videos on YouTube
 *     description: Gets a list of up to 10 YouTube videos based on the provided search query.
 *     parameters:
 *       - in: query
 *         name: search
 *         description: Search query for videos on YouTube.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of videos found on YouTube.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Video'
 *       404:
 *         description: No videos were found for the search query.
 *       500:
 *         description: Failed to connect to the YouTube API.
 */
router.get('/', youtubeController.searchYouTube);

module.exports = router;

