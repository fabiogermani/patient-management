import { ReactNode } from 'react'
import { TdContainer } from './styles'

interface TdProps {
  name?: 'true' | 'false'
  empty?: 'true' | 'false'
  w?: '1' | '2'
  children: ReactNode
}

export function Td({ name, empty, w, children }: TdProps) {
  return (
    <TdContainer empty={empty} name={name} w={w}>
      {children}
    </TdContainer>
  )
}
