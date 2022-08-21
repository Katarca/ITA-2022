export const formatAmount = (amount: number) =>
  Math.ceil(amount).toLocaleString('en-US').replace(',', ' ')
