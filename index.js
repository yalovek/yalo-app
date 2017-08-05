import express from 'express';
import logger from 'yalo-logger';
import cluster from 'yalo-cluster';

const app = express();

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);

  next();
});

app.use((err, req, res, next) => {
  logger.error(err.stack);

  next(err);
});

export default cluster(app);
