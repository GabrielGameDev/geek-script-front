import styled from "styled-components";

interface LinkProps {
    colorLink?: string;
    marginY?: string;
    marginX?: string;
}

export const Grid = styled.div`
height: fit-content;
background-color: ${props => props.theme.colors.White};
display:grid;
grid-template-rows: 1fr; 
grid-template-columns: 1fr; 
justify-items:center;
`

export const StyledDiv = styled.div`
    display:grid;
    width:25%;
    justify-content:center;
    align-items:center;
    padding:5% 3%;
    margin:5% ;
`

export const StyledP = styled.p`
    font: bold;
    font-size:2rem;
    border-bottom: 1px solid gray;
    margin-bottom:5%
`

export const StyledForm = styled.form`

   background-color: ${props => props.theme.colors.White};
   flex-direction:column;
   display:flex;
   text-align:left;
    `

export const StyledInput = styled.input<LinkProps>`
    border:none;
    margin-top:3%;

    :focus {
        outline:none;
    }
`

export const StyledLabel = styled.label`
   margin-top:3%;

`