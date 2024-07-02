const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'vinitoteca_cac'
});

conexion.connect((error) => {
    if(error){
        return console.log(error);
    }

    console.log('Conectado a la DB con exito...');
});

module.exports = conexion;