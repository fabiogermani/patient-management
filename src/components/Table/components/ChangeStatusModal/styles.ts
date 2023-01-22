import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled } from '../../../../styles'

export const Overlay = styled(AlertDialog.Trigger, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(AlertDialog.Content, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: 400,
  height: 150,
  backgroundColor: '$white',
  borderRadius: '$lg',
})

export const Title = styled(AlertDialog.Title, {
  color: '$gray800',
})

export const Description = styled(AlertDialog.Description, {
  marginTop: '$4',
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  gap: '$6',

  marginTop: '$4',
})

export const CancelButton = styled(AlertDialog.Cancel, {
  height: 40,
  width: 80,
  backgroundColor: '$gray100',
  color: '$gray500',
  border: 0,
  borderRadius: '$md',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray200',
  },
})

export const InactiveButton = styled(AlertDialog.Action, {
  height: 40,
  width: 80,
  backgroundColor: '$red100',
  color: '$red500',
  border: 0,
  borderRadius: '$md',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$red200',
  },
})

export const ActiveButton = styled(AlertDialog.Action, {
  height: 40,
  width: 80,
  backgroundColor: '$green100',
  color: '$green500',
  border: 0,
  borderRadius: '$md',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green200',
  },
})
