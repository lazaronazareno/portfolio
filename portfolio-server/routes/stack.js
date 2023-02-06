import express from 'express'
import * as stackControllers from '../controllers/stackController.js'
import { AuthMiddleware } from '../middleware/auth.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/projects
router.post('/', AuthMiddleware, [
  check('name', 'El nombre del proyecto es requerido').not().isEmpty()
], stackControllers.createStack)

router.delete('/:id', AuthMiddleware, stackControllers.deleteStack)

export default router
