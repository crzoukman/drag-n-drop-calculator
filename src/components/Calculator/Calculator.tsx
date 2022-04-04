import Canvas from "components/Canvas";
import Controllers from "components/Controllers";
import { FC } from "react";
import ConstructorButton from "../ConstructorButton";
import RuntimeButton from "../RuntimeButton";
import { ButtonsStyled, ButtonsWrapperStyled, MainStyled, WrapperStyled } from "./Calculator.styled";

const Calculator: FC = () => {

  return (
    <WrapperStyled>

      <ButtonsStyled>

        <ButtonsWrapperStyled>

          <RuntimeButton />
          <ConstructorButton />

        </ButtonsWrapperStyled>

      </ButtonsStyled>

      <MainStyled>

        <Controllers />
        <Canvas />

      </MainStyled>

    </WrapperStyled>
  );
};

export default Calculator;