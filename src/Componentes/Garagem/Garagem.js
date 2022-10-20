import { Carro } from "../Carro/Carro";
import { ContainerGaragem, Estacionamento } from "./styled";
import { Button } from "../Button/Button";

export function Garagem() {
  function apresentaAnuncio() {
    alert(`Seja bem-vindo ao site de anúncios!`);
  }
  const adicionarCarrinho = "Adicionar";
  const infoCar = {};

  return (
    <ContainerGaragem>
      <h1>Os melhores preços da cidade</h1>
      <Button alert={apresentaAnuncio} />
      <Estacionamento>
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Vermelho"}
          ano={2022}
          flex
        />
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Verde"}
          ano={2020}
          flex
        />
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Verde"}
          ano={2020}
          flex
        />
      </Estacionamento>

      <Estacionamento>
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Amarelo"}
          ano={2009}
          flex
        />
        <Carro adicionadoPor={adicionarCarrinho} cor={"Rosa"} ano={2022} flex />
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Verde"}
          ano={2020}
          flex
        />
      </Estacionamento>

      <Estacionamento>
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Amarelo"}
          ano={2009}
          flex
        />
        <Carro adicionadoPor={adicionarCarrinho} cor={"Rosa"} ano={2022} flex />
        <Carro
          adicionadoPor={adicionarCarrinho}
          cor={"Verde"}
          ano={2020}
          flex
        />
      </Estacionamento>
    </ContainerGaragem>
  );
}
