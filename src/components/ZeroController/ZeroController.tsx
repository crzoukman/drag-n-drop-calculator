import { FC } from "react";
import { WrapperStyled } from "./ZeroController.styled";

interface IProps {
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
  calculationHandler?: (arg: string) => void;
}

const ZeroController: FC<IProps> = ({
  isOnCanvas,
  isCanvasFull,
  calculationHandler
}) => {

  return (
    <WrapperStyled
      isOnCanvas={isOnCanvas}
      isCanvasFull={isCanvasFull}
      onClick={() => calculationHandler && calculationHandler('0')}
    >
      0
    </WrapperStyled>
  );
};

export default ZeroController;