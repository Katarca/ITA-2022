import { useEffect } from 'react'

export const useComponentDidMount = (func: () => void) => {
  useEffect(() => {
    func()
  }, [])
}
