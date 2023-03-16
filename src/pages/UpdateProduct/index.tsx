import {ThemeProvider} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'
import { UpdateProduct } from '../../Components/Update'

export function UpdateProductPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <UpdateProduct />
      <Footer />
    </ThemeProvider>
  )

  
}
