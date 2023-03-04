import styled from 'styled-components';

interface GridProps {
    gridSize?: string;
    rowSize?: string;
    marginY?: string;
    marginX?: string;
    butWidth?: string;
    butHeight?: string;

}

export const Grid = styled.div<GridProps>`
    height:fit-content;
    display: grid;
    grid-template-columns: ${props => props.gridSize || '1fr 4fr'};
    padding-bottom:2%;
    text-align:center;
    align-items:center;
    background-color: ${props => props.theme.colors.Primary};

`

export const ContentBoxRow = styled.div<GridProps>`
display:grid;
grid-template-rows:${props => props.rowSize || '1fr'};
`
export const ContentBoxCol = styled.div<GridProps>`
display:grid;
grid-template-columns:${props => props.gridSize || '1fr'};
grid-gap: 10px;
border-bottom:solid 1px white;
`

export const StyledUl = styled.ul`
list-style-type:none;
margin:0px;
padding:10px;
border:solid 1px ${props => props.theme.colors.LightPrimary};
background-color: ${props => props.theme.colors.LightPrimary};
height:100%;

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
    color: ${props => props.theme.colors.Accent};
text-align:start;
padding-left:10px;

`

export const StyledButton = styled.button<GridProps>`
width: ${props => props.butWidth || '120px'} ;
height:${props => props.butHeight || '45px'};
background-color: ${props => props.theme.colors.LightGray};
color: ${props => props.theme.colors.DarkPrimary};
justify-content:center;
align-items:center;
border: none;
border-radius:5px;
padding: 5px 10px;  
display:flex;
grid-area:b;
margin:3px;

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

export const StyledDivForm = styled.div`
display:flex;
justify-content:space-between;
`
export const StyledForm = styled.form<GridProps>`
   background-color: ${props => props.theme.colors.LightPrimary};
   border: solid 1px ${props => props.theme.colors.DarkPrimary};
   border-radius: 5px;
   padding:1px;
   flex-direction:row;
   display:flex;
   justify-content:space-evenly;
   text-align:left;
   margin:1%;
    `
export const StyledInput = styled.input<GridProps>`
    border:none;
    border-radius:2px 0px 0px 2px;
    padding:7px;
    margin: ${props => props.marginY || '3px'} ${props => props.marginX || '3px'};
    border-radius:2px;
    width:100%;

    :focus {
        outline:none;
    }
`

export const StyledP = styled.p`
    color: ${props => props.theme.colors.LightPrimary};
    text-align:start;
    padding-left:10px;
    display:flex;
    align-items:center;
    
`