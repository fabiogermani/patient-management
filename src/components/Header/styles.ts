import { styled } from '../../styles'

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const TopContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: '$8',
  marginBottom: '$6',

  h1: {
    fontSize: '$3xl',
    color: '$gray800',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$2',

      borderRadius: '$lg',
      padding: '$2 $4',
      cursor: 'pointer',
    },
  },
})

export const ImportButton = styled('button', {
  border: '2px solid $gray200',
  backgroundColor: 'transparent',
  color: '$gray600',
  fontWeight: '$medium',

  '&:hover': {
    backgroundColor: '$gray200',
  },
})

export const AddButton = styled('button', {
  border: '2px solid $purpleBlueDark',
  backgroundColor: '$purpleBlue',
  color: '$gray100',
  fontWeight: '$medium',

  '&:hover': {
    backgroundColor: '$purpleBlueDark',
  },
})

export const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',

  paddingBottom: '$4',
  listStyle: 'none',

  li: {
    fontWeight: '$medium',
    fontSize: '$sm',
    borderBottom: '2px solid $gray200',
    padding: '0 $3 $4',
    cursor: 'pointer',

    '&:hover': {
      borderBottom: '2px solid $gray300',
    },

    '&:first-child': {
      color: '$purpleBlue',
      borderBottom: '2px solid $purpleBlue',
    },

    '&:last-child': {
      flex: '1',
    },
  },
})
