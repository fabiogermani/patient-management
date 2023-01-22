import { styled } from '../../../../styles'

export const ThContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // Variant w ------------------------
  variants: {
    w: {
      1: {
        flex: '1',
      },
      2: {
        flex: 2,
      },
    },
  },

  defaultVariants: {
    w: '1',
  },
  // -----------------------------------
})
