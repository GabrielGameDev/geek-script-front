import {ThemeProvider} from 'styled-components'
import { AdmContent } from '../../Components/AdmPanel'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function Adm() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AdmContent />
      <Footer />
    </ThemeProvider>
  )

  
}
