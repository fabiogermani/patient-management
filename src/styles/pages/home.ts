import { styled } from '..'

export const HomeContainer = styled('div', {
  height: '100vh',
  width: '100vw',

  display: 'flex',
})

export const Content = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  maxWidth: 1080,
  marginLeft: 'calc((100vw - 1080px + 200px) / 2)',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
