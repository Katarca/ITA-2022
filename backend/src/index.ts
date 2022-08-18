import cors from 'cors'
import express from 'express'
import fs from 'fs'

const app = express()
const port = 5000

app.use(cors())

type User = {
  id: string
  name: string
  email: string
}

app.get('/search/:str', (req, res) => {
  console.info('server')
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString).users
  const params = req.params.str.toLowerCase()

  let searchData = data.filter((user: User) =>
    Object.values(user).some(val =>
      String(val).toLowerCase().trim().replace(/ +/g, '').includes(params)
    )
  )

  res.send(searchData)
})

app.listen(port, () => {
  console.info(`App listening on port ${port}`)
})
