import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const paymentCalc = (loan: number, rate: number, months: number) => {
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
  const monthlyPayment = paymentCalc(loanAmount, interestRate, numMonths)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Mortgage Calculator</title>
      </Helmet>
      <Div_Container>
        <H_MCHeading>Mortgage Calculator</H_MCHeading>
        <div>
          <CustomInput
            type='number'
            placeholder='Loan Amount'
            onChange={e => setLoanAmount(Number(e.target.value))}
          />
          <CustomInput
            type='number'
            placeholder='Interest Rate'
            onChange={e => setInterestRate(Number(e.target.value))}
          />
          <CustomInput
            type='number'
            placeholder='Number of Months'
            onChange={e => setNumMonths(Number(e.target.value))}
          />
          <P_BodyText>
            Estimated monthly payments{' '}
            {!monthlyPayment || !isFinite(monthlyPayment) ? '0.00' : monthlyPayment.toFixed(2)} CZK
          </P_BodyText>
        </div>
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
