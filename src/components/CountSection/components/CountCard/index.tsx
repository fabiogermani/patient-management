import { CountCardContainer, Counter } from './styles'

import { DotsThreeVertical } from 'phosphor-react'
import { Badge } from '../../../Badge'

interface CountCardProps {
  title: string
  type: 'total' | 'active' | 'inactive'
  value: string
  percentage: string
}

export function CountCard({ title, type, value, percentage }: CountCardProps) {
  return (
    <CountCardContainer>
      <div>
        <h2>{title}</h2>
        <Counter>{value}</Counter>
      </div>

      <div className="actions">
        <span className="iconContainer">
          <DotsThreeVertical size={24} weight="bold" />
        </span>
        <Badge content={`${percentage}%`} type={type}></Badge>
      </div>
    </CountCardContainer>
  )
}
