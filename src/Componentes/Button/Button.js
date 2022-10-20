import { ButtonStyle, DivStyle, InputStyle } from "./styled";

export function Button(props) {
  return (
    <DivStyle>
      <InputStyle></InputStyle>
      <ButtonStyle onClick={props.alert}>Xuxar Carro</ButtonStyle>
    </DivStyle>
  );
}
