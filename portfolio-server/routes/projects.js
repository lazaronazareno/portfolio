import express from 'express'
import * as projectsControllers from '../controllers/projectController.js'
import { AuthMiddleware } from '../middleware/auth.js'
import { check } from 'express-validator'

const router = express.Router()

// /api/projects
router.post(
  '/',
  AuthMiddleware,
  [check('name', 'El nombre del proyecto es requerido').not().isEmpty()],
  projectsControllers.createProject
)

router.get('/', projectsControllers.getProjects)

router.get('/:id', projectsControllers.getProjectById)

router.put(
  '/:id',
  AuthMiddleware,
  [check('name', 'El nombre del proyecto es requerido').not().isEmpty()],
  projectsControllers.updateProject
)

router.delete('/:id', AuthMiddleware, projectsControllers.deleteProject)

export default router
