import { Provider } from 'react-redux'
import { ToDoListRedux } from './ToDoListRedux'
import { debounce } from 'ts-debounce'
import { saveStateLocalStorage } from '../utils/browserStorage'
import { store } from './store'
import React from 'react'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}

export const localStorageKey = 'reduxToDos'

store.subscribe(
  debounce(() => {
    saveStateLocalStorage(localStorageKey, store.getState())
  }, 800)
)

export const ToDoAppRedux = () => {
  return (
    <Provider store={store}>
      <ToDoListRedux />
    </Provider>
  )
}
