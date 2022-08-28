import { Article } from '../articles/ArticlesContext'
import { ArticleDetail } from './ArticleDetail'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import React, { useState } from 'react'

const useLogicState = () => {
  const [articleDetail, setArticleDetail] = useState({} as Article)
  return {
    articleDetail,
    setArticleDetail,
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
