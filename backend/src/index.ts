import cors from 'cors'
import express from 'express'
import fs from 'fs'
import util from 'util'

const app = express()
const port = 5000

app.use(cors())

type User = {
  id: string
  name: string
  email: string
}

const formatTerm = (term: string) => term.toLowerCase().trim().replace(/ +/g, '')

const readFile = util.promisify(fs.readFile)

app.get('/search/:search', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../data.json`, 'utf8')
    const data = JSON.parse(jsonString).users
    const params = formatTerm(req.params.search)
    let searchData = data.filter((user: User) =>
      Object.values(user)
        .filter(val => !formatTerm(val).includes('id'))
        .some(val => formatTerm(val).includes(params))
    )
    res.send(searchData)
  } catch (err) {
    next(err)
  }
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500)
  res.json(err)
})

app.listen(port, () => {
  console.info(`App listening on port ${port}`)
})