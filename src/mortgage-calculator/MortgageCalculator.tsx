import { BlueButton } from '../components/Button'
import { CustomInput } from '../components/Input'
import { Div_Container } from '../components/Container'
import { Form } from '../components/Form'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_BodyText, P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { formatAmount } from '../utils/formatAmount'
import { urls } from '../helpers/urls'
import LoanJS from 'loanjs'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Installments = {
  capital: number
  interest: number
  installment: number
  remain: number
  interestSum: number
}

export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1500000)
  const [interestRate, setInterestRate] = useState(4.8)
  const [numYears, setNumYears] = useState(5)
  const [loanData, setLoanData] = useState([] as Installments[])
  const [windowWidth, setWindowWidth] = useState(undefined as undefined | number)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const calculateLoan = () => {
    if (loanAmount > 0 && interestRate > 0 && numYears > 0)
      setLoanData(LoanJS.Loan(loanAmount, numYears * 12, interestRate, true).installments)
  }

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
        </MCForm>
        <Div_ButtonContainer>
          <BlueButton
            onClick={() => calculateLoan()}
            disabled={loanAmount <= 0 || interestRate <= 0 || numYears <= 0}
          >
            <P_BodyText>See Details</P_BodyText>
          </BlueButton>
        </Div_ButtonContainer>
        {loanData.length > 0 && (
          <>
            {windowWidth && windowWidth > 900 ? (
              <Table_MCTable>
                <thead>
                  <tr>
                    <th>
                      <P_TableText>Month</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Payment Amount (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Interest Paid (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Principal Paid (CZK)</P_TableText>
                    </th>
                    <th>
                      <P_TableText>Remain (CZK)</P_TableText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.map((installment, i) => (
                    <tr key={i}>
                      <td>
                        <P_TableText>{i + 1}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(installment.installment)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(installment.interest)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(installment.capital)}</P_TableText>
                      </td>
                      <td>
                        <P_TableText>{formatAmount(installment.remain)}</P_TableText>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table_MCTable>
            ) : (
              <>
                {loanData.map((installment: Installments, i: number) => (
                  <Div_MobileContainer key={i}>
                    <P_TableText>{i + 1} month</P_TableText>
                    <P_TableText>
                      Payment amount: {formatAmount(installment.installment)} CZK
                    </P_TableText>
                    <P_TableText>
                      Interest paid: {formatAmount(installment.interest)} CZK
                    </P_TableText>
                    <P_TableText>
                      Principal paid: {formatAmount(installment.capital)} CZK
                    </P_TableText>
                    <P_TableText>Remain: {formatAmount(installment.remain)} CZK</P_TableText>
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
const Div_ButtonContainer = styled.div`
  padding: ${styles.spacing.sm};
`
