import { pool} from "../database/connection.js"

// Listar todos los posts
const listarPosts = async()=>{
    const query = 'select * from posts'

    const {rows} = await pool.query(query);

    return rows
}

const AgregarPost = async(post)=>{

    const query = 'Insert into posts (titulo,img,descripcion) values ($1,$2,$3) returning*';

    const { rows } = await pool.query(query,[post.titulo,post.url,post.descripcion])

    return rows[0]

}


export const crudPosts = {
    listarPosts,
    AgregarPost,
} 