import { BlueButton, TransparentButtonBorder } from '../components/Button'
import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container, Div_FlexContainer } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { ToDo } from './ToDo'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}
export const ToDoList = () => {
  const getToDosFromLocalStorage = (): ToDoProps[] => {
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

  const setToDos = (toDos: ToDoProps[]) => {
    localStorage.setItem(lsId.toDos, JSON.stringify(toDos))
    _setToDos(toDos)
  }

  const deleteToDo = (id: string) => setToDos(toDos.filter(toDo => id !== toDo.id))

  const toggleCompleted = (id: string) =>
    setToDos(toDos.map(toDo => (id === toDo.id ? { ...toDo, completed: !toDo.completed } : toDo)))

  const editToDoList = (id: string, newTask: string) =>
    setToDos(toDos.map(toDo => (id === toDo.id ? { ...toDo, task: newTask } : toDo)))

  const [filter, setFilter] = useState('all')

  const filterMap = {
    all: () => true,
    active: (toDo: ToDoProps) => !toDo.completed,
    completed: (toDo: ToDoProps) => toDo.completed,
  }

  const filterNames = Object.keys(filterMap)

  const filterList = filterNames.map(name => (
    <TransparentButtonBorder
      onClick={() => setFilter(name)}
      key={name}
      aria-pressed={name === filter}
    >
      <P_BodyText>{name}</P_BodyText>
    </TransparentButtonBorder>
  ))

  const activeToDos = toDos.filter(filterMap['active' as keyof object])

  return (
    <Div_Container>
      <H_TodoHeading>ToDo List</H_TodoHeading>
      {activeToDos.length >= 1 ? (
        <P_BodyText>
          {activeToDos.length === 1
            ? `${activeToDos.length} task left`
            : `${activeToDos.length} tasks left`}
        </P_BodyText>
      ) : (
        ''
      )}
      <CustomForm
        onSubmit={e => {
          e.preventDefault()
          if (task.trim().length === 0) {
            alert('Please enter a value!')
            return
          }
          setToDos([
            {
              id: Math.random().toString(),
              task,
              completed: false,
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
          autoComplete='off'
        />
        <BlueButton type='submit'>
          <P_BodyText>Add</P_BodyText>
        </BlueButton>
      </CustomForm>
      <Div_ButtonContainer>{filterList}</Div_ButtonContainer>
      <Ul_List>
        {toDos.filter(filterMap[filter as keyof object]).map(toDo => (
          <ToDo
            id={toDo.id}
            key={toDo.id}
            task={toDo.task}
            completed={toDo.completed}
            deleteToDo={deleteToDo}
            toggleCompleted={toggleCompleted}
            editToDoList={editToDoList}
          />
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

const Ul_List = styled.ul`
  padding: ${styles.spacing.sm};
  width: 70%;
  ${breakpoint.tabletPortrait} {
    width: 90%;
  }
  ${breakpoint.phone} {
    width: 100%;
  }
`
const Div_ButtonContainer = styled(Div_FlexContainer)`
  ${breakpoint.phone} {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`
