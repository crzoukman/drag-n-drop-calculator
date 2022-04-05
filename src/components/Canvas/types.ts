import { IDragableItem, TActiveButton, TDragableItem } from "redux/slices/main.slice";

export interface ICanvas {
  isCanvasEmpty: boolean;
  isCanvasFull: boolean;
  dropHandler: (arg: React.DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
  activeButton: TActiveButton;
  dragableItem: IDragableItem | null;
  canvasItems: IDragableItem[];
  removeHandler: (arg: TDragableItem) => void;
  calculationHandler: (arg: string) => void;
  evaluationHandler: () => void;
  dragOverHandler: (arg: React.DragEvent<HTMLDivElement>) => void
}