import styled from 'styled-components';



export const Grid = styled.div`
height: fit-content;
background-color: ${props => props.theme.colors.Primary};
display:grid;
grid-template-rows: 0.3fr 0.2fr 0.15fr auto;
grid-gap: 20px; 

`

export const Title = styled.h1`
color: ${props => props.theme.colors.Accent};
text-align:center;
padding:10px;

`

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column; 
  }
  `

export const Subtitle = styled.p`

color: ${props => props.theme.colors.LightGray};
text-align:center;
width:100%;
`

export const Content1 = styled.div`
justify-content:center;
align-items:flex-start;
display:flex;
`
export const Content2 = styled(Content1)`

`

export const MainImage = styled.img` 
margin-bottom:20px;
width: 50%;
height: 50%;
border-radius:20px;
object-fit: cover;

@media (max-height:550) {
  width:30%;
}
@media (max-width: 550px) {
  width:100%;
     
    border-radius:0px;
  }
`


