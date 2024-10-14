const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'cahkost',
    user: 'root',
    password: ''
});

connection.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('MYSQL Database is connected Successfully')
    }
});

module.exports = connection;