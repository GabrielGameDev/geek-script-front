import styled from "styled-components";

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
    
`

export const Section = styled.section`
    display: flex;
    gap: 2rem;
`