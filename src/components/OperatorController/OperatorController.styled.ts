import styled from "styled-components"

interface IWrapperStyled {
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
}

export const WrapperStyled = styled.div<IWrapperStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #E2E3E5;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  cursor: ${({ isOnCanvas, isCanvasFull }) => {
    if (!isOnCanvas) return 'grab';
    return isOnCanvas ? 'pointer' : 'default'
  }};

  &:hover {
    border: ${({ isOnCanvas, isCanvasFull }) => isOnCanvas ? '2px solid #5D5FEF' : '1px solid #E2E3E5'};
  }

`;