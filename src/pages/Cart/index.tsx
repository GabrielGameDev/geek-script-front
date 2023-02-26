import {ThemeProvider} from 'styled-components'
import { CartContent } from '../../Components/Cart'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function Cart() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <CartContent />
      <Footer />
    </ThemeProvider>
  )

  
}
export { CartContent }

