import { FC } from "react";
import { WrapperStyled } from "./EqualController.styled";

interface IProps {
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
  evaluationHandler?: (data: string) => void;
}

const EqualController: FC<IProps> = ({ isOnCanvas, isCanvasFull, evaluationHandler }) => {

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