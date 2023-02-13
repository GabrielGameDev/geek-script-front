import styled from 'styled-components';

interface IMainDiv {
    maxWidth?:number | string;
}

export const MainDiv = styled.div<IMainDiv>`
width: 100%;
background-color: ${props => props.theme.colors.Primary};
margin:0px;
justify-content:center;
text-align:center;
align-items:center;
display:flex;

    div {
        max-width: ${props => `${props.maxWidth}vh`};
        align-items:center;
        color: ${props => props.theme.colors.Accent};
        
    }

`

export const MainH1 = styled.h1`
color: ${props => props.theme.colors.Accent};
`
export const MainP = styled.p`
color: ${props => props.theme.colors.LightGray};
`

export const MainImage = styled.img`
width: ${props => `${props.width}px`};
`
