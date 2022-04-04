import { FC } from "react";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { WrapperStyled } from "./Result.styled";


const Result: FC = () => {
  const { result } = useTypedSelector(state => state.main);

  return (
    <WrapperStyled>
      {result}
    </WrapperStyled>
  );
};

export default Result;