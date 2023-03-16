import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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