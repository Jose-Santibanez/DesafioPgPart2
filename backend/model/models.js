import { pool} from "../database/connection.js"

// Listar todos los posts
const listarPosts = async()=>{
    const query = 'select * from posts'

    const {rows} = await pool.query(query);

    return rows
}

/* Agregar */
const agregarPost = async(post)=>{

    const query = 'Insert into posts (titulo,img,descripcion) values ($1,$2,$3) returning*';

    const { rows } = await pool.query(query,[post.titulo,post.url,post.descripcion])

    return rows[0]

}

/* Actualizar */
const actualizarPost = async(id)=>{
    const query = 'update posts set done = not done where id = $1 returning *'
    const { rows } = await pool.query(query, [id])

    return rows[0]

}

/* Eliminar */
const eliminarPosts = async (id)=>{
    const query = 'delete from posts where id = $1 returning  *'
    const {rows} = await pool.query(query, [id])
    return rows[0]
}

export const crudPosts = {
    listarPosts,
    agregarPost,
    actualizarPost,
    eliminarPosts,
} 