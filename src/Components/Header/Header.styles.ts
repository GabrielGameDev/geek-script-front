import styled from 'styled-components';

export interface IHeader {
    open?:boolean;
}

export const HeaderDiv = styled.div`
display:flex;
width: 100%;
background-color: ${props => props.theme.colors.LightPrimary};
margin:0px;
justify-content:space-between;
text-align:center;
align-items:center;
font-size:1.3rem;

    div {
        display:flex;
        align-items:center;
        margin-right: 15px;
    }
    
`

export const HeaderImage = styled.img`
width: ${props => `${props.width}px`};
margin-bottom:10px;
`

export const HeaderLinks = styled.a`
color: ${props => props.theme.colors.Primary};
text-decoration:none;
margin-right: 10px;
text-align:center;
font-size: 0.8em;
`
export const Counter = styled.div`
    display:none;
    height: 12px;
    width: 12px;
    position: relative;
    left:13px;
    top:8px;
    font-size: 8px;
    color: white;
    justify-content: center;
    background-color: ${props => props.theme.colors.Accent} ;
    border-radius:5rem;
`

export const StyledUl = styled.ul`
    list-style:none;
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    

    @media (max-width:809px) {
        flex-flow: column nowrap;
        background-color: ${props => props.theme.colors.Black};
        position: fixed;
        top:0;
        left:0;
        height: 100vh;
        width: 180px;
        padding-top: 3.5rem;
        transform:${({ open }) => open ? 'translateX(0)' : 'translate(-100%)'};
        transition: transform 0.3s ease-in-out;

        li {
        color:${props => props.theme.colors.White}
        }

    }
`
export const StyledBurger = styled.div<IHeader>`
    width:2rem;
    height:2rem;
    position:fixed;
    top:5px;
    left:20px;
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;

    div {
        width:2rem;
        height:0.25rem;
        background-color: ${({open}) => open ? '#FF9800' : '#757575' };
        border-radius:10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0:1}
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`
