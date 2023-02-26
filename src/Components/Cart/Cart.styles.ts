import styled from "styled-components";

interface GridProps {
    gridArea?: string;
    gridFractionRows?: string;
    gridFractionColumns?: string;
    height?: string;
    width?:string;
    textAlign?: string;
    justifyContent?:string;
    displayContent?:string;
}

export const Grid = styled.div`
    height:fit-content;
    display: grid;
    grid-template-areas:

    ". a a b b ."   ;
    padding:5% 0%;
    text-align:center;
    align-items:center;
    background-color: ${props => props.theme.colors.LightPrimary};
`

export const ContentBox = styled.div<GridProps>`
    height:${props => props.height || 'fitcontent'};
    width:${props => props.width || 'fitcontent'};
    grid-area: ${props => props.gridArea};
    display:${props => props.displayContent || 'grid'};
    grid-gap:5px;
    grid-template-rows: ${props => props.gridFractionRows};
    grid-template-columns: ${props => props.gridFractionColumns};
    text-align:${props => props.textAlign || 'start'};
    justify-content:${props => props.justifyContent || 'center'};
    margin-bottom:2%;
`

export const StyledH3 = styled.h3`
    font-size:1.4rem;

`
export const StyledH4 = styled.h4`
    font-size:1rem;
`
export const StyledH5 = styled.h5`
    font-size:0.7rem;
`

export const StyledImg = styled.img`
    width:70px;
    height:70px;
    background-color:${props => props.theme.colors.LightGray};
    
`

export const StyledP = styled.p`
    font-size:0.7rem;
    margin:2% 0%;
`
export const StyledForm = styled.form`

   background-color: ${props => props.theme.colors.LightPrimary};
   border: none;
   text-align:left;
   margin-bottom:1%;
    `
export const StyledInput = styled.input`
    border:solid 1px ${props => props.theme.colors.DarkPrimary};
    background-color: ${props => props.theme.colors.LightPrimary};
    padding:2%;
    font-size:0.5rem;
    width:180px;
    margin:6% 0%;
    color:${props => props.theme.colors.DarkGray};

    :focus {
        outline:none;
    }
`

export const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.Primary};
    border:none;
    width:100%;
    font-size:0.7rem;   
    padding:3%;
    color:${props => props.theme.colors.LightPrimary};

    :hover {
        cursor: pointer;
        color:${props => props.theme.colors.LightGray};
    }
`