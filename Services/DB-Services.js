const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path:'../config.env'});

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'simple_api',
    port:'3306'
});

connection.connect((err)=>{ if(err){throw err};})
   
module.exports = connection;



