import styled from 'styled-components'


export const Grid = styled.div`
height: fit-content;
background-color: ${props => props.theme.colors.White};
display:grid;
grid-template-rows: 1fr; 
grid-template-columns: 1fr; 
justify-items:center;

`

export const StyledDiv = styled.div`
    display:flex;
    border: 2px solid ${props => props.theme.colors.Accent};
    background-color:${props => props.theme.colors.White};
    border-radius: 4rem;
    width:25%;
    justify-content:center;
    align-items:center;
    height:10vh;
    padding:5% 3%;
    margin:5% ;
`

export const StyledP = styled.p`
    font: bold;
    font-size:2rem;
    text-align:center;
`