import { ArticlesRoutes } from './ArticlesRoutes'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import React, { useState } from 'react'

export type Article = {
  id: string
  date: string
  author: string
  title: string
  content: string
}

const useLogicState = () => {
  const [articles, setArticles] = useState([] as Article[])
  const [searchedArticles, setSearchedArticles] = useState([] as Article[])
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  return {
    articles,
    setArticles,
    searchedArticles,
    setSearchedArticles,
    wasSubmitted,
    setWasSubmitted,
    searchTerm,
    setSearchTerm,
  }
}

export const { ContextProvider: ArticlesContextProvider, Context: ArticlesStateContext } =
  genericHookContextBuilder(useLogicState)

export const ArticlesContext = () => {
  return (
    <ArticlesContextProvider>
      <ArticlesRoutes />
    </ArticlesContextProvider>
  )
}
