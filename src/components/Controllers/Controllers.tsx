import { FC } from "react"
import { ControllerWrapperStyled, WrapperStyled } from "./Controllers.styled";
import { numbersController, operatorsController } from './config';
import OperatorController from "components/OperatorController";
import NumberController from "components/NumberController";
import ZeroController from "components/ZeroController";
import EqualController from "components/EqualController";
import Result from "components/Result";
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { setDragableItem, setIsDragging, TDragableItem } from "redux/slices/main.slice";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import config from "config";
import { v4 as uuidv4 } from 'uuid';

const Controllers: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    isResultControllerUsed,
    isOperatorsControllerUsed,
    isNumbersControllerUsed,
    isEqualControllerUsed,
    canvasItems,
    activeButton,
  } = useTypedSelector(state => state.main);

  const isCanvasFull = canvasItems.length === config.MAX_CANVAS_LENGTH;

  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    type: TDragableItem
  ) => {
    dispatch(setIsDragging(true));
    dispatch(setDragableItem({ element: type }));
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(setIsDragging(false));
    dispatch(setDragableItem(null));
  };

  if (!isCanvasFull) {
    return (
      <WrapperStyled>
        <ControllerWrapperStyled
          draggable={!isResultControllerUsed && activeButton === 'constructor'}
          onDragStart={(e) => dragStartHandler(e, 'result')}
          onDragEnd={(e) => dragEndHandler(e)}
          isUsed={isResultControllerUsed}
        >
          <Result />
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isOperatorsControllerUsed && activeButton === 'constructor'}
          onDragStart={(e) => dragStartHandler(e, 'operator')}
          onDragEnd={(e) => dragEndHandler(e)}
          isUsed={isOperatorsControllerUsed}
        >
          {operatorsController.map(item =>
            <OperatorController key={uuidv4()} >
              {item}
            </OperatorController>
          )}
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isNumbersControllerUsed && activeButton === 'constructor'}
          onDragStart={(e) => dragStartHandler(e, 'number')}
          onDragEnd={(e) => dragEndHandler(e)}
          isUsed={isNumbersControllerUsed}
        >
          {numbersController.map(item =>
            <NumberController key={uuidv4()} >
              {item}
            </NumberController>
          )}

          <ZeroController />

          <NumberController>
            ,
          </NumberController>
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isEqualControllerUsed && activeButton === 'constructor'}
          onDragStart={(e) => dragStartHandler(e, 'equal')}
          onDragEnd={(e) => dragEndHandler(e)}
          isUsed={isEqualControllerUsed}
        >
          <EqualController />
        </ControllerWrapperStyled>
      </WrapperStyled>
    );
  }

  return <div></div>
};

export default Controllers;