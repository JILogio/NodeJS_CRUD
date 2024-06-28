const { Router } = require('express');
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Keyshar-799',
    database: 'crud_nodejs'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la BD de MySQL!');
})

module.exports = conexion;