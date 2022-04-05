import styled from "styled-components"

interface IWrapperStyled {
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
}

export const WrapperStyled = styled.div<IWrapperStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #E2E3E5;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: white;
  background-color: #5D5FEF;

  cursor: ${({ isOnCanvas, isCanvasFull }) => {
    if (!isOnCanvas) return 'grab';
    return isOnCanvas ? 'pointer' : 'default'
  }};
`;