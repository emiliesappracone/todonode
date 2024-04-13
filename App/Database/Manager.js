const myConnection = require('express-myconnection');
const mysql = require('mysql');

class Manager {
    optionDB = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    }

    connection = {}

    constructor() {
        // console.log(this.optionDB);
    }

    getConnection() {
        this.connection = myConnection(mysql, this.optionDB, 'pool');

        return this.connection;
    }
}

module.exports = Manager;