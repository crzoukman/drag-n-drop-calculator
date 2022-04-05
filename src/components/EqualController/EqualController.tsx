import { FC } from "react";
import { WrapperStyled } from "./EqualController.styled";
import { IProps } from "./types";

const EqualController: FC<IProps> = ({
  isOnCanvas,
  isCanvasFull,
  evaluationHandler
}) => {

  return (
    <WrapperStyled
      isOnCanvas={isOnCanvas}
      isCanvasFull={isCanvasFull}
      onClick={() => evaluationHandler && evaluationHandler('=')}
    >
      =
    </WrapperStyled>
  );
};

export default EqualController;