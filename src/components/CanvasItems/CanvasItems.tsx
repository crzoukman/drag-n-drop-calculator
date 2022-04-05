import { ControllerWrapperStyled } from "components/Controllers/Controllers.styled";
import NumberController from "components/NumberController";
import OperatorController from "components/OperatorController";
import { FC } from "react"
import { v4 as uuidv4 } from 'uuid';
import Result from "components/Result";
import { numbersController, operatorsController } from "components/Controllers/config";
import ZeroController from "components/ZeroController";
import EqualController from "components/EqualController";
import { ICanvasItems } from "./types";

const CanvasItems: FC<ICanvasItems> = ({
  isCanvasFull,
  canvasItems,
  removeHandler,
  calculationHandler,
  evaluationHandler,
}) => {

  return (
    <>
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
    </>
  );
};

export default CanvasItems;