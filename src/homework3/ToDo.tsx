import { CustomInput } from '../components/Input'
import { Div_FlexContainer } from '../components/Container'
import { P_BodyText } from '../components/BodyText'
import { TransparentButton, TransparentButtonBorder } from '../components/Button'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { ReactComponent as editIcon } from './icons/edit-icon.svg'
import { styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type ToDo = {
  id: string
  task: string
  completed: boolean
  key: string
  deleteToDo: (id: string) => void
  toggleCompleted: (id: string) => void
  editToDoList: (id: string, newTask: string) => void
}

export const ToDo = (props: ToDo) => {
  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState('')
  return (
    <Li_ListItem key={props.id}>
      {editing ? (
        <form
          onSubmit={e => {
            e.preventDefault()
            if (newTask.trim().length === 0) {
              alert('Please enter a value!')
              return
            }
            props.editToDoList(props.id, newTask)
            setNewTask('')
            setEditing(false)
          }}
        >
          <CustomInput
            type='text'
            placeholder={props.task}
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <Div_FlexContainer>
            <TransparentButtonBorder onClick={() => setEditing(false)}>
              <P_BodyText>Cancel</P_BodyText>
            </TransparentButtonBorder>
            <TransparentButtonBorder type='submit'>
              <P_BodyText>Save</P_BodyText>
            </TransparentButtonBorder>
          </Div_FlexContainer>
        </form>
      ) : (
        <Div_Wrapper>
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
        </Div_Wrapper>
      )}
    </Li_ListItem>
  )
}

const Li_ListItem = styled.li`
  border: 2px solid ${styles.colors.white};
  border-radius: 8px;
  margin: ${styles.spacing.sm};
`
const CrossIcon = styled(crossIcon)`
  width: 25px;
  fill: #ffffff;
`
const EditIcon = styled(editIcon)`
  width: 25px;
  fill: #ffffff;
`

const Div_Wrapper = styled.div``
