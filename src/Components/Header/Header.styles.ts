import styled from 'styled-components';

export const HeaderDiv = styled.div`
display:flex;
width: 100%;
height: 59px;
background-color: ${props => props.theme.colors.Primary};
margin:0px;
`

export const HeaderLinks = styled.a`
color: ${props => props.theme.colors.White};
text-decoration:none;
`