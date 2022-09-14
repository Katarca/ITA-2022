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
      return state.filter(toDo => toDo.id !== action.payload)
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      return state.map(toDo =>
        action.payload === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    },
    editToDo(state, action: PayloadAction<{ id: string; newTask: string }>) {
      return state.map(toDo =>
        action.payload.id === toDo.id ? { ...toDo, task: action.payload.newTask } : toDo
      )
    },
    sortToDos(state, action: PayloadAction<{ dragItem: number; dragOverItem: number }>) {
      const draggedItem = state.splice(action.payload.dragItem, 1)[0]
      state.splice(action.payload.dragOverItem, 0, draggedItem)
    },
  },
})

export const toDoActions = toDoSlice.actions
export const toDoReducers = toDoSlice.reducer
