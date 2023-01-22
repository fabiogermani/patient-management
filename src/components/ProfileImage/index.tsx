import { ReactNode } from 'react'
import { ProfileImageContainer } from './styles'

interface ProfileImageProps {
  color: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  children?: ReactNode
}

export function ProfileImage({ color, children }: ProfileImageProps) {
  return <ProfileImageContainer color={color}>{children}</ProfileImageContainer>
}
