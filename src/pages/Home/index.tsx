import {ThemeProvider} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { MainContent } from '../../Components/MainContent'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'

export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  )

  
}
