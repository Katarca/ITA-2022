import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, device, styles } from '../helpers/theme'
import { formatAmount } from '../utils/formatAmount'
import { urls } from '../helpers/urls'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const calculateAmortization = (arg: { principal: number; interestRate: number; years: number }) => {
  const monthlyRate = arg.interestRate / 100 / 12
  const months = arg.years * 12
  const payment = arg.principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)))

  const mortgageData = [
    {
      monthlyPayment: payment,
      balance: arg.principal - (payment - arg.principal * monthlyRate),
      monthlyPrincipal: arg.principal * monthlyRate,
      monthlyInterest: payment - arg.principal * monthlyRate,
    },
  ]

  for (let i = 1; i < months; i++) {
    mortgageData.push({
      monthlyPayment: payment,
      balance: mortgageData[i - 1].balance - (payment - mortgageData[i - 1].balance * monthlyRate),
      monthlyInterest: mortgageData[i - 1].balance * monthlyRate,
      monthlyPrincipal: payment - mortgageData[i - 1].balance * monthlyRate,
    })
  }

  return mortgageData
}

type LoanDetails = ReturnType<typeof calculateAmortization>

export const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(1500000)
  const [interestRate, setInterestRate] = useState(4.8)
  const [years, setYears] = useState(5)
  const [windowWidth, setWindowWidth] = useState(undefined as undefined | number)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const loanDetail = calculateAmortization({ principal, interestRate, years })

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Mortgage Calculator</title>
      </Helmet>
      <Div_Container>
        <H_MCHeading>Mortgage Calculator</H_MCHeading>
        <MCForm>
          <Div_InputsContainer>
            <Div_InputWrapper>
              <Label_MCLabel>Loan Amount (CZK)</Label_MCLabel>
              <CustomInput_MCInput
                type='number'
                defaultValue={principal}
                onChange={e => setPrincipal(Number(e.target.value))}
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
                defaultValue={years}
                onChange={e => setYears(Number(e.target.value))}
              />
            </Div_InputWrapper>
          </Div_InputsContainer>
        </MCForm>
        {principal > 0 && interestRate > 0 && years > 0 && loanDetail.length > 0 && (
          <>
            {windowWidth && windowWidth > device.tabletPortrait ? (
              <Table_MCTable>
                <thead>
                  <tr>
                    <th>
                      <P_TableText>Month</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Monthly Payment (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Balance (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Interest Paid (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Principal Paid (CZK)</P_TableText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loanDetail.map((data, i) => (
                    <tr key={i}>
                      <td>
                        <P_TableText>{i + 1}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(data.monthlyPayment)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(data.balance)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(data.monthlyInterest)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(data.monthlyPrincipal)}</P_TableText>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table_MCTable>
            ) : (
              <>
                {loanDetail.map((data, i) => (
                  <Div_MobileContainer key={i}>
                    <P_TableText>{i + 1} month</P_TableText>
                    <P_TableText>
                      Monthly payment: {formatAmount(data.monthlyPayment)} CZK
                    </P_TableText>
                    <P_TableText>Balance: {formatAmount(data.balance)} CZK</P_TableText>
                    <P_TableText>
                      Interest paid: {formatAmount(data.monthlyInterest)} CZK
                    </P_TableText>
                    <P_TableText>
                      Principal Paid: {formatAmount(data.monthlyPrincipal)} CZK
                    </P_TableText>
                  </Div_MobileContainer>
                ))}
              </>
            )}
          </>
        )}
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
const Table_MCTable = styled.table`
  width: 90%;
  text-align: center;
  padding: ${styles.spacing.sm};
  ${breakpoint.smallNotebook} {
    width: 100%;
    padding: ${styles.spacing.sm} 0;
  }
  ${breakpoint.phone} {
    overflow-x: scroll;
  }
`
const P_TableText = styled(P_BodyText)`
  padding: ${styles.spacing.xs} ${styles.spacing.xs} 0 ${styles.spacing.xs};
  font-size: ${styles.fontSize.xs};
`
const Div_MobileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${styles.spacing.xs};
  margin: ${styles.spacing.xs};
  border: 1px solid ${styles.colors.grey300};
  border-radius: 8px;
`
