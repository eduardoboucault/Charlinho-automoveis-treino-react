import React from "react";
import Logo from "../Img/carro1.png";
import { TituloStyle, LogoCsn, AreaTitulo } from "./styled";

export function Header() {
  return (
    <AreaTitulo>
      <TituloStyle>Charlinho Automóveis</TituloStyle>
      <LogoCsn src={Logo} alt="Imagem"></LogoCsn>
    </AreaTitulo>
  );
}
