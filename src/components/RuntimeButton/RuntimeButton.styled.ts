import { TActiveButton } from "redux/slices/main.slice";
import styled from "styled-components";

export const WrapperStyled = styled.div<{ activeButton: TActiveButton }>`
  width: 108px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #4D5562;
  cursor: pointer;
  background-color: ${({ activeButton }) => activeButton === 'runtime' ? 'white' : 'unset'};
  border: ${({ activeButton }) => activeButton === 'runtime' ? '2px solid #f3f4f6' : '2px solid transparent'};
`;