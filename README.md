# TODONODE

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Node.js Micro application

With this app you can read, add, update and delete notes.

### Requirements

- Node 18
- Nodemon to reload node server when code is updated (`npm install -g nodemon` - https://www.npmjs.com/package/nodemon/v/0.2.2)

### Installation

1- Before check requirements.

2- Update `.env` file and add database connexion information.

3- Create mysql database and one table with columns :

- id : PRIMARY KEY A-I
- title : VARCHAR 255
- description : VARCHAR 255

4- Install dependecies :

- `npm install`

5- Run server :

- `nodemon app.js`
