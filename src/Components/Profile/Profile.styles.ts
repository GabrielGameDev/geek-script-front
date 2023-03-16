import styled from "styled-components";

interface LinkProps {
    colorLink?: string;
    marginY?: string;
    marginX?: string;
}

export const StyledDiv = styled.div`
    display:block;
    justify-content:center;
    align-items:center;
    padding:5% 3%;
    margin:5%;
`

export const StyledP = styled.p`
    font: bold;
    font-size:2rem;
    border-bottom: 1px solid gray;
    margin-bottom:5%;
    
`

export const StyledForm = styled.form`

   background-color: ${props => props.theme.colors.White};
   flex-direction:column;
   display:flex;
   text-align:left;
   @media (max-width:809px){
    text-align:center;
   }
    `

export const StyledInput = styled.input<LinkProps>`
    border:none;
    margin-top:3%;

    :focus {
        outline:none;
    }

    @media (max-width:809px){
    text-align:center;
   }
`
 
export const StyledLabel = styled.label`
   margin-top:3%;

`

export const StyledA = styled.a`
    text-decoration:none;
    font-size:0.83rem;
    color:${props => props.theme.colors.Black};
    margin-top:3%;

    :hover { 
        cursor:pointer;
    }
`