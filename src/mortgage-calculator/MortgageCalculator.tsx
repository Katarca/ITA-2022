import { BlueButton } from '../components/Button'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const calculatePayment = (loan: number, rate: number, years: number) => {
  const monthlyRate = rate / 100 / 12
  const months = years * 12
  return (
    (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  )
}

export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1500000)
  const [interestRate, setInterestRate] = useState(4.8)
  const [numYears, setNumYears] = useState(5)
  const monthlyPayment = calculatePayment(loanAmount, interestRate, numYears)

  const handleReset = () => {
    setLoanAmount(0)
    setInterestRate(0)
    setNumYears(0)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Mortgage Calculator</title>
      </Helmet>
      <Div_Container>
        <H_MCHeading>Mortgage Calculator</H_MCHeading>
        <MCForm onReset={() => handleReset()}>
          <Div_InputsContainer>
            <Div_InputWrapper>
              <Label_MCLabel>Loan Amount (CZK)</Label_MCLabel>
              <CustomInput_MCInput
                type='number'
                defaultValue={loanAmount}
                onChange={e => setLoanAmount(Number(e.target.value))}
              />
            </Div_InputWrapper>
            <Div_InputWrapper>
              <Label_MCLabel>Interest Rate (%)</Label_MCLabel>
              <CustomInput_MCInput
                type='number'
                defaultValue={interestRate}
                onChange={e => setInterestRate(Number(e.target.value))}
              />
            </Div_InputWrapper>
            <Div_InputWrapper>
              <Label_MCLabel>Loan Term (years)</Label_MCLabel>
              <CustomInput_MCInput
                type='number'
                defaultValue={numYears}
                onChange={e => setNumYears(Number(e.target.value))}
              />
            </Div_InputWrapper>
          </Div_InputsContainer>
          <BlueButton type='reset'>
            <P_BodyText>Clear inputs</P_BodyText>
          </BlueButton>
        </MCForm>
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
`

const MCForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const CustomInput_MCInput = styled(CustomInput)`
  width: 90%;
`

const Div_InputsContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.sm};
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
  }
`

const Div_PaymentContainer = styled.div`
  padding: ${styles.spacing.sm};
  margin: ${styles.spacing.md} 0;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${styles.colors.grey500};
  border-radius: 8px;
  ${breakpoint.phone} {
    max-width: 70%;
  }
  ${breakpoint.miniPhone} {
    max-width: 90%;
  }
`

const Div_InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint.tabletPortrait} {
    &:not(:last-child) {
      margin-bottom: ${styles.spacing.sm};
    }
  }
`

const Label_MCLabel = styled.label`
  width: 100%;
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
  padding: 0 ${styles.spacing.xs};
`
