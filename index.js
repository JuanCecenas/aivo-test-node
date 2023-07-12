const express = require('express');
const app = express();
const youtubeRouter = require('./routes/youtube');

//Middleware para analizar el cuerpo de la solicitudes JSON
app.use(express.json());

//Configuración para las rutas
app.use('/api/youtube', youtubeRouter);

//Puerto utilizado
const PORT = process.env.PORT || 3000;

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecucion en el puerto ${PORT}`);
})