const db = require('../database');

const stocks = {
  get: function(callback) {
    return db.query('select * from Stocks', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Stocks where id_stocks=?', [id], callback);
  },
  add: function(stocks, callback) {
    return db.query(
      'insert into stocks (id_stocks,name_stocks,market_stocks,prices_stocks,prices_week1,prices_week2,prices_week3,prices_week4,prices_week5) values(?,?,?,?,?,?,?,?,?)',
      [stocks.id_stocks, stocks.name_stocks, stocks.market_stocks, stocks.prices_stocks, stocks.prices_week1, stocks.prices_week2, stocks.prices_week3, stocks.prices_week4, stocks.prices_week5],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Stocks where id_stocks=?', [id], callback);
  },
  update: function(id, stocks, callback) {
    return db.query(
      'update stocks set id_stocks=?,name_stocks=?,market_stocks=?,prices_stocks=?,prices_week1=?,prices_week2=?,prices_week3=?,prices_week4=?,prices_week5=?',
      [stocks.id_stocks, stocks.name_stocks, stocks.market_stocks, stocks.prices_stocks, stocks.prices_week1, stocks.prices_week2, stocks.prices_week3, stocks.prices_week4, stocks.prices_week5, id],
      callback
    );
  }
};

module.exports = stocks;