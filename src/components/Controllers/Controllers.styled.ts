import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 240px;
`;

export const ControllerWrapperStyled = styled.div<{ isUsed?: boolean }>`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: ${({ isUsed }) => isUsed ? 'default' : 'grab'};
  opacity: ${({ isUsed }) => isUsed ? '0.5' : 'unset'};
`;