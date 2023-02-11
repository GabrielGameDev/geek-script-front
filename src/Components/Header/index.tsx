import React from "react";
import * as FC from './Header.styles'
import logoGeek from '../../../Images/imageLogo.png'



export const Header: React.FC = () => {
        return (
                <FC.HeaderDiv>     
                    <FC.MainImage src={logoGeek}></FC.MainImage>                  
                    <FC.HeaderLinks href="#">Shop</FC.HeaderLinks>
                    <FC.HeaderLinks href="#">Stories</FC.HeaderLinks>
                    <FC.HeaderLinks href="#">About</FC.HeaderLinks>
                </FC.HeaderDiv>
        )

}