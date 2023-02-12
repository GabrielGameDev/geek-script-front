import styled from 'styled-components';

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

interface FilterButtonProps{
    selected: boolean;
}

export const StoreDescription = styled.div`

    background-color: ${colors.DarkPrimary};
    color: ${colors.Text};
    padding: 10px 10%;
    width: 100%;

    div{
        width: 50%;
        
    }

`

export const Main = styled.main`

padding: 10px 10%;
margin-top: 2rem;

`

export const Categories = styled.div`

    display: flex;
    justify-content: space-between;

    div{
        gap: 10px;
        display: flex;
    }
`

export const FilterButton = styled.button<FilterButtonProps>`
    background-color: ${props => props.selected ? colors.Primary : colors.LightPrimary};
    color: ${props => props.selected ? colors.Text : colors.PrimaryText};
    padding: 1rem 3rem;
    height: 70%;
    transition: 0.3s;
    :hover{
        background-color: ${colors.Accent};
        color: ${colors.Text};
        cursor: pointer;
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
    grid-gap: 5rem;
    
`



