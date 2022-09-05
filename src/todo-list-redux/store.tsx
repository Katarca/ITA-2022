import { ToDoProps, localStorageKey } from './ToDoAppRedux'
import { configureStore } from '@reduxjs/toolkit'
import { loadFromLocalStorage } from '../utils/browserStorage'
import { toDoReducers } from './toDoSlice'

export const store = configureStore({
  reducer: toDoReducers,
  preloadedState: loadFromLocalStorage(localStorageKey, [] as ToDoProps[]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
