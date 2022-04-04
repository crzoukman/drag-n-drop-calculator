import styled from "styled-components";

interface IWrappedStyled {
  isDragging: boolean;
  isCanvasEmpty: boolean;
}

export const WrapperStyled = styled.div<IWrappedStyled>`
  width: 244px;
  min-height: 480px;
  border: ${({ isCanvasEmpty }) => isCanvasEmpty ? '2px dashed #C4C4C4' : '2px dashed transparent'};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isCanvasEmpty }) => isCanvasEmpty ? 'center' : 'unset'};
  align-items: ${({ isCanvasEmpty }) => isCanvasEmpty ? 'center' : 'unset'};
  background-color: ${({ isDragging, isCanvasEmpty }) => isCanvasEmpty && isDragging ? '#f0f9ff' : 'white'};
  gap: ${({ isCanvasEmpty }) => isCanvasEmpty ? 'unset' : '11px'};
`;

export const InnerWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderStyled = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #5D5FEF;
  margin-bottom: 4px;
`;

export const TextStyled = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #6B7280;

`;

export const LineStyled = styled.div<{ isDragging: boolean, isCanvasFull: boolean }>`
  background-color: #5D5FEF;
  height: 2px;
  width: 100%;
  display: ${({ isDragging, isCanvasFull }) => isDragging && !isCanvasFull ? 'unset' : 'none'};
`;