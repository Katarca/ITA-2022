export const formatAmount = (amount: number) =>
  Math.abs(Math.round(amount)).toLocaleString('en-US').replaceAll(',', ' ')
