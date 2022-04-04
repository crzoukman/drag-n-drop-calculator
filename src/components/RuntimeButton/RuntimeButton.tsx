import { FC } from "react";
import { ReactComponent as Eye } from 'assets/eye.svg';
import { WrapperStyled } from "./RuntimeButton.styled";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { setActiveButton } from "redux/slices/main.slice";

const eyeStyles = {
  width: '20px',
  height: '20px',
};

const RuntimeButton: FC = () => {
  const { activeButton } = useTypedSelector(state => state.main);
  const dispatch = useTypedDispatch();

  const iconColor = (activeButton === 'constructor') ? '#4D5562' : '#5D5FEF';

  const activeButtonHandler = () => {
    if (activeButton === 'constructor') {
      dispatch(setActiveButton('runtime'));
    }
  };

  return (
    <WrapperStyled
      onClick={activeButtonHandler}
      activeButton={activeButton}
    >
      <Eye
        style={eyeStyles}
        fill={iconColor}
      />
      <div>Runtime</div>
    </WrapperStyled>
  );
};

export default RuntimeButton; 