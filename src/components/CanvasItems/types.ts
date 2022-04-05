import { IDragableItem, TDragableItem } from "redux/slices/main.slice";

export interface ICanvasItems {
  isCanvasFull: boolean;
  canvasItems: IDragableItem[];
  removeHandler: (arg: TDragableItem) => void;
  calculationHandler: (arg: string) => void;
  evaluationHandler: () => void;
}
