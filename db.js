//db.js
require('dotenv').config();

const mongoClient = require('mongodb').MongoClient;
module.exports = () => {
    return mongoClient.connect(process.env.DB_CONN, { useUnifiedTopology: true })
                      .then(conn => global.conn = conn.db('sample_mflix'));
}