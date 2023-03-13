import styled from 'styled-components';

export const ShopAllButton = styled.a`
width: 120px;
height:45px;
background-color: ${props => props.theme.colors.LightPrimary};
color: ${props => props.theme.colors.Primary};
justify-content:center;
align-items:center;
border: 2px solid;
border-radius:5px;
padding: 5px 10px;  
margin:30px 0px;
display:flex; 
text-decoration:none;

    :hover {
        cursor:pointer;
        color:${props => props.theme.colors.LightPrimary};
        font-weight:bold;
        background-color:${props => props.theme.colors.DarkPrimary};
    }

`