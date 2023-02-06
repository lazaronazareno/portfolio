import Stack from '../models/Stack.js'
import Project from '../models/Project.js'
import { validationResult } from 'express-validator'

export const createStack = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { project } = req.body
    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    const stack = new Stack(req.body)

    stack.save()
    res.json(stack)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const deleteStack = async (req, res) => {
  try {
    const { project } = req.query

    const stack = await Stack.findById(req.params.id)

    if (!stack) {
      return res.status(404).json({ msg: 'Stack inexistente' })
    }

    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    await Stack.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: 'Stack eliminada' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}
