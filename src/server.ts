require('dotenv').config();

import express from 'express';
import next from 'next';
import { env } from './lib';

const port = env.PORT || 3000;
const dev = env.NODE_ENV !== 'production';

const app = next({ dev, dir: __dirname });
const server = express();

app.prepare().then(() => {
  server.get('*', app.getRequestHandler());

  server.listen(port, (err: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
