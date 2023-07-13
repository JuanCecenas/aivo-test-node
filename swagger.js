const swaggerJSDoc = require('swagger-jsdoc');

// Swagger Settings
const swaggerOptions = {
  swaggerDefinition: {
    components: {
      schemas: {
        Video: {
          type: 'object',
          properties: {
            published_at: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            thumbnail: {
              type: 'string',
            },
            extra: {
              type: 'object',
              properties: {
                link: {
                  type: 'string',
                },
                views: {
                  type: 'integer',
                },
                likes: {
                  type: 'integer',
                },
                comments: {
                  type: 'integer',
                },
              },
            },
          },
        },
      },
    },
  
    info: {
      title: 'AIVO Test YouTube API',
      version: '1.0.0',
      description: 'API to search and get information from YouTube videos',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Express routes
};


const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
