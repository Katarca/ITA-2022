import { Article } from '../articles/ArticlesContext'
import { ArticleDetail } from './ArticleDetail'
import { blogAppUrl } from '../../helpers/urls'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const useLogicState = () => {
  const { id } = useParams<{ id: string }>()
  const [articleDetail, setArticleDetail] = useState({} as Article)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [newTitleErr, setNewTitleErr] = useState('')
  const [newAuthorErr, setNewAuthorErr] = useState('')
  const [newContentErr, setNewContentErr] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newContent, setNewContent] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${blogAppUrl}${id}`)
        if (!response.ok) throw Error
        const json = await response.json()
        setArticleDetail(json)
        setNewTitle(json.title)
        setNewAuthor(json.author)
        setNewContent(json.content)
      } catch (error) {
        console.error(error)
        setErrorMsg(`An error occurred while fetching article`)
      }
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const deleteArticle = async () => {
    try {
      const response = await fetch(`${blogAppUrl}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw Error
    } catch (error) {
      console.error(error)
    }
  }

  const validateInputs = () => {
    let validInputs = true
    if (newTitle.trim().length === 0) {
      validInputs = false
      setNewTitleErr('Title is required')
    }
    if (newAuthor.trim().length === 0) {
      validInputs = false
      setNewAuthorErr('Author is required')
    }
    if (newContent.trim().length === 0) {
      validInputs = false
      setNewContentErr('Content is required')
    }
    return validInputs
  }

  const postData = async () => {
    try {
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
    } catch (error) {
      console.error(error)
    }
  }

  return {
    articleDetail,
    setArticleDetail,
    loading,
    errorMsg,
    deleteArticle,
    validateInputs,
    postData,
    newTitleErr,
    newAuthorErr,
    newContentErr,
    newTitle,
    newAuthor,
    newContent,
    setNewTitle,
    setNewAuthor,
    setNewContent,
  }
}

export const { ContextProvider: ArticleDetailContextProvider, Context: ArticleDetailStateContext } =
  genericHookContextBuilder(useLogicState)

export const ArticleDetailContext = () => {
  return (
    <ArticleDetailContextProvider>
      <ArticleDetail />
    </ArticleDetailContextProvider>
  )
}
