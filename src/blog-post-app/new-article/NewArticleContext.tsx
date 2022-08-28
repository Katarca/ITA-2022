import { Article } from '../articles/ArticlesContext'
import { NewArticle } from './NewArticle'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import React, { useState } from 'react'

const useLogicState = () => {
  const [newArticle, setNewArticle] = useState({} as Article)

  const [titleErr, setTitleErr] = useState('')
  const [authorErr, setAuthorErr] = useState('')
  const [contentErr, setContentErr] = useState('')

  const validateInputs = (title: string, author: string, content: string) => {
    let validInputs = true
    if (title.trim().length === 0) {
      validInputs = false
      setTitleErr('Title is required')
    }
    if (author.trim().length === 0) {
      validInputs = false
      setAuthorErr('Author is required')
    }
    if (content.trim().length === 0) {
      validInputs = false
      setContentErr('Content is required')
    }
    return validInputs
  }

  return {
    newArticle,
    setNewArticle,
    titleErr,
    authorErr,
    contentErr,
    validateInputs,
  }
}

export const { ContextProvider: NewArticleContextProvider, Context: NewArticleStateContext } =
  genericHookContextBuilder(useLogicState)

export const NewArticleContext = () => {
  return (
    <NewArticleContextProvider>
      <NewArticle />
    </NewArticleContextProvider>
  )
}
