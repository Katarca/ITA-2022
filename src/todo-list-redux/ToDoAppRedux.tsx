import { Provider } from 'react-redux'
import { ToDoListRedux } from './ToDoListRedux'
import { debounce } from 'ts-debounce'
import { lsToDoListKey } from '../helpers/lsKeys'
import { saveToLocalStorage } from '../utils/browserStorage'
import { store } from './store'
import React from 'react'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
  index: number
  dragItem: React.MutableRefObject<number>
  dragOverItem: React.MutableRefObject<number>
}

store.subscribe(
  debounce(() => {
    saveToLocalStorage(lsToDoListKey, store.getState())
  }, 800)
)

export const ToDoAppRedux = () => {
  return (
    <Provider store={store}>
      <ToDoListRedux />
    </Provider>
  )
}
