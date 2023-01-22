import { styled } from '../../../../styles'

export const TdContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '$2',

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
    name: {
      true: {
        justifyContent: 'flex-start',
      },
      false: {
        justifyContent: 'center',
      },
    },
    empty: {
      true: {
        color: '$gray400',
      },
      false: {},
    },
  },

  defaultVariants: {
    w: '1',
    name: 'false',
    empty: 'false',
  },
  // -----------------------------------

  svg: {
    color: '$gray600',
    cursor: 'pointer',

    '&:hover': {
      color: '$gray500',
    },
  },
})
