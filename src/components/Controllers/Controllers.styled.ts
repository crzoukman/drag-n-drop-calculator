import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 240px;
`;

export const ControllerWrapperStyled = styled.div<{ isUsed?: boolean, isOnCanvas?: boolean }>`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: ${({ isUsed, isOnCanvas }) => {
    if (isOnCanvas) return 'default';
    return isUsed ? 'default' : 'grab'
  }};
  opacity: ${({ isUsed }) => isUsed ? '0.25' : 'unset'};

   user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`;