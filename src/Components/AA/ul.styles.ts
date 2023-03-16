import styled from "styled-components"
import { theme } from "../Theme/Theme"

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:10px;
border:solid 1px ${() => theme.colors.LightPrimary};
background-color: ${theme.colors.LightPrimary};
height:100%;
display:flex;
flex-direction:column;
@media (max-width:809px) {
    flex-direction:row;
    height:fit-content;
    align-items:center;
    border:solid 2px ${props => props.theme.colors.Primary}; 
    padding:0px;
    justify-content:space-around;
}   
`