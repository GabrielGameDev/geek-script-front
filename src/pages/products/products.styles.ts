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



export const StoreDescription = styled.div`

    background-color: ${colors.DarkPrimary};
    color: ${colors.Text};
    padding: 10px;

    div{
        width: 50%;
        margin-left: 10%;
    }

`