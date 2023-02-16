import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Header } from '../../Components/Header'
import { MainContent } from '../../Components/MainContent'
import { theme } from '../../Components/Theme/Theme'



const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Poppins' , sans-serif;

    }


  body {
 
    background-color: ${props => props.theme.colors.Black};
    display:flex;
    margin:0px;
    color:${props => props.theme.colors.Primary};
    flex-direction:row;

    #root {
      display:block;
      width:100%;
    } 

  }
  `
export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContent />
    </ThemeProvider>
  )

  
}
