import { FC, ReactNode } from "react";
import { WrapperStyled } from "./OperatorController.styled";

interface IProps {
  children: ReactNode;
}

const OperatorController: FC<IProps> = ({ children }) => {

  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  );
};

export default OperatorController;