import { BlueButton } from '../components/Button'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { filterUrl, urls } from '../helpers/urls'
import { styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type User = {
  id: string
  name: string
  email: string
}

export const HttpFilter = () => {
  const [searchTerm, setSearchTerm] = useState(null as null | string)
  const [emptyInputError, setEmptyInputError] = useState(null as null | string)

  const [userData, setUserData] = useState([] as User[])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [noResult, setNoResult] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(p => !p)
      setErrorMsg('')
      const response = await fetch(`${filterUrl}${searchTerm}`)
      if (!response.ok) {
        throw Error
      } else {
        const json = await response.json()
        if (json.length === 0) {
          setLoading(p => !p)
          setErrorMsg(p => p)
          setNoResult(true)
        } else {
          setUserData(json)
          setLoading(p => !p)
          setErrorMsg(p => p)
          setNoResult(false)
        }
      }
    } catch (error) {
      console.error(error)
      setUserData([])
      setLoading(p => !p)
      setNoResult(p => !p)
      setErrorMsg(`An error occurred while fetching users`)
    }
  }

  const loadingJSX = (
    <Div_MsgContainer>
      <P_BodyText>{loading}</P_BodyText>
    </Div_MsgContainer>
  )

  const errorJSX = (
    <Div_MsgContainer>
      <P_BodyText>{errorMsg}</P_BodyText>
    </Div_MsgContainer>
  )

  const noResultJSX = (
    <Div_MsgContainer>
      <P_BodyText>No results</P_BodyText>
    </Div_MsgContainer>
  )

  const dataJSX = (
    <div>
      {userData?.map(user => (
        <Div_UserBox key={user.id}>
          <P_BodyText>{user.name}</P_BodyText>
          <P_BodyText>{user.email}</P_BodyText>
        </Div_UserBox>
      ))}
    </div>
  )

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Http Filter</title>
      </Helmet>
      <Div_Container>
        <H_HFHeading>Http Filter</H_HFHeading>
        <Form
          onSubmit={e => {
            e.preventDefault()
            if (!searchTerm) {
              setEmptyInputError('Enter value')
              return
            }
            fetchData()
            setEmptyInputError(null)
          }}
        >
          <div>
            <CustomInput
              type='text'
              placeholder='search user'
              onChange={e => setSearchTerm(e.target.value)}
            />
            <BlueButton type='submit'>
              <P_BodyText>Search</P_BodyText>
            </BlueButton>
          </div>
          {emptyInputError && (
            <Div_MsgContainer>
              <P_BodyText>Please enter value</P_BodyText>
            </Div_MsgContainer>
          )}
        </Form>
        <Div_UsersContainer>
          {loading ? loadingJSX : errorMsg ? errorJSX : noResult ? noResultJSX : dataJSX}
        </Div_UsersContainer>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </HelmetProvider>
  )
}

const H_HFHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
`

const Div_UsersContainer = styled.div`
  padding: ${styles.spacing.md};
`
const Div_UserBox = styled.div`
  background-color: ${styles.colors.grey500};
  border-radius: 8px;
  padding: ${styles.spacing.sm};
  margin: ${styles.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${styles.spacing.xs};
`
const Div_MsgContainer = styled.div`
  margin: ${styles.spacing.xs};
`
