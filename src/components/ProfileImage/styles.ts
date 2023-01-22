import { styled } from '../../styles'

export const ProfileImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginRight: '$2',
  width: 35,
  height: 35,
  borderRadius: '$full',
  color: '$gray50',

  // Variant Color ------------------------
  variants: {
    color: {
      1: {
        backgroundColor: '$yellow500',
      },
      2: {
        backgroundColor: '$red500',
      },
      3: {
        backgroundColor: '$blue500',
      },
      4: {
        backgroundColor: '$green500',
      },
      5: {
        backgroundColor: '$pink500',
      },
      6: {
        backgroundColor: '$purple500',
      },
      7: {
        backgroundColor: '$cyan500',
      },
      8: {
        backgroundColor: '$teal500',
      },
      9: {
        backgroundColor: '$orange500',
      },
    },
  },
  // --------------------------------------
})
