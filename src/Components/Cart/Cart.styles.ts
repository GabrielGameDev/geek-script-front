import styled from "styled-components";

interface GridProps {
    gridArea?: string;
    gridFractionRows?:string;
    gridFractionColumns?:string;
    justify?:string;
    height?:string;
}

export const Grid = styled.div`
    height:fit-content;
    display: grid;
    grid-template-areas:

    ". a a b b ."
    ". c c d d ."     ;

    text-align:center;
    align-items:center;
    background-color: ${props => props.theme.colors.LightPrimary};
`

export const ContentBox = styled.div<GridProps>`
    height:${props => props.height || 'fitcontent'};
    width:fit-content;
    grid-area: ${props => props.gridArea};
    display:grid;
    grid-gap:5px;
    grid-template-rows: ${props => props.gridFractionRows};
    grid-template-columns: ${props => props.gridFractionColumns};
    text-align:start;
    margin-bottom:2%;
`

export const StyledH3 = styled.h3`
    font-size:1.4rem;

`

export const StyledImg = styled.img`
    width:70px;
    height:70px;
    background-color:${props => props.theme.colors.LightGray};
    
`

export const StyledH5 = styled.h5`
    font-size:0.7rem;
`
export const StyledP = styled.p`
    font-size:0.7rem;
`

