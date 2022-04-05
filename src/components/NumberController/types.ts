import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  isOnCanvas?: boolean;
  isCanvasFull?: boolean;
  calculationHandler?: (data: string) => void;
}