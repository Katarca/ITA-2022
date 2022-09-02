import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ToDoProps } from './ToDoAppRedux'
import { idGenerator } from '../utils/idGenerator'

const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [] as ToDoProps[],
  reducers: {
    addToDo: {
      reducer: (state, action: PayloadAction<ToDoProps>) => {
        state.push(action.payload)
      },
      prepare: (task: string) => ({
        payload: {
          id: idGenerator(),
          task,
          completed: false,
        } as ToDoProps,
      }),
    },
    deleteToDo(state, action: PayloadAction<string>) {
      const index = state.findIndex(toDo => toDo.id === action.payload)
      state.splice(index, 1)
    },
    toggleCompleted(state, action: PayloadAction<{ id: string; completed: boolean }>) {
      const index = state.findIndex(toDo => toDo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    editToDo(state, action: PayloadAction<{ id: string; newTask: string }>) {
      const index = state.findIndex(toDo => toDo.id === action.payload.id)
      state[index].task = action.payload.newTask
    },
  },
})

export const toDoActions = toDoSlice.actions
export const toDoReducers = toDoSlice.reducer
