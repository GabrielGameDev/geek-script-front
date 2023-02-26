import {ThemeProvider} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'
import { GlobalStyle } from '../../Components/GlobalStyleGuide'
import { ProfileContent } from '../../Components/Profile'

export function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ProfileContent />
      <Footer />
    </ThemeProvider>
  )

  
}