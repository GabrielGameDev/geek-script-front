import styled from "styled-components";
import { theme } from "../Theme/Theme";

 
export const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: ${theme.colors.LightPrimary};
    border-radius: 10px;
    padding: 10px;
    transition: 0.3s;
    height: 20rem;

    :hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    img{
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 10px;

    }
`