import { ThemeProvider } from 'styled-components'
import { AdmProdutos } from '../../Components/AdmPanel/produtos'
import { AdmPedidos } from '../../Components/AdmPanel/pedidos'
import { AdmUsuarios } from '../../Components/AdmPanel/usuarios'
import { AdmCategorias } from '../../Components/AdmPanel/Categorias'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function AdmProducts() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AdmProdutos />
      <Footer />
    </ThemeProvider>
  )


}
export function AdmUsers() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AdmUsuarios />
      <Footer />
    </ThemeProvider>
  )


}
export function AdmOrders() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AdmPedidos />
      <Footer />
    </ThemeProvider>
  )


}
export function AdmCategories() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AdmCategorias />
      <Footer />
    </ThemeProvider>
  )


}


