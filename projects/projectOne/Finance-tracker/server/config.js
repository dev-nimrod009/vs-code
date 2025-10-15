export default {
    mongoURI: 'mongodb://localhost:27017/my-app-database',
    port: 3000,
    corsOption: {
        origin: 'http://localhost:5173' // Make sure this matches your frontend URL
    }
};

