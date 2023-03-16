import styled from "styled-components";

interface GridProps {
    gridSize:string;
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