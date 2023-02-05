import express from 'express'

const app = express()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`el server funciona en el PORT : ${PORT}`)
})
