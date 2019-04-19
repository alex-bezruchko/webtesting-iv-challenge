const db = require('./../data/dbConfig');

module.exports = {
    fetchAll,
    // insert,
    // remove,
    // update
}

async function fetchAll() {
    return db('users')
}