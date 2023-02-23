import styled from 'styled-components';


interface LinkProps {
    colorLink?: string;
    marginY?: string;
    marginX?: string;
}



export const Grid = styled.div`
height:fit-content;
    display: grid;
    grid-template-areas:

    ". a ."     ;

    text-align:center;
    align-items:center;
    background-color: ${props => props.theme.colors.Primary};

`

export const StyledH1 = styled.h1`
    padding:10px 30px;

`

export const StyledP = styled.p`
    color: ${props => props.theme.colors.DarkGray};
    padding: 10px 30px;
`

export const StyledForm = styled.form`

   background-color: ${props => props.theme.colors.LightPrimary};
   border: solid 1px ${props => props.theme.colors.DarkPrimary};
   border-radius: 5px;
   padding:1px;
   flex-direction:column;
   display:flex;
   text-align:left;
   margin-bottom:1%;
    `

export const StyledInput = styled.input<LinkProps>`
    border:none;
    border-radius:2px 0px 0px 2px;
    padding:7px;
    margin: ${props =>  props.marginY ||  '10px' } ${props =>  props.marginX ||  '30px' };
    border-radius:2px;
    :focus {
        outline:none;
    }
`

export const StyledLabel = styled.label`
    padding-left:30px;
`

export const StyledLink = styled.a<LinkProps>`
text-decoration:none;
cursor:pointer;
text-align:end;
margin:10px 30px;
color: ${props =>  props.colorLink ||  props.theme.colors.DarkPrimary };

`

export const StyledDivForm = styled.div`
display:flex;
justify-content:space-between;
`
export const StyledDiv = styled.div`
grid-area: a;
justify-content:center;
padding:5%;
`