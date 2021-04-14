const { router } = require('../app');
const db = require('../database');

const Ownership = {
  get: function(callback) {
    return db.query('select * from Ownership', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Ownership where idOwnership=?', [id], callback);
  },
  add: function(ownership, callback) {
    return db.query(
      'insert into Ownership (idOwnership,iduser,idstock) values(?,?,?)',
      [ownership.idownership, ownership.iduser, ownership.idstock],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Ownership where idOwnership=?', [id], callback);
  },
  update: function(id, ownership, callback) {
    return db.query(
      'update Ownership set iduser=?,idstock=?, where idOwnership=?',
      [ownership.idownership, ownership.iduser, ownership.idstock, id],
      callback
    );
  }
};

module.exports = Ownership;