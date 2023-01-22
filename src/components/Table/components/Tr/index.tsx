import { ReactNode } from 'react'
import { TrContainer } from './styles'

interface TrProps {
  type?: 'head' | 'body'
  lastChild?: 'true' | 'false'
  children?: ReactNode
}

export function Tr({ type, lastChild, children }: TrProps) {
  return (
    <TrContainer lastChild={lastChild} type={type}>
      {children}
    </TrContainer>
  )
}
