export const formatAmount = (amount: number) =>
  Math.round(amount).toLocaleString('en-US').replaceAll(',', ' ')

export const roundAmount = (amount: number) => Math.round(amount)
