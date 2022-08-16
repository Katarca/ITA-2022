import { CustomInput } from '../components/Input'
import { Div_FlexContainer } from '../components/Container'
import { Form } from '../components/Form'
import { P_BodyText } from '../components/BodyText'
import { ToDoProps, ToDoStateContext } from './ToDoList'
import { TransparentButton, TransparentButtonBorder } from '../components/Button'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { styles } from '../helpers/theme'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

type ToDoItemProps = ToDoProps & {
  key: string
}

export const ToDo = (props: ToDoItemProps) => {
  const toDoLogic = useContext(ToDoStateContext)

  const deleteToDo = (id: string) =>
    toDoLogic.setToDos(toDoLogic.toDos.filter(toDo => id !== toDo.id))

  const toggleCompleted = (id: string) =>
    toDoLogic.setToDos(
      toDoLogic.toDos.map(toDo => (id === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo))
    )

  const editToDoList = (id: string, newTask: string) =>
    toDoLogic.setToDos(
      toDoLogic.toDos.map(toDo => (id === toDo.id ? { ...toDo, task: newTask } : toDo))
    )

  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState(props.task)

  return (
    <Li_ListItem key={props.id}>
      <Div_TodoContainer>
        <Div_FlexContainer>
          <CustomInput
            type='checkbox'
            checked={props.completed}
            onChange={() => toggleCompleted(props.id)}
          />
          <Div_TaskContainer onClick={() => setEditing(true)}>
            {editing ? (
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  if (newTask.trim().length === 0) {
                    return
                  }
                  editToDoList(props.id, newTask)
                  setNewTask(newTask)
                  setEditing(false)
                }}
              >
                <CustomInput
                  type='text'
                  value={newTask}
                  onChange={e => setNewTask(e.target.value)}
                />
              </Form>
            ) : (
              <P_BodyText aria-checked={props.completed}>{props.task}</P_BodyText>
            )}
          </Div_TaskContainer>
        </Div_FlexContainer>
        <TransparentButton_DeleteButton onClick={() => deleteToDo(props.id)}>
          <CrossIcon />
        </TransparentButton_DeleteButton>
      </Div_TodoContainer>
    </Li_ListItem>
  )
}

const Li_ListItem = styled.li`
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  margin: ${styles.spacing.sm} 0;
`
const CrossIcon = styled(crossIcon)`
  width: 25px;
  fill: ${styles.colors.white};
`

const Div_TaskContainer = styled.div`
  cursor: text;
`

const TransparentButton_DeleteButton = styled(TransparentButton)`
  opacity: 0;
`

const Div_TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover ${TransparentButton_DeleteButton} {
    opacity: 1;
  }
`
