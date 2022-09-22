import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container, Div_FlexContainer } from '../components/Container'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText, P_BodyTextXsGrey } from '../components/BodyText'
import { ToDo } from './ToDo'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import { genericHookContextBuilder } from '../utils/genericHookContextBuilder'
import { idGenerator } from '../utils/idGenerator'
import { lsToDoListKey } from '../helpers/lsKeys'
import { useLocalStorage } from '../utils/useLocalStorage'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type ToDoProps = {
  id: string
  task: string
  completed: boolean
}

const useLogicState = () => {
  const [toDos, setToDos] = useLocalStorage(lsToDoListKey, [] as ToDoProps[])
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

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const toDos = Array.from(toDoLogic.toDos)
    const [reorderedToDo] = toDos.splice(result.source.index, 1)
    toDos.splice(result.destination.index, 0, reorderedToDo)
    toDoLogic.setToDos(toDos)
  }

  return (
    <>
      <Helmet>
        <title>Katarína Soušková | ToDo List</title>
      </Helmet>
      <Div_Container>
        <H_Heading>What needs to be done?</H_Heading>
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='toDoList'>
            {provided => (
              <Ul_List {...provided.droppableProps} ref={provided.innerRef}>
                {toDoLogic.toDos.filter(filterMap[filter]).map((toDo, index) => (
                  <Draggable key={toDo.id} draggableId={toDo.id} index={index}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ToDo
                          id={toDo.id}
                          key={toDo.id}
                          task={toDo.task}
                          completed={toDo.completed}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Ul_List>
            )}
          </Droppable>
        </DragDropContext>
        {activeToDos.length >= 1 && (
          <P_BodyTextXsGrey>
            {activeToDos.length === 1
              ? `${activeToDos.length} task left`
              : `${activeToDos.length} tasks left`}
          </P_BodyTextXsGrey>
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
    </>
  )
}

const Ul_List = styled.ul`
  padding: ${styles.spacing.xs};
  width: 70%;
  list-style: none;
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
