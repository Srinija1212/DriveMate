// const Redis = require('ioredis');
// // Correct ioredis client initialization
// const redis = new Redis({
//   host: 'redis', // The docker service name, not localhost
// });
// module.exports = redis;
const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
module.exports = redis;
