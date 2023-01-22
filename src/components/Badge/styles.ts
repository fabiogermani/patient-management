import { styled } from '../../styles'

export const BadgeContainer = styled('span', {
  fontWeight: '$medium',
  fontSize: '$sm',
  padding: '$1 $2',
  borderRadius: '$xl',

  // Variant Type ------------------------
  variants: {
    type: {
      total: {
        backgroundColor: '$blue50',
        color: '$blue400',
      },
      active: {
        backgroundColor: '$green50',
        color: '$green400',
      },
      inactive: {
        backgroundColor: '$red50',
        color: '$red400',
      },
    },
  },
  // -------------------------------------
})
