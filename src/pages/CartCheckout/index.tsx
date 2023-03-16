import {ThemeProvider} from 'styled-components'
import { CartContent } from '../../Components/Cart'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'
import { Checkout } from '../../Components/CartCheckout'

export function CheckoutCart() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Checkout />
      <Footer />
    </ThemeProvider>
  )

  
}
export { CartContent }

