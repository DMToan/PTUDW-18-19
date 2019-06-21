var db = require('../utils/Database');

module.exports = {
  all: () => {
    return db.load('select * from user');
  },

  single: id => {
    return db.load(`select * from user where ID = ${id}`);
  },
  //tìm kiếm trong database
  singleByUserName: userName => {
    return db.load(`select * from user where UName = '${userName}'`);
  },
  singleByEmail: Email => {
    return db.load(`select * from user where Email = '${Email}'`);
  },

  add: entity => {
    return db.add('user', entity);
  },

  update: entity => {
    var id = entity.f_ID;
    delete entity.f_ID;
    return db.update('user', 'ID', entity, id);
  },

  delete: id => {
    return db.delete('user', 'ID', id);
  }
};
