const express = require('express');
const swaggerDocs = require('./swagger');
const swaggerUi = require('swagger-ui-express');
const youtubeRouter = require('./routes/youtube');
const app = express();

//Middleware to parse the JSON request body
app.use(express.json());

//Routes settings
app.use('/api/youtube', youtubeRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Port used
const PORT = process.env.PORT || 3000;


//Start the server
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
})