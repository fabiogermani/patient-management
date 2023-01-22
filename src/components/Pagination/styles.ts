import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '$4 0',

  button: {
    fontSize: '$sm',
    borderRadius: '$md',
    border: '1px solid $gray200',
    color: '$gray700',
    padding: '$1 $4',
    cursor: 'pointer',
    backgroundColor: '$gray100',

    '&:hover': {
      backgroundColor: '$gray50',
    },
  },

  div: {
    fontSize: '$sm',
    borderRadius: '$md',
    border: '1px solid $gray200',
    color: '$gray700',
    padding: '$1 $4',
    backgroundColor: '$gray100',
  },
})
