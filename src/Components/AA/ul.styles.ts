import styled from "styled-components"
import { theme } from "../Theme/Theme"

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:10px;
border:solid 1px ${() => theme.colors.LightPrimary};
background-color: ${_props => theme.colors.LightPrimary};
height:100%;
display:flex;
flex-direction:column;
`