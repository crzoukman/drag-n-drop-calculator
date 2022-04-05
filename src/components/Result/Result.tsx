import { FC } from "react";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { WrapperStyled } from "./Result.styled";

const Result: FC<{ isActive: boolean }> = ({ isActive }) => {
  const {
    result,
    isResultControllerUsed
  } = useTypedSelector(state => state.main);

  return (
    <WrapperStyled isUsed={isResultControllerUsed} >
      {isActive
        ? result
        : 0
      }
    </WrapperStyled>
  );
};

export default Result;