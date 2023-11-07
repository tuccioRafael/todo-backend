require('dotenv').config();

const mongoose = require('mongoose');


const main = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.DB_CONNECT);
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

module.exports = main;