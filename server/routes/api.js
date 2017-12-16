import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

const controller = name => require(`../controllers/${name}`);

router.post('/queue/:queueHost/:queueName/job/bulk', controller('bulkJobsRemove'));
router.patch('/queue/:queueHost/:queueName/job/bulk', controller('bulkJobsRetry'));
router.patch('/queue/:queueHost/:queueName/job/:id', controller('jobRetry'));
router.delete('/queue/:queueHost/:queueName/job/:id', controller('jobRemove'));

export default router;
