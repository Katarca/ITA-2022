import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container, Div_FlexContainer } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { ToDo } from './ToDo'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { idGenerator } from '../utils/idGenerator'
import { urls } from '../helpers/urls'
import { useLocalStorage } from '../utils/useLocalStorage'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}

const useLogicState = () => {
  const [toDos, setToDos] = useLocalStorage('toDoListLs', [] as ToDoProps[])
  return {
    toDos,
    setToDos,
  }
}

export const { ContextProvider: ToDoContextProvider, Context: ToDoStateContext } =
  genericHookContextBuilder(useLogicState)

export const ToDoApp = () => {
  return (
    <ToDoContextProvider>
      <ToDoList />
    </ToDoContextProvider>
  )
}

const ToDoList = () => {
  const [task, setTask] = useState('')

  const toDoLogic = useContext(ToDoStateContext)

  const [filter, setFilter] = useState('all' as keyof typeof filterMap)

  const filterMap = {
    all: () => true,
    active: (toDo: ToDoProps) => !toDo.completed,
    completed: (toDo: ToDoProps) => toDo.completed,
  }

  const activeToDos = toDoLogic.toDos.filter(filterMap['active'])

  return (
    <HelmetProvider>
      <Div_Container>
        <Helmet>
          <title>Katarína Soušková | ToDo List</title>
        </Helmet>
        <H_TodoHeading>ToDo List</H_TodoHeading>
        <CustomForm
          onSubmit={e => {
            e.preventDefault()
            if (task.trim().length === 0) {
              return
            }
            toDoLogic.setToDos([
              {
                id: idGenerator(),
                task,
                completed: false,
              },
              ...toDoLogic.toDos,
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
        </CustomForm>
        <Ul_List>
          {toDoLogic.toDos.filter(filterMap[filter]).map(toDo => (
            <ToDo id={toDo.id} key={toDo.id} task={toDo.task} completed={toDo.completed} />
          ))}
        </Ul_List>
        {activeToDos.length >= 1 && (
          <P_TaskText>
            {activeToDos.length === 1
              ? `${activeToDos.length} task left`
              : `${activeToDos.length} tasks left`}
          </P_TaskText>
        )}
        <Div_ButtonContainer>
          <TransparentButtonBorder onClick={() => setFilter('all')} aria-pressed={'all' === filter}>
            <P_BodyText>All</P_BodyText>
          </TransparentButtonBorder>
          <TransparentButtonBorder
            onClick={() => setFilter('active')}
            aria-pressed={'active' === filter}
          >
            <P_BodyText>Active</P_BodyText>
          </TransparentButtonBorder>
          <TransparentButtonBorder
            onClick={() => setFilter('completed')}
            aria-pressed={'completed' === filter}
          >
            <P_BodyText>Completed</P_BodyText>
          </TransparentButtonBorder>
        </Div_ButtonContainer>
      </Div_Container>
    </HelmetProvider>
  )
}

const H_TodoHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.lg};
`

const Ul_List = styled.ul`
  padding: ${styles.spacing.xs};
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
const P_TaskText = styled(P_BodyText)`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.grey300};
`
