const Bull = require('bull');
const Bee = require('bee-queue');
const redis = require('redis');
const utils = require('../helpers/utils');

export default class Server {
    constructor(name, config) {
        this.config = config;
        this.queues = {};
        this.queueNames = [];
        this.client = redis.createClient(config);
    }

    async list() {
        let allBullKeys = [];

        utils.promiseWhile(-1, cursor => cursor !== '0', initialCursor => new Promise((accept, reject) => {
            let cursor = initialCursor < 0 ? 0 : initialCursor;

            this.client.scan([cursor, 'MATCH', 'bull:*', 'COUNT', '1000'], (err, tuple) => {
                if (err) return reject(err);
                cursor = tuple[0];
                allBullKeys = allBullKeys.concat(tuple[1]);
                return accept(cursor);
            });
        })).then(() => {
            for (let i = 0; i < allBullKeys.length; i += 1) {
                const name = allBullKeys[i].split(':')[1];
                if (!this.queueNames.includes(name)) {
                    this.add(name, 'bull');
                }
            }
        }).catch(console.log);
    }
    
    /**
    * @param name Name of a the queue
    * @param type The type of queue (bee/bull)
    */
    add(name, type) {
        if (this.queueNames.includes(name)) {
            return false;
        }

        const { port, host, db, password, prefix, url } = this.config;

        const options = {
            prefix,
            redis: url || { port, host, db, password },
        };

        let queue;

        switch (type) {
        case 'bee': {
            Object.assign(options, {
                isWorker: false,
                getEvents: false,
                sendEvents: false,
                storeJobs: false,
            });
            queue = new Bee(name, options);
            break;
        }
        default: {
            queue = new Bull(name, options);
            break;
        }
        }

        queue.arenaType = type;
        this.queueNames.push(name);
        return queue;
    }

    /**
    * @param queue A bee or bull queue class
    * @param data The data to be used within the job
    */
    addJob(queue, data) {
        switch (queue.arenaType) {
        case 'bee': {
            queue.createJob(data).save();
        }
        default: {
            queue.add(data, {
                removeOnComplete: false,
                removeOnFail: false,
            });
        }
    }
}