import { BadgeContainer } from './styles'

interface BadgeProps {
  content: string
  type: 'total' | 'active' | 'inactive'
}

export function Badge({ content, type }: BadgeProps) {
  return <BadgeContainer type={type}>{content}</BadgeContainer>
}
