import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_FlexContainer } from '../components/Container'
import { P_BodyText } from '../components/BodyText'
import { P_ErrorText, ToDoProps, ToDoStateContext } from './ToDoList'
import { TransparentButton, TransparentButtonBorder } from '../components/Button'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { ReactComponent as editIcon } from './icons/edit-icon.svg'
import { styles } from '../helpers/theme'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

type ToDoItemProps = ToDoProps & {
  key: string
}

export const ToDo = (props: ToDoItemProps) => {
  const { toDos, setToDos } = useContext(ToDoStateContext)

  const deleteToDo = (id: string) => setToDos(toDos.filter(toDo => id !== toDo.id))

  const toggleCompleted = (id: string) =>
    setToDos(toDos.map(toDo => (id === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo)))

  const editToDoList = (id: string, newTask: string) =>
    setToDos(toDos.map(toDo => (id === toDo.id ? { ...toDo, task: newTask } : toDo)))

  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState<string | null>(null)
  const handleCancel = () => {
    setEditing(false)
    setError(null)
  }
  return (
    <Li_ListItem key={props.id}>
      {editing ? (
        <CustomForm
          onSubmit={e => {
            e.preventDefault()
            if (newTask.trim().length === 0) {
              setError('Please enter a value!')
              return
            }
            editToDoList(props.id, newTask)
            setNewTask('')
            setEditing(false)
            setError(null)
          }}
        >
          <Div_EditContainer>
            <CustomInput
              type='text'
              placeholder={props.task}
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
            />
            {error ? <P_ErrorText>{error}</P_ErrorText> : ''}
            <div>
              <TransparentButtonBorder type='submit'>
                <P_BodyText>Save</P_BodyText>
              </TransparentButtonBorder>
              <TransparentButtonBorder onClick={() => handleCancel()}>
                <P_BodyText>Cancel</P_BodyText>
              </TransparentButtonBorder>
            </div>
          </Div_EditContainer>
        </CustomForm>
      ) : (
        <div>
          <Div_FlexContainer>
            <CustomInput
              type='checkbox'
              checked={props.completed}
              onChange={() => toggleCompleted(props.id)}
            />
            <P_BodyText aria-checked={props.completed}>{props.task}</P_BodyText>
          </Div_FlexContainer>
          <Div_FlexContainer>
            <TransparentButton onClick={() => setEditing(true)}>
              <EditIcon />
            </TransparentButton>
            <TransparentButton onClick={() => deleteToDo(props.id)}>
              <CrossIcon />
            </TransparentButton>
          </Div_FlexContainer>
        </div>
      )}
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
const EditIcon = styled(editIcon)`
  width: 25px;
  fill: ${styles.colors.white};
`
const Div_EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`
