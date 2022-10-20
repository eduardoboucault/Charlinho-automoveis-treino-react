import styled from "styled-components";

export const ContainerGaragem = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
  padding-top: 30px;
  background-image: linear-gradient(
    225deg,
    #f4ffe4 0,
    #e6ffe8 12.5%,
    #d2ffe6 25%,
    #b5ffe0 37.5%,
    #8fffd5 50%,
    #62eecc 62.5%,
    #2ce2cb 75%,
    #00dbcf 87.5%,
    #00d8d8 100%
  );
`;

export const Estacionamento = styled.section`
  display: flex;
  gap: 30px;
  height: 20vh;
`;
