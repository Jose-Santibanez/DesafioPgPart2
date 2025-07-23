import express from "express";
import { crudPosts } from "./model/models.js";
import cors from "cors";
import bodyParser from "body-parser";
import postsRouter from "./routes/route.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/posts", postsRouter);
// Encendemos el servidor en el puerto 3000
app.listen("3000", () => {
  console.log("server encendido puerto 3000");
});
