import styled from 'styled-components';





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
  text-align:center;
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
align-items:center;
display:flex;
`
export const Content2 = styled(Content1)`

`

export const MainImage = styled.img` 
width:100%;
height:100%;
border-radius:20px;
object-fit: cover;
@media (max-width: 809px) {
    border-radius:0px;
  }
`

export const ImageLink = styled.a`
  width:600px;
  height:250px;
  margin-bottom:5%;

  @media (max-width:809px) {
    width:100%;
  height:200px;
  }
`


