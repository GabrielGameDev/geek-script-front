import React from "react";
import * as FC from './MainContent.styles'
import { ShopAll } from '../ButtonShopAll/index'
import logoGeek from '../../../Images/imageLogo.png'

export const MainContent: React.FC = () => {
    return (
        <>
            <FC.MainDiv maxWidth={160}>
                <div>
                    <FC.MainH1>Os melhores produto Geek estão aqui</FC.MainH1>
                    <FC.MainP>Produto de todo o universo Geek. Bonecos Funko, camisetas, Action Figure, e muito mais com qualidade e garantia na entrega.</FC.MainP>
                    <ShopAll />
                </div>
            </FC.MainDiv>
            <FC.MainDiv maxWidth={200}>
                <div>
                    <FC.MainImage src={logoGeek}>

                    </FC.MainImage>
                </div>
            </FC.MainDiv>
        </>
    )
}