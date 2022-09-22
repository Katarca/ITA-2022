import { AppDispatch } from './store'
import { CustomInput } from '../components/Input'
import { Div_FlexContainer } from '../components/Container'
import { Form } from '../components/Form'
import { P_BodyText } from '../components/BodyText'
import { ToDoProps } from './ToDoAppRedux'
import { TransparentButton } from '../components/Button'
import { ReactComponent as completedIcon } from './icons/completed-icon.svg'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { styles } from '../helpers/theme'
import { toDoActions } from './toDoSlice'
import { useDispatch } from 'react-redux'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
export const ToDoRedux = (props: ToDoProps) => {
  const [editing, setEditing] = useState(false)
  const [newTask, setNewTask] = useState(props.task)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Li_ListItem>
      <Div_TodoContainer>
        <Div_FlexContainer>
          <Div_IconBox
            onClick={() => {
              dispatch(toDoActions.toggleCompleted(props.id))
            }}
          >
            {props.completed && <CompletedIcon />}
          </Div_IconBox>
          <Div_TaskContainer onClick={() => setEditing(true)}>
            {editing ? (
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  if (newTask.trim().length === 0) {
                    return
                  }
                  dispatch(toDoActions.editToDo({ id: props.id, newTask: newTask }))
                  setNewTask(newTask)
                  setEditing(false)
                }}
              >
                <CustomInput_EditInput
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
        <TransparentButton_DeleteButton
          onClick={() => {
            dispatch(toDoActions.deleteToDo(props.id))
          }}
        >
          <CrossIcon />
        </TransparentButton_DeleteButton>
      </Div_TodoContainer>
    </Li_ListItem>
  )
}

const Li_ListItem = styled.li`
  cursor: grab;
  border-top: ${styles.border.orangeTransparent};
  border-right: ${styles.border.orangeTransparent};
  border-left: ${styles.border.orangeTransparent};
  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-bottom: ${styles.border.orangeTransparent};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
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
const CustomInput_EditInput = styled(CustomInput)`
  padding: unset;
  margin: unset;
  border: none;
  &:focus {
    outline: none;
  }
`
const CompletedIcon = styled(completedIcon)`
  width: 12px;
`
const Div_IconBox = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${styles.spacing.sm};
  border: ${styles.border.grey300};
  border-radius: 5px;
  cursor: pointer;
`
