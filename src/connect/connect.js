// Importa el paquete mysql2
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',      // Dirección del servidor de la base de datos
    user: 'root',           // Tu usuario de MySQL
    password: 'Uabcs123456',           // Tu contraseña de MySQL
    database: 'test' // Nombre de la base de datos
  }).promise();



module.exports = { connection };