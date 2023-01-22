import { ReactNode } from 'react'
import { ThContainer } from './styles'

interface ThProps {
  w?: '1' | '2'
  children?: ReactNode
}

export function Th({ w, children }: ThProps) {
  return <ThContainer w={w}>{children}</ThContainer>
}
