import styled from "styled-components"

export const WrapperStyled = styled.div<{ isUsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #E2E3E5;
  color: #111827;
  background-color: #F3F4F6;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: ${({ isUsed }) => isUsed ? '18px' : '36px'};
  line-height: 44px;
  padding-right: 8px;
  overflow: hidden;
`;