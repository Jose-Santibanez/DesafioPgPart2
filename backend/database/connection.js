import 'dotenv/config' // imortamos las variables de entorno con dotenv

import pkg from 'pg' // importamos cliente de pgSql para node

const { Pool } = pkg // Extraemos el Pool de conexiones

export const pool = new Pool({
    allowExitOnIdle:true
})

try{
    await pool.query("select now()");
    console.log('db pg conectada')
}catch(err){
    console.log(err)
}
