import { BlueButton } from '../components/Button'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

type User = {
  id: string
  name: string
  email: string
}

export const HttpFilter = () => {
  const [data, setData] = useState([] as User[])
  const [searchTerm, setSearchTerm] = useState(null as null | string)

  const url = process.env.REACT_APP_URL

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      setData(await response.json())
    } catch (error) {
      console.error(error)
    }
  }

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
            fetchData()
          }}
        >
          <CustomInput
            type='text'
            placeholder='search user'
            onChange={e => setSearchTerm(e.target.value)}
          />
          <BlueButton type='submit'>
            <P_BodyText>Search</P_BodyText>
          </BlueButton>
        </Form>
        <Div_UsersContainer>
          {data &&
            data.map(user => (
              <Div_UserBox key={user.id}>
                <P_BodyText>{user.name}</P_BodyText>
                <P_BodyText>{user.email}</P_BodyText>
              </Div_UserBox>
            ))}
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
