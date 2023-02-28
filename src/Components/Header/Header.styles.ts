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
margin-bottom:10px;
`



export const HeaderLinks = styled.a`
color: ${props => props.theme.colors.Primary};
text-decoration:none;
margin-right: 10px;
text-align:center;
font-size: 0.8em;
`
export const Counter = styled.div`
    display:none;
    height: 12px;
    width: 12px;
    position: relative;
    left:13px;
    top:8px;
    font-size: 8px;
    color: white;
    justify-content: center;
    background-color: ${props => props.theme.colors.Accent} ;
    border-radius:5rem;
`

