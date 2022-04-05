import { FC } from "react"
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useTypedDispatch } from "redux/hooks/useTypedDispatch";
import { addItemtoCanvas, removeItemFromCanvas, resetCalculation, setCalculation, setIsDragging, setResult, TDragableItem } from "redux/slices/main.slice";
import config from "config";
import { isValid } from "utils/isValid";
import Canvas from "./Canvas";
import { setWhichControllerIsUsed } from "utils/setWhichControllerIsUsed";
import { replacer } from "utils/replacer";
import { rounder } from "utils/rounder";

const CanvasContainer: FC = () => {
  const {
    isDragging,
    canvasItems,
    dragableItem,
    activeButton,
    calculation,
  } = useTypedSelector(state => state.main);
  const dispatch = useTypedDispatch();

  const isCanvasEmpty = canvasItems.length === 0;
  const isCanvasFull = canvasItems.length === config.MAX_CANVAS_LENGTH;

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (dragableItem) {
      setWhichControllerIsUsed(dragableItem.element, true, dispatch);
      dispatch(addItemtoCanvas(dragableItem));
    };
  };

  const removeHandler = (item: TDragableItem) => {
    if (activeButton === 'constructor') {
      dispatch(removeItemFromCanvas(item));
      setWhichControllerIsUsed(item, false, dispatch);
      dispatch(setIsDragging(false));
    }
  };

  const calculationHandler = (data: string) => {
    if (activeButton === 'runtime') {
      dispatch(setCalculation(replacer(data)));
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
      dispatch(setResult(rounder(res)));
      dispatch(resetCalculation());
    } catch (e) {
      dispatch(setResult('Неверное выражение'));
      dispatch(resetCalculation());
    }

  };

  return (
    <Canvas
      isCanvasEmpty={isCanvasEmpty}
      isCanvasFull={isCanvasFull}
      dropHandler={dropHandler}
      isDragging={isDragging}
      activeButton={activeButton}
      dragableItem={dragableItem}
      canvasItems={canvasItems}
      removeHandler={removeHandler}
      calculationHandler={calculationHandler}
      evaluationHandler={evaluationHandler}
      dragOverHandler={dragOverHandler}
    />
  );
};

export default CanvasContainer;