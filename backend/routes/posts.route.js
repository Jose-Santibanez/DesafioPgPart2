import { Router } from "express";  // extraemos el enrutador de express
import { postsController } from "../controllers/posts.controller.js"; // importamos los controladores

const router = Router();

/* ruta para GET */
router.get("/", postsController.read);

/* ruta para POST */
router.post("/", postsController.create);

/* ruta para PUT */
router.put("/like/:id", postsController.update);

/* ruta para DELETE */
router.delete("/:id", postsController.remove);

export default router;
