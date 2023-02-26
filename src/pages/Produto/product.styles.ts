import styled from "styled-components";
import { theme } from "../../Components/Theme/Theme";


export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    gap: 1rem;
    img{
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        border: 1px solid #ccc;
        
    }
`

export const ProductInfo = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 1rem;

    p{
        font-size: 1.5rem;
    }
    
`

export const SizeDiv = styled.div`
    display: flex;
    gap: 1rem;
    `

export const SizeButton = styled.button`
    width: 2rem;
    height: 2rem;
    border: 1px solid ${theme.colors.Black};
    background-color: ${theme.colors.White};

    cursor: pointer;

    &:hover{
        background-color: ${theme.colors.LightPrimary};
    }
    `

export const AddToCart = styled.button`
    width: 30rem;
    height: 3rem;
    background-color: ${theme.colors.Primary};
    color: ${theme.colors.White};
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: ${theme.colors.LightPrimary};
        outline: 1px solid ${theme.colors.DarkPrimary};

    }
`

export const Section = styled.section`
    display: flex;
    gap: 2rem;
`