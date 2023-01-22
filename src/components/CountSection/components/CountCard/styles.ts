import { styled } from '../../../../styles'

export const CountCardContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flex: '1',

  border: '2px solid $gray200',
  borderRadius: '$lg',
  padding: '$4',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    h2: {
      fontSize: '$sm',
      color: '$gray600',
    },

    '.iconContainer': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '$1',
      width: 32,
      height: 32,
      padding: '$1',
      cursor: 'pointer',
      borderRadius: '$full',

      '&:hover': {
        backgroundColor: '$gray100',
      },

      svg: {
        color: '$gray400',
      },
    },
  },

  '.actions': {
    alignItems: 'flex-end',
  },
})

export const Counter = styled('span', {
  fontSize: '$4xl',
})
