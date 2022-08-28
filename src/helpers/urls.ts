export const urls = {
  homePage: '/',
  jsWeb: '/js',
  counterApp: '/counter-app',
  todoList: '/todo-list',
  hackerTyper: '/hacker-typer',
  memoryGame: '/memory-game',
  mortgageCalculator: '/mortgage-calculator',
  httpFilter: '/http-filter',
  nestedPath: '/*',
  blog: '/blog',
  newArticle: '/new-article',
  articleDetail: '/article-detail/',
  slug: ':slug',
  blogApp: '/blog-app',
} as const

export const urlString = (...urls: string[]) => urls.join('')

export const filterUrl = process.env.REACT_APP_URL

export const blogAppUrl = process.env.REACT_APP_URL_BLOG
