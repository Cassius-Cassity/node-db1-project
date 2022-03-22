const db = require("../../data/db-config");

const getAll = () => {
  return db('accounts');
  // select * from accounts
}

const getById = id => {
return db('accounts').where("id", id).first()
  // select * from accounts where id = 1
}

const create = async account => {
const [id] = await db('accounts').insert(account)
return getById(id)
}

const updateById = async (id, account) => {
await db('accounts').where('id', id).update(account)
return getById(id)
}

const deleteById = id => {
  //delete from accounts where id = 1
  return db('account').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
