const express = require('express');
const swaggerDocs = require('./swagger');
const swaggerUi = require('swagger-ui-express');
const youtubeRouter = require('./routes/youtube');
const app = express();

//Middleware para analizar el cuerpo de la solicitudes JSON
app.use(express.json());

//Configuración para las rutas
app.use('/api/youtube', youtubeRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Puerto utilizado
const PORT = process.env.PORT || 3000;


//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
})