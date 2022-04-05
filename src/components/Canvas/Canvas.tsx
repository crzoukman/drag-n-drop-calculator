import { FC } from "react"
import { HeaderStyled, InnerWrapperStyled, LineStyled, TextStyled, WrapperStyled } from "./Canvas.styled";
import { ReactComponent as Image } from 'assets/image.svg'
import { imageStyles } from "./config";
import { ICanvas } from "./types";
import CanvasItems from "components/CanvasItems";

const Canvas: FC<ICanvas> = ({
  isCanvasEmpty,
  isCanvasFull,
  dropHandler,
  isDragging,
  activeButton,
  dragableItem,
  canvasItems,
  removeHandler,
  calculationHandler,
  evaluationHandler,
  dragOverHandler,
}) => {
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

      <CanvasItems
        isCanvasFull={isCanvasFull}
        canvasItems={canvasItems}
        removeHandler={removeHandler}
        calculationHandler={calculationHandler}
        evaluationHandler={evaluationHandler}
      />

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
  )
}

export default Canvas