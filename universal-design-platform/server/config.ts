import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/universal-design-platform',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    api: {
        prefix: '/api',
    },
};

export default config;