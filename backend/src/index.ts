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

const getIdString = () => Math.random().toString()

const createDate = () => new Date().toLocaleDateString()

type Article = {
  id: string
  title: string
  slug: string
  date: string
  author: string
  content: string
}

type Articles = {
  articles: Article[]
}

const readFile = util.promisify(fs.readFile)

const getJsonData = async (): Promise<Articles> => {
  const jsonString = await readFile(`${__dirname}/../blogData.json`, 'utf8')
  return JSON.parse(jsonString)
}

const writeFile = util.promisify(fs.writeFile)

const writeJsonData = async (data: {}) =>
  await writeFile(`${__dirname}/../blogData.json`, JSON.stringify(data, null, 2), 'utf8')

app.get('/articles/search/:search', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const articles = data.articles
    const params = formatTerm(req.params.search)
    let searchData = articles.filter(article =>
      Object.values(article).some(val => formatTerm(val).includes(params))
    )
    res.send(searchData)
  } catch (err) {
    next(err)
  }
})

app.get('/articles', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const articles = data.articles
    res.send(articles)
  } catch (err) {
    next(err)
  }
})

app.get('/articles/:id', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const articles = data.articles
    const params = formatTerm(req.params.id)
    let article = articles.find(article => article.id === params)
    res.send(article)
  } catch (err) {
    next(err)
  }
})

app.post('/articles', async (req, res, next) => {
  try {
    const newArticle = {
      id: getIdString(),
      title: req.body.title,
      slug: convertToSlug(req.body.title),
      date: createDate(),
      author: req.body.author,
      content: req.body.content,
    }
    const data = await getJsonData()
    const newData = { ...data, articles: [newArticle, ...data.articles] }
    writeJsonData(newData)
    res.send(newArticle)
  } catch (err) {
    next(err)
  }
})

app.delete('/articles/:id', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const params = formatTerm(req.params.id)
    let filteredData = {
      ...data,
      articles: data.articles.filter(article => article.id !== params),
    }
    writeJsonData(filteredData)
    res.send(filteredData)
  } catch (err) {
    next(err)
  }
})

app.post('/articles/:id', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const params = formatTerm(req.params.id)
    const updatedData = {
      ...data,
      articles: data.articles.map(article =>
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
    writeJsonData(updatedData)
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
