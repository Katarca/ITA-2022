import { blogAppUrl } from '../helpers/urls'

export const services = {
  getAllArticles: async () => {
    const response = await fetch(blogAppUrl!)
    if (!response.ok) throw Error
    return await response.json()
  },
  getSearchedArticles: async (searchTerm: string) => {
    const response = await fetch(`${blogAppUrl}search/${searchTerm}`)
    return await response.json()
  },
  addNewArticle: async (title: string, author: string, content: string) => {
    const response = await fetch(blogAppUrl!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
        content,
      }),
    })
    if (!response.ok) throw Error
  },
  getArticleById: async (id: string) => {
    const response = await fetch(`${blogAppUrl}${id}`)
    if (!response.ok) throw Error
    return await response.json()
  },
  deleteArticleById: async (id: string) => {
    const response = await fetch(`${blogAppUrl}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) throw Error
  },
  updateArticleById: async (
    id: string,
    newTitle: string,
    newAuthor: string,
    newContent: string
  ) => {
    const response = await fetch(`${blogAppUrl}${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newTitle,
        author: newAuthor,
        content: newContent,
      }),
    })
    if (!response.ok) throw Error
  },
}
