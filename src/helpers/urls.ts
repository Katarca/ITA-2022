import { convertToSlug } from '../utils/convertToSlug'

export const urls = {
  homePage: '/',
  jsWeb: '/js',
  todoList: '/todo-list',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  mortgageCalculator: '/mortgage-calculator',
  nestedPath: '/*',
  blog: '/blog',
  newArticle: '/new-article',
  articleDetail: '/article-detail/',
  slug: ':slug',
  id: '/:id',
  blogApp: '/blog-app',
  linkNewArticle: '/blog-app/new-article',
  articleDetailRoute: '/article-detail/:slug/:id',
  nestedBlog: '/blog/*',
  nestedBlogApp: '/blog-app/*',
  todoListRedux: '/todo-list-redux',
  projects: '/projects',
  cv: '/cv',
} as const

export const newArticleUrl = `${urls.blog}${urls.newArticle}`
export const articleDetailUrl = `${urls.articleDetail}${urls.slug}`
export const getArticleDetail = (title: string) =>
  `${urls.blog}${urls.articleDetail}${convertToSlug(title)}`

export const getArticleDetailUrl = (title: string, id: string) =>
  `${urls.blogApp}${urls.articleDetail}${convertToSlug(title)}/${id}`

export const filterUrl = process.env.REACT_APP_URL

export const blogAppUrl = process.env.REACT_APP_URL_BLOG
