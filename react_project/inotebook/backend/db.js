const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = async () => {
 mongoose.connect(mongoURI, await console.log("Connected to mongo `Successfully")
    );
}

module.exports = connectToMongo;