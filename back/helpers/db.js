const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bliblablou',
  database : 'odyssey'
});
module.exports  =  connection;