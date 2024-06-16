process.env.APP_ENV = process.env.APP_ENV || 'development';

const env = {};

switch (process.env.APP_ENV) {
    // local api
    case 'local':
        env.API_BASE_URL = 'http://blog-api.localhost/api/v1';
        break;
    // development api
    case 'development':
        env.API_BASE_URL = 'https://blog-api.necodeo.com/api/v1';
        break;
    // production api
    case 'production':
        env.API_BASE_URL = 'https://blog-api.necodeo.com/api/v1';
        break;
}

console.log('Running in', process.env.APP_ENV, 'mode');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env,
};

export default nextConfig;
