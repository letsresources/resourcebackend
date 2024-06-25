import redis from 'redis';
import expressRedisCache from 'express-redis-cache';

// Create the Redis client with Upstash details
const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  tls: {} // Enable TLS for secure connection
});

// Handle connection errors
redisClient.on('error', (error) => {
  console.error('Redis Client Error:', error);
});

// Set up the cache using the created Redis client
export const cache = expressRedisCache({
  client: redisClient
});