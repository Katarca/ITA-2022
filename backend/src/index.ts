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

app.get('/search/:search', async (req, res, next) => {
  fs.readFile(`${__dirname}/../data.json`, 'utf-8', (err, jsonString) => {
    if (err) {
      next(err)
      return
    }
    try {
      const data = JSON.parse(jsonString).users
      const formatTerm = (term: string) => term.toLowerCase().trim().replace(/ +/g, '')
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
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500)
  res.json(err)
})

app.listen(port, () => {
  console.info(`App listening on port ${port}`)
})
