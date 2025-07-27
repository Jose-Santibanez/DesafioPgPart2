import { postsModel } from "../models/posts.models.js";

const read = async (req, res) => {
  try {
    const posts = await postsModel.readPosts();
    if (!posts) {
      return res.status(404).json({ message: "posts no encontrados" });
    }
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  // extraemos lo info del cliente enviada por el body de la petición
  const { titulo, url, descripcion } = req.body;

  // creamos el nuevo post y guardamos lo extradio del body
  const newPost = {
    titulo,
    url,
    descripcion,
  };
  // Insertamos el newPost y lo que nos devuelve la función la guardamos en la constante posts
  const post = await postsModel.createPosts(newPost);

  return res.json(post);
};

const update = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postsModel.updatePosts(id);
    if (!post) return res.status(404).json({ error: "post no encontrado" });

    return res.json({ message: "like" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const remove = async (req, res) => {
  // extraemos id de la url
  const { id } = req.params;
  try {
    const post = await postsModel.deletePosts(id);
    if (!post) return res.status(404).json({ error: "post no encontrado" });
    res.json({ post });
  } catch (err) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const postsController = {
  read,
  create,
  remove,
  update,
};
