export const loadState = <T>(key: string, initialValue: T) => {
  if (typeof window === 'undefined') {
    return initialValue
  }
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.error()
    return initialValue
  }
}

export const saveState = <T>(key: string, state: T) => {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(state))
    }
  } catch (error) {
    console.error()
  }
}
