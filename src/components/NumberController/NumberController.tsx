import { FC, ReactNode } from "react";
import { WrapperStyled } from "./NumberController.styled";

interface IProps {
  children: ReactNode;
}

const NumberController: FC<IProps> = ({ children }) => {

  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  );
};

export default NumberController;