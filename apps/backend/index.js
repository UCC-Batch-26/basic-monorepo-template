import express from 'express';
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import sampleRoutes from '#modules/samples/routes.js';
import { db } from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(
  cors({
    origin: (origin, callback) => {
      const whitelist = ['http://localhost:5173', 'https://yourproductionurl.com'];
      if (whitelist.indexOf(origin) === -1) {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      } else {
        callback(null, true);
      }
    },
  }),
);
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined'));

await db(process.env.DB_URI);

app.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'PONG',
  });
});

app.use('/sample', sampleRoutes);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
