import styled from 'styled-components';

interface H1Props {
    textAlign?:string;
}

export const Grid = styled.div`
height: 100%    ;
background-color: ${props => props.theme.colors.LightPrimary};
display:grid;
grid-template-columns: 2fr repeat(3, 1fr);
grid-gap: 3px; 

`


export const ContentBox = styled.div`
  /* display: block; */
  gap: 0.25rem;
  padding: 0.25rem;
  @media (max-width: 550px) {
    flex-direction: column; 
  }
  `

export const StyledH1 = styled.h1<H1Props>`
 color: ${props => props.theme.colors.Black};
text-align:${props => props.textAlign};
 
  `

export const StyledP = styled.p`

color: ${props => props.theme.colors.Accent};
text-align:center;
width:100%;
`

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:0px;
`

export const StyledForm = styled.form`
   display:flex;
   flex-direction:row;
   border: solid 1px ${props => props.theme.colors.LightPrimary};
   border-radius: 5px;
   padding:1px;
   justify-content:center;


   :focus-within {
    outline: 1px solid ${props => props.theme.colors.Primary};
   }

    @media (min-width: 1024px) {
        margin-top:2%;
    }
    
    `

export const StyledInput = styled.input`
    flex-grow:2;
    border:none;
    border-radius:2px 0px 0px 2px;
    :focus {
        outline:none;
    }
    
    `

export const StyledButton = styled.button`
   
    background-color: white;
    color: ${props => props.theme.colors.Primary};
    border:none;
    letter-spacing: .1rem;
    font-weight:500;
    border-radius:0px 2px 2px 0px;
    :hover {
        cursor:pointer;
    }
`