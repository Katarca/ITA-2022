import { Button } from '../components/Button'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Input } from '../components/Input'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

type ToDo = {
  id: string
  task: string
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

  const setToDos = (toDos: ToDo[]) => {
    localStorage.setItem(lsId.toDos, JSON.stringify(toDos))
    _setToDos(toDos)
  }

  return (
    <Div_Container>
      <H_TodoHeading>ToDo List</H_TodoHeading>
      <Form
        onSubmit={e => {
          e.preventDefault()
          setToDos([
            {
              id: Math.random().toString(),
              task,
            },
            ...toDos,
          ])
          setTask('')
        }}
      >
        <Input
          type='text'
          placeholder='task'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <Button type='submit'>
          <P_BodyText>Add</P_BodyText>
        </Button>
      </Form>
      <Div_FlexContainer>
        <Button>
          <P_BodyText>All</P_BodyText>
        </Button>
        <Button>
          <P_BodyText>Active</P_BodyText>
        </Button>
        <Button>
          <P_BodyText>Completed</P_BodyText>
        </Button>
      </Div_FlexContainer>
      <Div_Wrapper>
        {toDos.map(toDo => (
          <P_BodyText key={toDo.id}>{toDo.task}</P_BodyText>
        ))}
      </Div_Wrapper>
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
  padding: ${styles.spacing.sm};
`
const Div_Wrapper = styled.div`
  padding: ${styles.spacing.md};
`
