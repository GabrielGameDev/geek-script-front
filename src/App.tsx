import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { useState } from 'react'
import { Header } from './Components/Header'
import { theme } from './Components/Theme/Theme'



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
      /* @media (min-width: 1024px) {
      display:flex; */
    } 

  }
  `
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
      Hello
      
    </ThemeProvider>
  )

  
}


