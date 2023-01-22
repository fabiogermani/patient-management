import { styled } from '../../styles'

export const SidebarContainer = styled('aside', {
  position: 'fixed',

  width: '100%',
  maxWidth: 200,
  height: '100%',

  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: ' space-between',

  borderRight: '2px solid $gray200',
  padding: '$4',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    listStyle: 'none',
    color: '$gray600',
    fontWeight: '$semibold',
    fontSize: '$sm',

    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',

      padding: '$2',
      borderRadius: '$md',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$blue50',
      },

      svg: {
        color: '$gray600',
      },
    },
  },

  '> div': {
    display: 'flex',
    gap: '$2',
  },
})

export const TopList = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  img: {
    margin: '$4 0',
  },

  li: {
    '&:nth-child(2)': {
      backgroundColor: '$blue50',
      color: '$purpleBlue',

      svg: {
        color: '$purpleBlue',
      },
    },
  },
})

export const BottomList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Profile = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  padding: '$3',
  border: '1px solid $gray200',
  borderRadius: '$lg',
  marginTop: '$4',
  cursor: 'pointer',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  img: {
    borderRadius: '$full',
  },

  h3: {
    fontSize: '$xs',
    color: '$gray600',
  },

  span: {
    display: 'block',
    fontSize: '$xs',
    color: '$gray500',
  },

  '&:hover': {
    backgroundColor: '$gray100',
  },
})
