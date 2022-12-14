import { Article } from '../articles/ArticlesContext'
import { ArticleDetail } from './ArticleDetail'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { services } from '../../utils/services'
import { useComponentDidMount } from '../../utils/useComponentDidMount'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

const useLogicState = () => {
  const params = useParams<{ id: string }>()
  const id = params.id
  const [articleDetail, setArticleDetail] = useState({} as Article)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null as null | string)
  const [newTitleErr, setNewTitleErr] = useState(null as null | string)
  const [newAuthorErr, setNewAuthorErr] = useState(null as null | string)
  const [newContentErr, setNewContentErr] = useState(null as null | string)
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newContent, setNewContent] = useState('')
  const [editing, setEditing] = useState(false)

  useComponentDidMount(async () => {
    setLoading(true)
    try {
      const json = await services.getArticleById(id!)
      setArticleDetail(json)
      setNewTitle(json.title)
      setNewAuthor(json.author)
      setNewContent(json.content)
    } catch (error) {
      console.error(error)
      setErrorMsg(`An error occurred while fetching article`)
    }
    setLoading(false)
  })

  const deleteArticle = async () => {
    try {
      services.deleteArticleById(id!)
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

  const updateArticle = async () => {
    try {
      await services.updateArticleById(id!, newTitle, newAuthor, newContent)
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
    updateArticle,
    newTitleErr,
    newAuthorErr,
    newContentErr,
    newTitle,
    newAuthor,
    newContent,
    setNewTitle,
    setNewAuthor,
    setNewContent,
    editing,
    setEditing,
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
