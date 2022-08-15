import { BlueButton } from '../components/Button'
import { CustomForm } from '../components/Form'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const calculatePayment = (loan: number, rate: number, months: number) => {
  const monthlyRate = rate / 100 / 12
  return (
    (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  )
}

export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [numMonths, setNumMonths] = useState(0)
  const monthlyPayment = calculatePayment(loanAmount, interestRate, numMonths)

  const handleReset = () => {
    setLoanAmount(0)
    setInterestRate(0)
    setNumMonths(0)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Mortgage Calculator</title>
      </Helmet>
      <Div_Container>
        <H_MCHeading>Mortgage Calculator</H_MCHeading>
        <CustomForm_MCForm onReset={() => handleReset()}>
          <Div_InputContainer>
            <CustomInput_MCInput
              type='number'
              placeholder='loan amount'
              onChange={e => setLoanAmount(Number(e.target.value))}
            />
            <CustomInput_MCInput
              type='number'
              placeholder='interest rate'
              onChange={e => setInterestRate(Number(e.target.value))}
            />
            <CustomInput_MCInput
              type='number'
              placeholder='number of months'
              onChange={e => setNumMonths(Number(e.target.value))}
            />
          </Div_InputContainer>
          <BlueButton type='reset'>
            <P_BodyText>Clear inputs</P_BodyText>
          </BlueButton>
        </CustomForm_MCForm>
        <Div_PaymentContainer>
          <P_BodyText>
            Estimated monthly payments{' '}
            {!monthlyPayment || !isFinite(monthlyPayment) ? '0.00' : monthlyPayment.toFixed(2)} CZK
          </P_BodyText>
        </Div_PaymentContainer>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </HelmetProvider>
  )
}

const H_MCHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
  text-align: center;
`

const CustomForm_MCForm = styled(CustomForm)`
  flex-direction: column;
  align-items: center;
`

const Div_InputContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.sm};
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
  }
`

const Div_PaymentContainer = styled.div`
  padding: ${styles.spacing.sm};
  display: flex;
  justify-content: center;
  text-align: center;
`
const CustomInput_MCInput = styled(CustomInput)`
  width: 100%;
`
