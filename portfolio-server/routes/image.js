import express from 'express'
import * as imageControllers from '../controllers/imageController.js'
import { AuthMiddleware } from '../middleware/auth.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/projects
router.post('/', AuthMiddleware, [
  check('name', 'El nombre del proyecto es requerido').not().isEmpty()
], imageControllers.createImage)

router.delete('/:id', AuthMiddleware, imageControllers.deleteImage)

export default router
