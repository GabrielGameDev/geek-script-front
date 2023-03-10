import styled from 'styled-components';
import { theme } from '../Theme/Theme'

interface GridProps {
    gridSize?: string;
    gridRows?: string;
    gridHeight?: string;
    gridWidth?:string;
    gridPad?: string;
    gridBorder?:string;
    gridMedia?:string;
    marginY?: string;
    marginX?: string;
    butWidth?: string;
    butHeight?: string;
    fontColor?:string;
    justifyC?:string;
    display?:string;
    bgColor?:string;
}

export const Grid = styled.div<GridProps>`
    height:${props => props.gridHeight || 'fit-content'};
    width:${props => props.gridWidth || '100%'};
    border-bottom:${props => props.gridBorder};
    display: grid;
    grid-template-columns: ${props => props.gridSize || '1fr 4fr'};
    grid-template-rows: ${props => props.gridRows};
    padding-bottom:${props => props.gridPad};
    justify-content:center;
    text-align:center;
    align-items:center;
    background-color: ${props => props.bgColor || theme.colors.Primary};
    @media (max-width:809px) {
        grid-template-columns: ${props => props.gridMedia};
    }
`
