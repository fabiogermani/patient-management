import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { PatientContextProvider } from '../contexts/PatientContext'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PatientContextProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </PatientContextProvider>
  )
}
