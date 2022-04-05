import { FC, ReactNode } from "react";
import { WrapperStyled } from "./OperatorController.styled";

interface IProps {
  children: ReactNode;
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
  calculationHandler?: (data: string) => void;
}

const OperatorController: FC<IProps> = ({ children, isOnCanvas, isCanvasFull, calculationHandler }) => {

  return (
    <WrapperStyled
      isOnCanvas={isOnCanvas}
      isCanvasFull={isCanvasFull}
      onClick={() => calculationHandler && calculationHandler(String(children))}
    >
      {children}
    </WrapperStyled>
  );
};

export default OperatorController;