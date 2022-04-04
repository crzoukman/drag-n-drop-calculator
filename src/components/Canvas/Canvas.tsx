import { FC } from "react"
import { HeaderStyled, InnerWrapperStyled, LineStyled, TextStyled, WrapperStyled } from "./Canvas.styled";
import { ReactComponent as Image } from 'assets/image.svg'
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { addItemtoCanvas, putLineOnTheTop, setIsEqualControllerUsed, setIsNumbersControllerUsed, setIsOperatorsControllerUsed, setIsResultControllerUsed } from "redux/slices/main.slice";
import OperatorController from "components/OperatorController";
import { ControllerWrapperStyled } from "components/Controllers/Controllers.styled";
import { numbersController, operatorsController } from "components/Controllers/config";
import NumberController from "components/NumberController";
import Result from "components/Result";
import { v4 as uuidv4 } from 'uuid';
import EqualController from "components/EqualController";
import ZeroController from "components/ZeroController";
import config from "config";

const imageStyles = {
  width: '20px',
  height: '20px',
  marginBottom: '12px',
};

const Canvas: FC = () => {
  const {
    isDragging,
    canvasItems,
    dragableItem
  } = useTypedSelector(state => state.main);
  const dispatch = useTypedDispatch();

  const isCanvasEmpty = canvasItems.length === 0;
  const isCanvasFull = canvasItems.length === config.MAX_CANVAS_LENGTH;

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // console.log('zone drag over:', e);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('zone drop:', e);
    if (dragableItem) {
      if (dragableItem.element === 'result') {
        dispatch(setIsResultControllerUsed(true));
      }

      if (dragableItem.element === 'operator') {
        dispatch(setIsOperatorsControllerUsed(true));
      }

      if (dragableItem.element === 'number') {
        dispatch(setIsNumbersControllerUsed(true));
      }

      if (dragableItem.element === 'equal') {
        dispatch(setIsEqualControllerUsed(true));
      }

      dispatch(addItemtoCanvas(dragableItem));

      if (canvasItems.length === 0) {
        dispatch(addItemtoCanvas({ element: 'line' }));
      }

      dispatch(putLineOnTheTop());
    };
  };

  return (
    <WrapperStyled
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}
      isDragging={isDragging}
      isCanvasEmpty={isCanvasEmpty}
    >
      {canvasItems.map(item => {
        if (item.element === 'result') {
          return (
            <ControllerWrapperStyled key={uuidv4()} >
              <Result />
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'operator') {
          return (
            <ControllerWrapperStyled key={uuidv4()} >
              {operatorsController.map(operator =>
                <OperatorController key={uuidv4()} >
                  {operator}
                </OperatorController>
              )}
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'number') {
          return (
            <ControllerWrapperStyled key={uuidv4()}>
              {numbersController.map(operator =>
                <NumberController key={uuidv4()} >
                  {operator}
                </NumberController>
              )}

              <ZeroController />

              <NumberController>
                ,
              </NumberController>
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'equal') {
          return (
            <ControllerWrapperStyled key={uuidv4()} >
              <EqualController />
            </ControllerWrapperStyled>
          );
        }

        if (item.element === 'line') {
          return (
            <LineStyled
              isDragging={isDragging}
              isCanvasFull={isCanvasFull}
            />
          );
        }

        return null;
      })}

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