import styled from 'styled-components';

interface GridProps {
    gridArea?: string;
    gridSize?: string;
    textColor?:string;

} 

export const Box = styled.div`
    height:fit-content;
    display: block;
    text-align:center;
    align-items:center;
    background-color: ${props => props.theme.colors.Primary};

`

export const ContentBox = styled.div<GridProps>`
display:grid;
grid-template-columns:repeat(5, 1fr);
grid-gap: 10px;

`

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:10px;
border:solid 1px ${props => props.theme.colors.LightPrimary};
background-color: ${props => props.theme.colors.LightPrimary};

`

export const StyledLi = styled.li`

padding: 5px 10px;
text-align:start;
color: ${props => props.theme.colors.Primary};
margin-bottom:3px;


:hover {
    border-radius:3px;
    border:solid 1px ${props => props.theme.colors.White};
    background-color: ${props => props.theme.colors.DarkPrimary};
    cursor:pointer;
    color: ${props => props.theme.colors.LightGray};

}
`

export const StyledH1 = styled.h1`
    color: ${props => props.theme.colors.Accent};
text-align:start;
padding:10px;
grid-area:a;
`
export const StyledH4 = styled.h4<GridProps>`
color: ${props => props.textColor || props.theme.colors.LightPrimary };  
text-align:start;
padding:10px;
font-size:1.1rem;


`

export const StyledButton = styled.button`
width: 120px;
height:45px;
background-color: ${props => props.theme.colors.LightPrimary};
color: ${props => props.theme.colors.Primary};
justify-content:center;
align-items:center;
border: 2px solid;
border-radius:5px;
padding: 5px 10px;  
display:flex;
grid-area:b;
margin-left:10px;

    :hover {
        cursor:pointer;
        color:${props => props.theme.colors.LightPrimary};
        font-weight:bold;
        background-color:${props => props.theme.colors.DarkPrimary};
    }
`

export const StyeledA = styled.a`
text-decoration:none;
`

export const StyledP = styled.p<GridProps>`
color: ${props => props.textColor || props.theme.colors.LightPrimary };  
text-align:start;
padding:10px;
font-size: 0.9rem;
`