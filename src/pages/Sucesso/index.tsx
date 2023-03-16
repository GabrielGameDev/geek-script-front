import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { CheckoutSucess } from '../../Components/Sucesso'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function SucessCheck() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <CheckoutSucess />
      <Footer />
    </ThemeProvider>
  )

  
}
