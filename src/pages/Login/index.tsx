import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { LoginContent } from '../../Components/LoginContent'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function Login() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <LoginContent />
      <Footer />
    </ThemeProvider>
  )

  
}
