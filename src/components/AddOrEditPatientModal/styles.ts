import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { styled } from '../../styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Form = styled('form', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',

  width: 400,
  height: 500,
  backgroundColor: '$white',
  borderRadius: '$xl',

  h2: {
    margin: '0 auto',
    marginTop: '$6',
    color: '$gray800',
  },

  '.submitButton': {
    width: 320,
    margin: '0 auto',
    marginTop: '$8',
    padding: '$4 $10',
    borderRadius: '$md',
    backgroundColor: '$purpleBlue',
    color: '$gray50',
    border: '1px solid $purpleBlueDark',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$purpleBlueDark',
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  border: 0,
  cursor: 'pointer',
  color: '$gray600',
  backgroundColor: 'transparent',
  lineHeight: 0,
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',

  input: {
    width: 320,
    margin: '0 auto',
    border: 0,
    borderBottom: '2px solid $gray100',
    outline: 0,
    padding: '$1',

    '&::placeholder': {
      fontSize: '$xs',
    },

    '&:focus': {
      borderBottom: '2px solid $gray300',
    },
  },
})

export const Message = styled('span', {
  width: 320,
  margin: '0 auto',
  fontSize: '$xxs',

  // variant disabled ---------------------
  variants: {
    disabled: {
      true: {
        color: '$white',
      },
      false: {
        color: '$purpleBlue',
      },
    },
  },

  defaultVariants: {
    disabled: true,
  },
  // --------------------------------------
})

export const GenderContainer = styled(RadioGroup.Root, {
  display: 'flex',
  gap: '$6',
  width: 320,
  margin: '0 auto',
  marginTop: '$4',
  alignItems: 'center',
  justifyContent: 'center',
})

export const GenderOption = styled(RadioGroup.Item, {
  border: '2px solid $gray200',
  borderRadius: '$md',
  backgroundColor: 'transparent',
  padding: '$2 $8',
  cursor: 'pointer',
  color: '$gray500',

  '&[data-state="unchecked"]:hover': {
    border: '2px solid $gray300',
  },

  '&[data-state="checked"]': {
    color: '$gray800',
    border: '2px solid $purpleBlue',
  },
})
