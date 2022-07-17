import express, { json } from 'express';
import routes from './src/routes/index.js';
import 'dotenv/config';

//const PORT = process.env.PORT;
//const HOST = process.env.HOST;
const PORT = 3000;
const HOST = '44.203.56.87';

const app = express();
app.use(express.json());
app.use(routes);

  app.listen(PORT, () => {
    console.log(`Serving on: http://${HOST}:${PORT}` );
  })