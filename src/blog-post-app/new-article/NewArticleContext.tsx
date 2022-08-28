import { Article } from '../articles/ArticlesContext'
import { NewArticle } from './NewArticle'
import { blogAppUrl } from '../../helpers/urls'
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

  const postData = async (title: string, author: string, content: string) => {
    try {
      const response = await fetch(`${blogAppUrl}`, {
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
    } catch (error) {
      console.error(error)
    }
  }

  return {
    newArticle,
    setNewArticle,
    titleErr,
    authorErr,
    contentErr,
    validateInputs,
    postData,
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
