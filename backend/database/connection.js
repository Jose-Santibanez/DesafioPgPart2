import 'dotenv/config';  // lo importamos para cargar variables de entorno de un archivo .env
import pkg from 'pg'; // conexion a postgreSQL ES6 modules. Contiene varias metodos (ejm. Pool, Client)(PostgreSQL client para Node.js)

const { Pool } = pkg;   // Extraemos el objeto Pool para manejar conexiones a una base de datos pgSQL 

// conexion a postgreSQl database likeme;
export const pool = new Pool({
    allowExitOnIdle: true, // Permite que el proceso finalice cuando no haya consultas pendientes.
});

// Validamos la conexion asincrona  
try{ // si todo sale bien
    await pool.query("select now()"); // usamos una conexión simple que devuelve la fecha y hora actual
    console.log("db pg conectada")
}catch(err){ // si todo sale mal
    console.log(err)
}
