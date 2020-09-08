import Redis from 'ioredis';

const oneDayInSeconds = 60 * 60 * 24;

class Cache {
    constructor() {
        this.redis = new Redis({
            host: '192.168.99.100',
            port: 6379,
            keyPrefix: 'cache:',
        });
    }

    set(key, value) {
        return this.redis.set(
            key,
            JSON.stringify(value),
            'EX',
            oneDayInSeconds
        );
    }

    async get(key) {
        const cached = await this.redis.get(key);

        return cached ? JSON.parse(cached) : null;
    }

    invalidate(key) {
        return this.redis.del(key);
    }

    async invalidatePrefix(prefix) {
        const keys = await this.redis.keys(`cache:${prefix}:*`);
        const keysWithoutPrefix = keys.map((key) => key.replace('cache:', ''));

        return this.redis.del(keysWithoutPrefix);
    }
}

export default new Cache();
