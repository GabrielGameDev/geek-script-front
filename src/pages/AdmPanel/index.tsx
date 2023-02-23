import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { AdmContent } from '../../Components/AdmPanel'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { theme } from '../../Components/Theme/Theme'



const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Poppins' , sans-serif;

    }


  body {
 
    background-color: ${props => props.theme.colors.Black};
    margin:0px;
    color:${props => props.theme.colors.Primary};
    flex-direction:row;

    #root {
      display:block;
      width:100%;
    } 

  }
  `
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
