import React from "react";
import * as FC from "./AdmPanel.styles";

export const ButtonExcluir: React.FC = () => {
  return (
    <FC.ContentBoxRow rowSize="1fr">
      <FC.StyledButton butHeight="20px" butWidth="80px">
        Excluir
      </FC.StyledButton>
    </FC.ContentBoxRow>
  );
};

export const ButtonEditar: React.FC = () => {
  return (
    <FC.ContentBoxRow rowSize="1fr">
      <FC.StyledButton butHeight="20px" butWidth="80px">
        Editar
      </FC.StyledButton>
    </FC.ContentBoxRow>
  );
};
