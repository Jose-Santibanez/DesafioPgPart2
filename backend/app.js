import express from 'express';
import { crudPosts } from './model/models.js';
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Encendemos el servidor en el puerto 3000
app.listen('3000',()=>{
    console.log('server encendido puerto 3000');
})

// Petición get.
app.get('/posts',async (req, res)=>{
    try{
        const posts = await crudPosts.listarPosts()
        return res.json(posts) 
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Internal server error'})
    }
});

// Petición post
app.post('/posts', async(req, res)=>{

    const { titulo, url , descripcion } =  req.body
    
    const newPost = {
        titulo,
        url,
        descripcion
    }
    try{
        const post = await crudPosts.AgregarPost(newPost)
        return res.json(post)
    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Internal server error'})
    }
})