import { ToDoProps } from './ToDoAppRedux'
import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../utils/browserStorage'
import { lsToDoListKey } from '../helpers/lsKeys'
import { toDoReducers } from './toDoSlice'

export const store = configureStore({
  reducer: toDoReducers,
  preloadedState: loadFromLocalStorage(lsToDoListKey, [] as ToDoProps[]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
