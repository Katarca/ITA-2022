import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_FlexContainer } from '../components/Container'
import { P_BodyText } from '../components/BodyText'
import { P_ErrorText, ToDoProps } from './ToDoList'
import { TransparentButton, TransparentButtonBorder } from '../components/Button'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { ReactComponent as editIcon } from './icons/edit-icon.svg'
import { styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type ToDoItemProps = ToDoProps & {
  key: string
  deleteToDo: (id: string) => void
  toggleCompleted: (id: string) => void
  editToDoList: (id: string, newTask: string) => void
}

export const ToDo = (props: ToDoItemProps) => {
  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState('')
  const handleCancel = () => {
    setEditing(false)
    setError('')
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
            props.editToDoList(props.id, newTask)
            setNewTask('')
            setEditing(false)
            setError('')
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
              onChange={() => props.toggleCompleted(props.id)}
            />
            <P_BodyText aria-checked={props.completed}>{props.task}</P_BodyText>
          </Div_FlexContainer>
          <Div_FlexContainer>
            <TransparentButton onClick={() => setEditing(true)}>
              <EditIcon />
            </TransparentButton>
            <TransparentButton onClick={() => props.deleteToDo(props.id)}>
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
