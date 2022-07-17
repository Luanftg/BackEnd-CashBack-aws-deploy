import express, { json } from 'express';
import routes from './src/routes/index.js';
import 'dotenv/config';

const PORT = process.env.PORT  || 3000;
//const HOST = process.env.HOST;
//const PORT = 3000;
const HOST = '';

const app = express();
app.use(express.json());
app.use(routes);

  app.listen(PORT, () => {
    console.log(`Serving on: http://${HOST}:${PORT}` );
  })