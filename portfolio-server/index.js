import express from 'express'
import cors from 'cors'
import { conn } from './config/db.js'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import projectRouter from './routes/projects.js'
import imageRouter from './routes/image.js'
import stackRouter from './routes/stack.js'

const app = express()

conn()

app.use(cors())

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/projects', projectRouter)
app.use('/api/image', imageRouter)
app.use('/api/stack', stackRouter)

app.listen(PORT, () => {
  console.log(`el server funciona en el PORT : ${PORT}`)
})
