import { NewArticle } from './NewArticle'
import { delay } from '../../utils/delay'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { services } from '../../utils/services'
import { urls } from '../../helpers/urls'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const useLogicState = () => {
  const [titleErr, setTitleErr] = useState(null as null | string)
  const [authorErr, setAuthorErr] = useState(null as null | string)
  const [contentErr, setContentErr] = useState(null as null | string)

  const [newArticleErr, setNewArticleErr] = useState(null as null | string)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  let navigate = useNavigate()

  const postNewArticle = async () => {
    try {
      await services.addNewArticle(title, author, content)
    } catch (error) {
      setNewArticleErr('An error occurred while posting article')
    }
  }

  const submitArticle = async () => {
    setTitleErr(null)
    setAuthorErr(null)
    setContentErr(null)
    if (title.trim().length === 0) {
      setTitleErr('Title is required')
      return
    }
    if (author.trim().length === 0) {
      setAuthorErr('Author is required')
      return
    }
    if (content.trim().length === 0) {
      setContentErr('Content is required')
      return
    }
    postNewArticle()
    await delay(1000)
    setTitle('')
    setAuthor('')
    setContent('')
    navigate(urls.blogApp)
    setNewArticleErr(null)
  }

  return {
    titleErr,
    authorErr,
    contentErr,
    newArticleErr,
    submitArticle,
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
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
