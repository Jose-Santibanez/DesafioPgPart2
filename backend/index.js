import express from "express"; // importamos express
import cors from "cors"; // importamos el cors
import postsRoute from "./routes/posts.route.js"; // importamos las rutas

const app = express(); // instanciamos express

//middleware globales
app.use(cors()); // habilitamos el cors
app.use(express.json()); // convertimos a json lo pasado por la petición
app.use("/posts", postsRoute); // mediante middleware usamos las rutas de posts
// iniciamos el servidor
app.listen(3000, () => {
  console.log("servidor encendido en puerto 3000");
});
