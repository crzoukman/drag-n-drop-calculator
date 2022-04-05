import { FC } from "react";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { WrapperStyled } from "./Result.styled";


const Result: FC = () => {
  const {
    result,
    isResultControllerUsed
  } = useTypedSelector(state => state.main);

  return (
    <WrapperStyled isUsed={isResultControllerUsed} >
      {isResultControllerUsed
        ? result
        : 0
      }
    </WrapperStyled>
  );
};

export default Result;