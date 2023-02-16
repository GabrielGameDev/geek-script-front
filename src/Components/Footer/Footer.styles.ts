import styled from 'styled-components';

interface GridAreaProps {
    gridArea: string;
}

export const Grid = styled.div`
height: 100vh    ;
background-color: ${props => props.theme.colors.LightPrimary};
display:grid;
grid-template-areas:
"a b c d"
"a b c d"
"a b c d"
"a b c d" ;


grid-template-columns: 2fr repeat (3, 1fr);

grid-gap: 3px; 

`


export const ContentBox = styled.div<GridAreaProps>`
  /* display: block; */
  gap: 0.25rem;
  padding: 0.25rem;
  grid-area: ${(props) => props.gridArea};
  @media (max-width: 550px) {
    flex-direction: column; 
  }
  `

export const StyledH1 = styled.h1`
 color: ${props => props.theme.colors.Black};
text-align:center;
padding:10px;   
  `

export const StyledP = styled.p`

color: ${props => props.theme.colors.Accent};
text-align:center;
width:100%;
`