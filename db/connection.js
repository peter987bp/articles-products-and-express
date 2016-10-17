const Promise = require('bluebird');

const pgp = require('pg-promise')({
  promiseLib: Promise
});


//1227.0.0.1 -> localhost
//db is being pass around to different files to use a query...

var db = pgp('postgres://ape_user:1234@localhost:5432/articles_products_and_express');

module.exports = db;