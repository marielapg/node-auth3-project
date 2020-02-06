const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findByDepartment,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findByDepartment(department){
return db('users')
.select('id', 'username', 'department')
.where('department', '=', department);
}