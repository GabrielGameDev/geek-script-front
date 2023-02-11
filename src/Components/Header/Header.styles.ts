import styled from 'styled-components';

export const HeaderDiv = styled.div`
display:flex;
width: 100%;

background-color: ${props => props.theme.colors.White};
margin:0px;
text-align: center;
align-items:center;
`

export const MainImage = styled.img`
width: 6%;
`

export const HeaderLinks = styled.a`
color: ${props => props.theme.colors.Primary};
text-decoration:none;
margin: 0px 5px;
text-align:center;
font-size: 0.8em;
`