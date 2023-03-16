import {ThemeProvider} from 'styled-components'
import { UserPedidos } from '../../Components/UserPanel'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function UserOrders() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <UserPedidos />
      <Footer />
    </ThemeProvider>
  )

  
}