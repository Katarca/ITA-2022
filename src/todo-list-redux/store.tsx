import { configureStore } from '@reduxjs/toolkit'
import { toDoReducers } from './toDoSlice'

export const store = configureStore({
  reducer: toDoReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
