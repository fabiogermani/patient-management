import { styled } from '../../styles'

export const SearchSectionContainer = styled('section', {
  width: '100%',
  maxWidth: 1080,

  display: 'flex',
  justifyContent: 'space-between',

  marginTop: '$4',

  div: {
    position: 'relative',
  },

  input: {
    padding: '$3',
    paddingLeft: '$8',
    fontSize: '$sm',
    borderRadius: '$md',
    border: '1px solid $gray200',
    color: '$gray700',
    width: 300,

    '&:focus': {
      outline: 0,
      backgroundColor: '$gray100',
    },
  },

  span: {
    position: 'absolute',
    left: 8,
    top: 12,
  },
})

export const SortButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const SortButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  fontSize: '$sm',
  borderRadius: '$md',
  border: '1px solid $gray200',
  color: '$gray700',
  padding: '$3 $4',
  cursor: 'pointer',
  backgroundColor: '$gray100',

  '&:hover': {
    backgroundColor: '$gray50',
  },

  variants: {
    on: {
      true: {
        backgroundColor: '$gray300',
      },
      false: {},
    },
  },
})
