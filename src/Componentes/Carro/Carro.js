import { CarroStyle, ImgCarro } from "./styled";
import CarroVenda from "../Img/car-49278_640.jpg";

export function Carro(props) {
  return (
    <CarroStyle>
      <ImgCarro src={CarroVenda} alt="imagem"></ImgCarro>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex ? "true" : "false"}</li>
        <button>{props.adicionadoPor}</button>
      </ul>
    </CarroStyle>
  );
}
