import React from "react";
import { Grid } from "../AA/grid.styles";
import * as FC from '../Sucesso/Sucesso.styles'

export const CheckoutSucess: React.FC = () => {
    return (
           <Grid gridSize="0.40fr">
            <FC.StyledDiv>
               <FC.StyledP> Compra realizada com sucesso! </FC.StyledP>
            </FC.StyledDiv>
           </Grid>


    )}