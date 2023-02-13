import styled from "styled-components";

export const colors = {
    DarkPrimary: '#512DA8',
    LightPrimary: '#D1C4E9',
    Primary: '#673AB7',
    Text: '#FFFFFF',
    Accent: '#FF9800',
    PrimaryText: '#212121',
    SecondaryText: '#757575',
    Divider: '#BDBDBD',
}

export const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: ${colors.LightPrimary};
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