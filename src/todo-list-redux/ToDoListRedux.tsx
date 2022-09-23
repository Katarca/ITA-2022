import { AppDispatch, RootState } from './store'
import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container, Div_FlexContainer } from '../components/Container'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText, P_BodyTextXsGrey } from '../components/BodyText'
import { ToDoProps } from './ToDoAppRedux'
import { ToDoRedux } from './ToDoRedux'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import { ReactComponent as crossIcon } from './icons/cross-icon.svg'
import { toDoActions } from './toDoSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import styled from 'styled-components'

const getState = (state: RootState) => state

export const ToDoListRedux = () => {
  const [task, setTask] = useState('')

  const toDos = useSelector(getState)

  const dispatch = useDispatch<AppDispatch>()

  const [filter, setFilter] = useState('all' as keyof typeof filterMap)

  const filterMap = {
    all: () => true,
    active: (toDo: ToDoProps) => !toDo.completed,
    completed: (toDo: ToDoProps) => toDo.completed,
  }

  const activeToDos = toDos.filter(filterMap['active'])

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    dispatch(
      toDoActions.sortToDos({
        dragItem: result.source.index,
        dragOverItem: result.destination.index,
      })
    )
  }

  return (
    <>
      <Helmet>
        <title>Katarína Soušková | ToDo List Redux</title>
      </Helmet>
      <Div_Container>
        <H_Heading>What needs to be done?</H_Heading>
        <CustomForm
          onSubmit={e => {
            e.preventDefault()
            if (task.trim().length === 0) {
              return
            }
            dispatch(toDoActions.addToDo(task))
            setTask('')
          }}
        >
          <ToDoInput
            type='text'
            placeholder='task'
            value={task}
            onChange={e => setTask(e.target.value)}
            autoComplete='off'
          />
          <PlusButton>
            <PlusIcon />
          </PlusButton>
        </CustomForm>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='toDoListRedux'>
            {provided => (
              <Ul_List {...provided.droppableProps} ref={provided.innerRef}>
                {toDos.filter(filterMap[filter]).map((toDo, index) => (
                  <Draggable key={toDo.id} draggableId={toDo.id} index={index}>
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ToDoRedux id={toDo.id} task={toDo.task} completed={toDo.completed} />
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

const ToDoInput = styled(CustomInput)`
  ${breakpoint.phone} {
    max-width: 60%;
  }
`

const PlusButton = styled(TransparentButtonBorder)`
  ${breakpoint.phone} {
    width: fit-content;
  }
`

const PlusIcon = styled(crossIcon)`
  fill: ${styles.colors.white};
  transform: rotate(45deg);
`
