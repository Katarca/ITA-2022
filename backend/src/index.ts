import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import util from 'util'

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

const convertToSlug = (term: string) =>
  term
    .toLowerCase()
    .trim()
    .replaceAll(/ +/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const formatTerm = (term: string) => convertToSlug(term).replaceAll('-', '')

const createDate = () => new Date().toLocaleDateString()

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

type Article = {
  id: string
  title: string
  slug: string
  date: string
  author: string
  content: string
}

app.get('/articles/search/:search', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString).articles
    const params = formatTerm(req.params.search)
    let searchData = data.filter((article: Article) =>
      Object.values(article).some(val => formatTerm(val).includes(params))
    )
    res.send(searchData)
  } catch (err) {
    next(err)
  }
})

app.get('/articles', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString).articles
    res.send(data)
  } catch (err) {
    next(err)
  }
})

app.get('/articles/:id', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString).articles
    const params = formatTerm(req.params.id)
    let article = data.find((article: Article) => article.id === params)
    res.send(article)
  } catch (err) {
    next(err)
  }
})

app.post('/articles', async (req, res, next) => {
  try {
    const newArticle = {
      id: Math.random().toString(),
      title: req.body.title,
      slug: convertToSlug(req.body.title),
      date: createDate(),
      author: req.body.author,
      content: req.body.content,
    }
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString)
    const newData = { ...data, articles: [newArticle, ...data.articles] }
    await writeFile(`${__dirname}/../blogData.json`, JSON.stringify(newData, null, 2), 'utf8')
    res.send(newArticle)
  } catch (err) {
    next(err)
  }
})

app.delete('/articles/:id', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString)
    const params = formatTerm(req.params.id)
    let filteredData = {
      ...data,
      articles: data.articles.filter((article: Article) => article.id !== params),
    }
    await writeFile(`${__dirname}/../blogData.json`, JSON.stringify(filteredData, null, 2), 'utf8')
    res.send(filteredData)
  } catch (err) {
    next(err)
  }
})

app.post('/articles/:id', async (req, res, next) => {
  try {
    const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
    const data = JSON.parse(jsonString)
    const params = formatTerm(req.params.id)
    const updatedData = {
      ...data,
      articles: data.articles.map((article: Article) =>
        article.id === params
          ? {
              ...article,
              title: req.body.title,
              slug: convertToSlug(req.body.title),
              author: req.body.author,
              content: req.body.content,
            }
          : article
      ),
    }
    await writeFile(`${__dirname}/../blogData.json`, JSON.stringify(updatedData, null, 2), 'utf8')
    res.send(updatedData)
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
