import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { LoginContent } from '../../Components/LoginContent'
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
export function Login() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <LoginContent />
      <Footer />
    </ThemeProvider>
  )

  
}
