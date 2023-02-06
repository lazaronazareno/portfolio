import Image from '../models/Image.js'
import Project from '../models/Project.js'
import { validationResult } from 'express-validator'

export const createImage = async (req, res) => {
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

    const image = new Image(req.body)

    image.save()
    res.json(image)
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error')
  }
}

export const deleteImage = async (req, res) => {
  try {
    const { project } = req.query

    const image = await Image.findById(req.params.id)

    if (!image) {
      return res.status(404).json({ msg: 'Image inexistente' })
    }

    const isProject = await Project.findById(project)

    if (!isProject) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' })
    }

    if (isProject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No Autorizado' })
    }

    await Image.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: 'Image eliminada' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}
