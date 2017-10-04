import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../../client/src/app';

const router = express.Router();

router.get('/', (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={{}}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
    });
  }
});

/* API */
const jobAdd = require('./jobAdd');
const jobRetry = require('./jobRetry');
const jobRemove = require('./jobRemove');
const bulkJobsRemove = require('./bulkJobsRemove');
const bulkJobsRetry = require('./bulkJobsRetry');

router.post('/queue/:queueHost/:queueName/job/new', jobAdd);
router.post('/queue/:queueHost/:queueName/job/bulk', bulkJobsRemove);
router.patch('/queue/:queueHost/:queueName/job/bulk', bulkJobsRetry);
router.patch('/queue/:queueHost/:queueName/job/:id', jobRetry);
router.delete('/queue/:queueHost/:queueName/job/:id', jobRemove);

export default router;
