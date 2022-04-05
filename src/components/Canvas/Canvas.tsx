import { FC } from "react"
import { HeaderStyled, InnerWrapperStyled, LineStyled, TextStyled, WrapperStyled } from "./Canvas.styled";
import { ReactComponent as Image } from 'assets/image.svg'
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { addItemtoCanvas, removeItemFromCanvas, resetCalculation, setCalculation, setIsDragging, setIsEqualControllerUsed, setIsNumbersControllerUsed, setIsOperatorsControllerUsed, setIsResultControllerUsed, setResult, TDragableItem } from "redux/slices/main.slice";
import OperatorController from "components/OperatorController";
import { ControllerWrapperStyled } from "components/Controllers/Controllers.styled";
import { numbersController, operatorsController } from "components/Controllers/config";
import NumberController from "components/NumberController";
import Result from "components/Result";
import { v4 as uuidv4 } from 'uuid';
import EqualController from "components/EqualController";
import ZeroController from "components/ZeroController";
import config from "config";
import { imageStyles } from "./config";
import { isValid } from "utils/isValid";

const Canvas: FC = () => {

  const {
    isDragging,
    canvasItems,
    dragableItem,
    activeButton,
    result,
    calculation,
  } = useTypedSelector(state => state.main);
  const dispatch = useTypedDispatch();

  console.log(calculation);

  const isCanvasEmpty = canvasItems.length === 0;
  const isCanvasFull = canvasItems.length === config.MAX_CANVAS_LENGTH;

  const setWhichControllerIsUsed = (
    controller: TDragableItem,
    payload: boolean
  ) => {
    if (controller === 'result') {
      dispatch(setIsResultControllerUsed(payload));
    }

    if (controller === 'operator') {
      dispatch(setIsOperatorsControllerUsed(payload));
    }

    if (controller === 'number') {
      dispatch(setIsNumbersControllerUsed(payload));
    }

    if (controller === 'equal') {
      dispatch(setIsEqualControllerUsed(payload));
    }
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (dragableItem) {
      setWhichControllerIsUsed(dragableItem.element, true);
      dispatch(addItemtoCanvas(dragableItem));
    };
  };

  const removeHandler = (item: TDragableItem) => {
    if (activeButton === 'constructor') {
      dispatch(removeItemFromCanvas(item));
      setWhichControllerIsUsed(item, false);
      dispatch(setIsDragging(false));
    }
  };

  const calculationHandler = (data: string) => {
    if (activeButton === 'runtime') {
      let arg = data;
      console.log(data)
      if (data === 'x') arg = '*';
      if (data === ',') arg = '.';

      dispatch(setCalculation(arg));

    }
  };

  const evaluationHandler = () => {
    try {
      const valid = isValid(calculation);
      if (!valid) {
        dispatch(setResult('На ноль делить низзя'));
        dispatch(resetCalculation());
        return;
      }

      const res = eval(calculation);
      dispatch(setResult(res));
      dispatch(resetCalculation());
    } catch (e) {
      dispatch(setResult('Неверное выражение'));
      dispatch(resetCalculation());
    }

  };

  return (
    <WrapperStyled
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}
      isDragging={isDragging}
      isCanvasEmpty={isCanvasEmpty}
      activeButton={activeButton}
    >
      {dragableItem?.element === 'result' && (
        <LineStyled
          isDragging={isDragging}
          isCanvasFull={isCanvasFull}
          isCanvasEmpty={isCanvasEmpty}
        />
      )}

      {canvasItems.map(item => {
        if (item.element === 'result') {
          return (
            <ControllerWrapperStyled
              key={uuidv4()}
              onDoubleClick={() => removeHandler('result')}
              style={{ cursor: 'default' }}
            >
              <Result />
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'operator') {
          return (
            <ControllerWrapperStyled
              key={uuidv4()}
              onDoubleClick={() => removeHandler('operator')}
              isOnCanvas={true}
            >
              {operatorsController.map(operator =>
                <OperatorController
                  key={uuidv4()}
                  isOnCanvas={true}
                  isCanvasFull={isCanvasFull}
                  calculationHandler={calculationHandler}
                >
                  {operator}
                </OperatorController>
              )}
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'number') {
          return (
            <ControllerWrapperStyled
              key={uuidv4()}
              onDoubleClick={() => removeHandler('number')}
              isOnCanvas={true}
            >
              {numbersController.map(operator =>
                <NumberController
                  key={uuidv4()}
                  isOnCanvas={true}
                  isCanvasFull={isCanvasFull}
                  calculationHandler={calculationHandler}
                >
                  {operator}
                </NumberController>
              )}

              <ZeroController
                isOnCanvas={true}
                isCanvasFull={isCanvasFull}
                calculationHandler={calculationHandler}
              />

              <NumberController
                isOnCanvas={true}
                isCanvasFull={isCanvasFull}
                calculationHandler={calculationHandler}
              >
                ,
              </NumberController>
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'equal') {
          return (
            <ControllerWrapperStyled
              key={uuidv4()}
              onDoubleClick={() => removeHandler('equal')}
              isOnCanvas={true}
            >
              <EqualController
                isOnCanvas={true}
                isCanvasFull={isCanvasFull}
                evaluationHandler={evaluationHandler}
              />
            </ControllerWrapperStyled>
          );
        }

        return null;
      })}

      {dragableItem?.element !== 'result' && (
        <LineStyled
          isDragging={isDragging}
          isCanvasFull={isCanvasFull}
          isCanvasEmpty={isCanvasEmpty}
        />
      )}

      {isCanvasEmpty &&
        <InnerWrapperStyled>
          <Image style={imageStyles} fill='black' />
          <HeaderStyled>Перетащите сюда</HeaderStyled>
          <TextStyled>любой элемент</TextStyled>
          <TextStyled>из левой панели</TextStyled>
        </InnerWrapperStyled>
      }
    </WrapperStyled>
  );
};

export default Canvas;