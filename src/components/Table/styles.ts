import { styled } from '../../styles'

export const TableContainer = styled('div', {
  width: '100%',
  maxWidth: 1080,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '$4',
})

export const TableBox = styled('div', {
  width: '100%',
})

export const Thead = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Tbody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BadgeButton = styled('button', {
  border: 0,
  borderRadius: '$xl',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})
