import { pool } from "../database/connection.js"; // importamos el pool de conexiones para realizar las consultas a la BD

// Listar posts
const readPosts = async () => {
  
  const query = "select * from posts";

  const { rows } = await pool.query(query); // Extraemos el array de ojbetos rows, donde guarda el resultado de la quuery

  return rows;
};

const createPosts = async (post) => {
    // guardamos en una constante la query para insertar el nuevo posts
  const query = "insert into posts(titulo,img,descripcion) values ($1,$2,$3) returning *"; // returning lo usamos para devolver el nuevo post agregado

  // extraemos el arrya de objetos que guarda el resultado de la query desde el pool de conexiones 
  const { rows } = await pool.query(query,[post.titulo,post.img,post.descripcion]);
    // utilizamos corchetes para sanear la consulta y evita sql inyection

    // Retornamos  lo obtenido en rows de la consulta
  return rows[0]; // indicamos el indice 0 para extraer el objeto del array
  
};

const deletePosts = async(id)=>{

    const query = 'delete from posts where id = $1 returning *'

    const { rows } = await pool.query(query,[id])

    return rows[0]
}

const updatePosts = async(id)=>{
  const query = 'update posts set likes = 1 where id = $1 returning *'

  const {rows} = await pool.query(query, [id])

  return rows[0]
}
export const postsModel = {
  readPosts,
  createPosts,
  deletePosts,
  updatePosts
};
