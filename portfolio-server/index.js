import express from 'express'
import { conn } from './config/db.js'

const app = express()

conn()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`el server funciona en el PORT : ${PORT}`)
})
