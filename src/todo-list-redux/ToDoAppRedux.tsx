import { Provider } from 'react-redux'
import { ToDoListRedux } from './ToDoListRedux'
import { debounce } from 'ts-debounce'
import { localStorageKey, store } from './store'
import { saveToLocalStorage } from '../utils/browserStorage'
import React from 'react'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}

store.subscribe(
  debounce(() => {
    saveToLocalStorage(localStorageKey, store.getState())
  }, 800)
)

export const ToDoAppRedux = () => {
  return (
    <Provider store={store}>
      <ToDoListRedux />
    </Provider>
  )
}
