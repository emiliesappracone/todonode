const express = require('express');
const Router = require('./App/Router/router');

// Dotenv 
require('dotenv').config();

const app = express();

// Middleware connexion to database
const Manager = require('./App/Database/Manager');
ManagerInit = new Manager();
app.use(ManagerInit.getConnection());

// Define view engine
app.set('view engine', 'ejs');
app.set('views', 'templates');

// Format request
app.use(express.urlencoded({extended: false}));

// Give access to assets
app.use('/assets', express.static('assets'));

// Defined router
app.use(Router);

// Deal with errors
app.use((req, resp) => {
    console.log('error');
    resp.status(200).redirect('/');
});
//*/
app.listen(3001, 'localhost', () => {
    console.log('waiting for request');
});
