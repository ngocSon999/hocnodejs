const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_db_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('ket noi db thanh cong')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect };

