import { ToDoProps } from './ToDoAppRedux'
import { configureStore } from '@reduxjs/toolkit'
import { loadState } from '../utils/browserStorage'
import { toDoReducers } from './toDoSlice'

export const store = configureStore({
  reducer: toDoReducers,
  preloadedState: loadState('reduxToDos', [] as ToDoProps[]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
