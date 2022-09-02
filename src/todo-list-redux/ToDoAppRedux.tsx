import { Provider } from 'react-redux'
import { ToDoListRedux } from './ToDoListRedux'
import { store } from './store'
import React from 'react'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}

export const ToDoAppRedux = () => {
  return (
    <Provider store={store}>
      <ToDoListRedux />
    </Provider>
  )
}
