const mysql = require('mysql2');

const databaseCon = mysql.createConnection ({

host:'localhost',
user:'root',
password:'Mukesh007$',
database:'mynodeapp_new'


})
databaseCon.connect(
    (err)=>{

        if(err) throw err;
        console.log('database connected correctily');
    }
)
module.exports= databaseCon;