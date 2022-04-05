import { FC, ReactNode } from "react";
import { WrapperStyled } from "./NumberController.styled";

interface IProps {
  children: ReactNode;
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
  calculationHandler?: (data: string) => void;
}

const NumberController: FC<IProps> = ({ children, isOnCanvas, isCanvasFull, calculationHandler }) => {

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

export default NumberController;