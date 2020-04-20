import { useEffect } from 'react'

interface Params {
  handleWheel: (params?: any) => void;
}

export const useWheel = ({ handleWheel }: Params) => {
  useEffect(() => {
    window.addEventListener('wheel', handleWheel)

    return (() => window.removeEventListener('wheel', handleWheel))
  }, [handleWheel])
}
