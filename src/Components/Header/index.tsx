import React from "react";
import * as FC from './Header.styles'
import logoGeek from '../../../Images/imageLogo.png'
import iconCart from '../../../Images/icon-cart.svg'



export const Header: React.FC = () => {
        return (
                <FC.HeaderDiv>
                        <div>
                                <FC.HeaderLinks href="#">
                                        <FC.MainImage width={50} src={logoGeek}></FC.MainImage>
                                </FC.HeaderLinks>
                                <FC.HeaderLinks href="#">Shop</FC.HeaderLinks>
                                <FC.HeaderLinks href="#">Stories</FC.HeaderLinks>
                                <FC.HeaderLinks href="#">About</FC.HeaderLinks>
                        </div>
                        <div>

                                <FC.HeaderLinks href="#" >
                                        <FC.MainImage src={iconCart} width={15}></FC.MainImage>
                                </FC.HeaderLinks>
                                <FC.HeaderLinks href="#" >About</FC.HeaderLinks>
                        </div>
                </FC.HeaderDiv>
        )

}