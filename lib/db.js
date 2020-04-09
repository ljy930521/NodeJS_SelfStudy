var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '122312',
    database: 'opentutorials'
  });
  db.connect();
  module.exports = db;