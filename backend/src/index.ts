import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString).users
  res.send(data)
})

app.listen(port, () => {
  console.info(`App listening on port ${port}`)
})
