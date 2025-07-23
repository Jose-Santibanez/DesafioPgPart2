import { crudPosts } from "../model/models.js";

/* Leer */
const findAll = () => async (req, res) => {
  try {
    const posts = await crudPosts.listarPosts();
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


/* CREAR */
const create = () => async (req, res) => {
  const { titulo, url, descripcion } = req.body;

  const newPost = {
    titulo,
    url,
    descripcion,
  };
  try {
    const post = await crudPosts.agregarPost(newPost);
    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/* Actualizar */
const update = () => {};

/* Eliminar */
const remove = () => {


};

export const postsController = {
  findAll,
  create,
  update,
  remove,
};
