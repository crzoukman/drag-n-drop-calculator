import { FC } from "react";
import { WrapperStyled } from "./NumberController.styled";
import { IProps } from "./types";

const NumberController: FC<IProps> = ({
  children,
  isOnCanvas,
  isCanvasFull,
  calculationHandler
}) => {

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