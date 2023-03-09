import styled from 'styled-components';
import { theme } from "../Theme/Theme";


interface FooterProps {
    textAlign?: string;

}

export const Grid = styled.div`
height: 100%    ;
background-color: ${theme.colors.LightPrimary};
display:grid;
grid-template-columns: 2fr repeat(3, 1fr);
grid-gap: 5px; 
font-size: 0.85rem;


 ;
`


export const ContentBox = styled.div`
    grid-gap: 5px; 
    padding: 0.25rem;
  @media (max-width: 809px) {
    flex-direction: column; 
    text-align:center;
    font-size:0.6rem;
  }
  `

export const StyledH1 = styled.h1<FooterProps>`
 color: ${theme.colors.Black};
text-align:${props => props.textAlign};
font-size:0.9rem;

 
  `

export const StyledP = styled.p`

color: ${theme.colors.DarkGray};
text-align:center;
width:100%;
font-size:0.75rem;

`

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:0px;
`

export const StyledLi = styled.li`
color:${theme.colors.DarkGray};
padding:0px;

`

export const StyledForm = styled.form`
   display:grid;
   grid-template-columns: 0.25fr 0.25fr;
   justify-self:start;
   grid-gap: 0px; 
   flex-direction:row;
   border: solid 1px ${theme.colors.LightPrimary};
   border-radius: 5px;
   padding:1px;
   justify-content:center;

    @media (min-width: 1024px) {
        margin-top:2%;
    }
    
    `

export const StyledInput = styled.input`
    flex-grow:2;
    border:none;
    border-radius:2px 0px 0px 2px;
    padding:7px;
    :focus {
        outline:none;
    };
    @media (max-width: 809px){
    font-size:0.6rem;

    }
    `

export const StyledButton = styled.button`
   
    background-color: white;
    color: ${theme.colors.Primary};
    border:none;
    letter-spacing: .1rem;
    font-weight:500;
    border-radius:0px 2px 2px 0px;
    text-align:end;
    padding:7px;
    :hover {
        cursor:pointer;
    }
`

export const StyledA = styled.a`
    text-decoration:none;
    font-size:0.75rem;
    color:${theme.colors.DarkGray};

    :hover { 
        cursor:pointer;
    }
    `