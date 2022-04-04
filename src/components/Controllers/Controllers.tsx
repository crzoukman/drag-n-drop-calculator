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

const Controllers: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    isResultControllerUsed,
    isOperatorsControllerUsed,
    isNumbersControllerUsed,
    isEqualControllerUsed,
    canvasItems,
  } = useTypedSelector(state => state.main);

  const isCanvasFull = canvasItems.length === config.MAX_CANVAS_LENGTH;

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, type: TDragableItem) => {
    console.log('start ', e)
    dispatch(setIsDragging(true));
    dispatch(setDragableItem({ element: type }));
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>, type: string) => {
    console.log('leave ', e)
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>, type: string) => {
    console.log('end ', e)
    dispatch(setIsDragging(false));
    dispatch(setDragableItem(null));
  };

  if (!isCanvasFull) {
    return (
      <WrapperStyled>
        <ControllerWrapperStyled
          draggable={!isResultControllerUsed}
          onDragStart={(e) => dragStartHandler(e, 'result')}
          onDragLeave={(e) => dragLeaveHandler(e, 'result')}
          onDragEnd={(e) => dragEndHandler(e, 'result')}
          isUsed={isResultControllerUsed}
        >
          <Result />
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isOperatorsControllerUsed}
          onDragStart={(e) => dragStartHandler(e, 'operator')}
          onDragLeave={(e) => dragLeaveHandler(e, 'operator')}
          onDragEnd={(e) => dragEndHandler(e, 'operator')}
          isUsed={isOperatorsControllerUsed}
        >
          {operatorsController.map(item =>
            <OperatorController key={item} >
              {item}
            </OperatorController>
          )}
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isNumbersControllerUsed}
          onDragStart={(e) => dragStartHandler(e, 'number')}
          onDragLeave={(e) => dragLeaveHandler(e, 'number')}
          onDragEnd={(e) => dragEndHandler(e, 'number')}
          isUsed={isNumbersControllerUsed}
        >
          {numbersController.map(item =>
            <NumberController key={item} >
              {item}
            </NumberController>
          )}

          <ZeroController />

          <NumberController>
            ,
          </NumberController>
        </ControllerWrapperStyled>

        <ControllerWrapperStyled
          draggable={!isEqualControllerUsed}
          onDragStart={(e) => dragStartHandler(e, 'equal')}
          onDragLeave={(e) => dragLeaveHandler(e, 'equal')}
          onDragEnd={(e) => dragEndHandler(e, 'equal')}
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