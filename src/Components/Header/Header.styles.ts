import styled from 'styled-components';



export const HeaderDiv = styled.div`
display:flex;
width: 100%;
background-color: ${props => props.theme.colors.LightPrimary};
margin:0px;
justify-content:space-between;
text-align:center;
align-items:center;
font-size:1.3rem;

    div {
        display:flex;
        align-items:center;
        margin-right: 15px;
    }
    
`

export const HeaderImage = styled.img`
width: ${props => `${props.width}px`};
`



export const HeaderLinks = styled.a`
color: ${props => props.theme.colors.Primary};
text-decoration:none;
margin-right: 10px;
text-align:center;
font-size: 0.8em;
`