import { FC } from 'react';
import { ContainerStyled } from './App.styled';
import { Calculator } from './components';

const App: FC = () => {
  return (
    <ContainerStyled>
      <Calculator />
    </ContainerStyled>
  );
};

export default App;
