
import {Router } from 'express'
import { postsController } from '../controllers/controller.js';
const router  = Router();

/* ruta para GET */
router.get('/', postsController.findAll)

/* ruta para POST */
router.post('/', postsController.create)

/* ruta para PUT */
router.put('/:id')

/* ruta para DELETE */
router.delete('/:id')