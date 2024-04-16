# TODONODE

## NodeJS Micro application

With this app you can add, update and delete notes.

### Requirements

- NodeJS 18
- Nodemon to reload node server when code is updated

### Installation

1- Before check requirements.

2- Update `.env` file and add database connexion information.

3- Create mysql database and one table with columns :

- id : PRIMARY KEY A-I
- title : VARCHAR 255
- description : VARCHAR 255

4- Install dependecies :

- npm install

5- Run server :

- nodemon app.js
