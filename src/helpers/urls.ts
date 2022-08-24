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
  articleDetail: '/articleDetail/',
  slug: ':slug',
} as const

export const urlString = (...urls: string[]) => urls.join('')

export const filterUrl = process.env.REACT_APP_URL
