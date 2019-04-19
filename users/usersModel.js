const db = require('./../data/dbConfig');

module.exports = {
    fetchAll,
    insert,
    remove,
    // update
}

async function fetchAll() {
    return db('users')
}

async function insert(user) {
    const [id] = await db('users').insert(user);

    return db('users').where({id}).first();
}

function remove(id) {
    return db('users')
      .where('id', Number(id))
      .del();
  }