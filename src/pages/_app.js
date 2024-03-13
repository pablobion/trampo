import '../styles/globals.css'
import { setCookie } from '../services/cookies'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../contexts/AuthContext'
import RootLayout from '../../layouts/RootLayout/RootLayout'
import theme from '../services/_theme'
import i18n from '../services/i18n' // Importe a configuração do i18n
import MyComponent from '../services/i18n'
import { useEffect, useState } from 'react'


export default function App ({ Component, pageProps }) {
  
  return (
      <ChakraProvider theme={theme}>
          <AuthProvider>
              <RootLayout>
                  <Component {...pageProps} />
              </RootLayout>
          </AuthProvider>
      </ChakraProvider>
  );
}
