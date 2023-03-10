import styled from 'styled-components';
import { theme } from "../Theme/Theme";

interface FilterButtonProps{
    selected: boolean;
}

export const StoreDescription = styled.div`

    background-color: ${theme.colors.DarkPrimary};
    color: ${theme.colors.White};
    padding: 40px 10%;
    width: 100%;

  
`
export const StyledDiv =styled.div`
    width:50%;
@media (max-width:809px) {
    width:100%;
    display:grid !important;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom:5%;
}
` 
export const DescrpDiv =styled.div`
    width:50%;
@media (max-width:809px) {
    width:100%;
    display:block;
}
`

export const Main = styled.main`

padding: 10px 10%;
margin-top: 2rem;
@media (max-width:809px) {
    padding:5px 3%;
}
`

export const Categories = styled.div`

    display: flex;
    justify-content: space-between;

    div{
        gap: 10px;
        display: flex;
    }
    @media (max-width: 809px) {
        display:block;
    }
`

export const FilterButton = styled.button<FilterButtonProps>`
    background-color: ${props => props.selected ? theme.colors.Primary : theme.colors.LightPrimary};
    color: ${props => props.selected ? theme.colors.White : theme.colors.Primary};
    padding: 1rem 3rem;
    height: 70%;
    transition: 0.3s;
    border:none;
    border-radius:0.3rem;
    :hover{
        background-color: ${theme.colors.Accent};
        color: ${theme.colors.White};
        cursor: pointer;
    }

    @media (max-width: 810px) {
        padding: 0.2rem 1.5rem;
        height:35px;
    }
`

export const FilterSelectDiv = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    span{
        position: absolute;
        top: 20%;
        left: 5%;
    }

    `

export const Select = styled.select`

padding: 1rem 1rem;
text-align: right;


`

export const ProductsContainer = styled.div`

    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 3rem;

    @media (max-width: 809px) {
    grid-template-columns: repeat(1, 1fr);

    }

    
`
export const ShowMoreButton = styled.button`

    margin: 1rem;
    background-color: ${theme.colors.Primary};
    color: ${theme.colors.White};
    padding: 1rem 3rem;
    height: 70%;
    transition: 0.3s;
    border:none;
    border-radius:0.3rem;
    :hover{
        background-color: ${theme.colors.Accent};
        color: ${theme.colors.White};
        cursor: pointer;
    }

    @media (max-width: 810px) {
        padding: 0.2rem 1.5rem;
        height:30%;
    }
`



