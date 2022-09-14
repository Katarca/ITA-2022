import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import util from 'util'

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - slug
 *         - date
 *         - author
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the article
 *         title:
 *           type: string
 *           description: The article title
 *         slug:
 *           type: string
 *           description: The auto-generated slug of the article
 *         date:
 *           type: string
 *           description: The auto-generated date of the article
 *         author:
 *           type: string
 *           description: The article author
 *         content:
 *           type: string
 *           description: The article content
 *       example:
 *         id: 0.7313266947047554
 *         title: Article title
 *         slug: article-title
 *         date: 28/08/2022
 *         author: anonym
 *         content: Article content...
 */

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: The blog managing API
 */

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

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Post Api',
      version: '1.0.0',
      description: 'A simple blog api',
      contact: {
        name: 'Katarína Soušková',
        url: 'https://souskova.eu',
        email: 'souskovakatarina@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/articles',
      },
    ],
  },

  apis: ['src/index.ts'],
}

const specs = swaggerJSDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

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

/**
 * @swagger
 * /articles/search/{search}:
 *   get:
 *     summary: Returns the list of all searched articles
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: search
 *         schema:
 *           type: string
 *         required: true
 *         description: The article search term
 *     responses:
 *       200:
 *         description: The list of searched articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Server error
 */
app.get('/articles', async (req, res, next) => {
  try {
    const data = await getJsonData()
    const articles = data.articles
    res.send(articles)
  } catch (err) {
    next(err)
  }
})

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Get the article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: The article description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Create a new article
 *     tags: [Article]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: The article was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Delete article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: The article was deleted
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /articles/{id}:
 *  post:
 *    summary: Update the article by the id
 *    tags: [Article]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The article id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Article'
 *    responses:
 *      200:
 *        description: The article was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Article'
 *      404:
 *        description: The article was not found
 *      500:
 *        description: Server error
 */
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
