// Bibliotecas Externas
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Estilização
import { GlobalStyle } from '../global'
import theme from '@/global/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
