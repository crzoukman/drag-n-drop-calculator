import { FC } from "react";
import { WrapperStyled } from "./ConstructorButton.styled";
import { ReactComponent as Brackets } from 'assets/brackets.svg';
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { setActiveButton, setResult } from "redux/slices/main.slice";

const eyeStyles = {
  width: '20px',
  height: '20px',
};

const ConstructorButton: FC = () => {
  const { activeButton } = useTypedSelector(state => state.main);
  const dispatch = useTypedDispatch();

  const iconColor = (activeButton === 'constructor') ? '#5D5FEF' : '#4D5562';

  const activeButtonHandler = () => {
    if (activeButton === 'runtime') {
      dispatch(setActiveButton('constructor'));
    }
  };

  return (
    <WrapperStyled
      onClick={activeButtonHandler}
      activeButton={activeButton}
    >
      <Brackets
        style={eyeStyles}
        fill={iconColor}
      />
      <div>Constructor</div>
    </WrapperStyled>
  );
};

export default ConstructorButton;