import { styled } from '../../../../styles'

export const TrContainer = styled('div', {
  display: 'flex',

  // Variant type ------------------
  variants: {
    type: {
      head: {
        border: '2px solid $gray200',
        backgroundColor: '$gray100',
        padding: '$2 0',
        borderTopRightRadius: '$md',
        borderTopLeftRadius: '$md',
      },
      body: {
        padding: '$4 0',
        border: '2px solid $gray200',
        borderTop: 0,
      },
    },
    lastChild: {
      true: {
        borderBottomLeftRadius: '$md',
        borderBottomRightRadius: '$md',
      },
      false: {},
    },
  },

  defaultVariants: {
    type: 'body',
    lastChild: 'false',
  },
  // ---------------------------------
})
