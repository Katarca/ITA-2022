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
  const dataString = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8')
  const data = JSON.parse(dataString).users
  const formatTerm = (term: string) => term.toLowerCase().trim().replace(/ +/g, '')
  const params = formatTerm(req.params.str)

  let searchData = data.filter((user: User) =>
    Object.values(user).some(val => formatTerm(val).includes(params))
  )

  res.send(searchData)
})

app.listen(port, () => {
  console.info(`App listening on port ${port}`)
})
