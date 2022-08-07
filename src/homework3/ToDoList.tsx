import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { TransparentButton, TransparentButtonBorder, YellowButton } from '../components/Button'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { ReactComponent as editIcon } from './icons/edit-icon.svg'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

type ToDo = {
  id: string
  task: string
  completed: boolean
}

export const ToDoList = () => {
  const getToDosFromLocalStorage = (): ToDo[] => {
    const lsToDos = localStorage.getItem(lsId.toDos)
    if (lsToDos) {
      return JSON.parse(lsToDos)
    }
    return []
  }

  const lsId = {
    toDos: 'toDos: list',
  }
  const [toDos, _setToDos] = useState(getToDosFromLocalStorage())
  const [task, setTask] = useState('')
  const [completed, setCompleted] = useState(false)

  const setToDos = (toDos: ToDo[]) => {
    localStorage.setItem(lsId.toDos, JSON.stringify(toDos))
    _setToDos(toDos)
  }

  const deleteToDo = (id: string) => {
    const remainingToDos = toDos.filter(toDo => id !== toDo.id)
    setToDos(remainingToDos)
  }

  const toggleCompleted = (id: string) => {
    const updatedToDos = toDos.map(toDo => {
      if (id === toDo.id) {
        return { ...toDo, completed: !toDo.completed }
      }
      return toDo
    })
    setToDos(updatedToDos)
  }

  const [filter, setFilter] = useState('all')

  const filterMap = {
    all: () => true,
    active: (toDo: ToDo) => !toDo.completed,
    completed: (toDo: ToDo) => toDo.completed,
  }

  return (
    <Div_Container>
      <H_TodoHeading>ToDo List</H_TodoHeading>
      <CustomForm
        onSubmit={e => {
          e.preventDefault()
          setToDos([
            {
              id: Math.random().toString(),
              task,
              completed,
            },
            ...toDos,
          ])
          setTask('')
        }}
      >
        <CustomInput
          type='text'
          placeholder='task'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <YellowButton type='submit'>
          <P_BodyText>Add</P_BodyText>
        </YellowButton>
      </CustomForm>
      <Div_FlexContainer>
        <TransparentButtonBorder onClick={() => setFilter('all')}>
          <P_BodyText>All</P_BodyText>
        </TransparentButtonBorder>
        <TransparentButtonBorder onClick={() => setFilter('active')}>
          <P_BodyText>Active</P_BodyText>
        </TransparentButtonBorder>
        <TransparentButtonBorder name='All' onClick={() => setFilter('completed')}>
          <P_BodyText>Completed</P_BodyText>
        </TransparentButtonBorder>
      </Div_FlexContainer>
      <Ul_List>
        {toDos.filter(filterMap[filter as keyof object]).map(toDo => (
          <Li_ListItem key={toDo.id}>
            <Div_FlexContainer>
              <CustomInput
                type='checkbox'
                checked={toDo.completed}
                onChange={() => toggleCompleted(toDo.id)}
              />
              <P_BodyText>{toDo.task}</P_BodyText>
            </Div_FlexContainer>
            <Div_FlexContainer>
              <TransparentButton>
                <EditIcon />
              </TransparentButton>
              <TransparentButton onClick={() => deleteToDo(toDo.id)}>
                <CrossIcon />
              </TransparentButton>
            </Div_FlexContainer>
          </Li_ListItem>
        ))}
      </Ul_List>
      <RouterLink to={urls.homePage}>
        <P_LinkBodyText>Return home</P_LinkBodyText>
      </RouterLink>
    </Div_Container>
  )
}

const H_TodoHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.lg};
`
const Div_FlexContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs};
`
const Ul_List = styled.ul`
  padding: ${styles.spacing.sm};
  width: 70%;
`
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
