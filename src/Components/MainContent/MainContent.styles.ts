import styled from 'styled-components';

interface IGrid {
    maxWidth?: number | string;
}

export const Grid = styled.div`
height: 100vh    ;
background-color: ${props => props.theme.colors.Primary};
display:grid;
grid-template-rows: 0.1fr 0.2fr 0.15fr 1fr;
grid-template-areas: 

". . title . . "
". . contentBox . ."
". . button . ."
"c c c c c";

grid-gap: 20px; 

`

export const Title = styled.h1`
color: ${props => props.theme.colors.Accent};
grid-area: title;
text-align:center;
padding:10px;

`

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: contentBox;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column; 
  }
  `

export const Subtitle = styled.p<IGrid>`

color: ${props => props.theme.colors.LightGray};
text-align:center;
width:100%;
`

export const Content1 = styled.div<IGrid>`
grid-area: button;
justify-content:center;
align-items:center;
display:flex;
`
export const Content2 = styled(Content1)`
grid-area:c;
`

export const MainImage = styled.img<IGrid>`
grid-area: c;
margin-bottom:20px;
width:55%;
border-radius:20px;
@media (max-width: 550px) {
    width:100%; 
    border-radius:0px;
  }
`
