import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TDragableItem = 'result' | 'operator' | 'number' | 'equal' | 'line';

interface IDragableItem {
  element: TDragableItem;
}

export interface IActiveButton {
  activeButton: 'runtime' | 'constructor';
  result: number;
  isDragging: boolean;
  canvasItems: IDragableItem[];
  dragableItem: IDragableItem | null;
  isResultControllerUsed: boolean;
  isOperatorsControllerUsed: boolean;
  isNumbersControllerUsed: boolean;
  isEqualControllerUsed: boolean;
}

export type TActiveButton = 'runtime' | 'constructor';

const initialState: IActiveButton = {
  activeButton: 'constructor',
  result: 0,
  isDragging: false,
  canvasItems: [],
  dragableItem: null,
  isResultControllerUsed: false,
  isOperatorsControllerUsed: false,
  isNumbersControllerUsed: false,
  isEqualControllerUsed: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setActiveButton: (state, action: PayloadAction<TActiveButton>) => {
      state.activeButton = action.payload;
    },
    setIsDragging: (state, action: PayloadAction<boolean>) => {
      state.isDragging = action.payload;
    },
    setDragableItem: (state, action: PayloadAction<IDragableItem | null>) => {
      state.dragableItem = action.payload;
    },
    addItemtoCanvas: (state, action: PayloadAction<IDragableItem>) => {
      if (action.payload.element === 'result') {
        state.canvasItems.unshift(action.payload);
        return;
      }

      state.canvasItems.push(action.payload);
    },
    setIsResultControllerUsed: (state, action: PayloadAction<boolean>) => {
      state.isResultControllerUsed = action.payload;
    },
    setIsOperatorsControllerUsed: (state, action: PayloadAction<boolean>) => {
      state.isOperatorsControllerUsed = action.payload;
    },
    setIsNumbersControllerUsed: (state, action: PayloadAction<boolean>) => {
      state.isNumbersControllerUsed = action.payload;
    },
    setIsEqualControllerUsed: (state, action: PayloadAction<boolean>) => {
      state.isEqualControllerUsed = action.payload;
    },
    putLineOnTheTop: (state) => {
      const filtred = state.canvasItems.filter(item => item.element !== 'line');
      filtred.push({ element: 'line' });
      state.canvasItems = filtred;
    },
  },
});

export const {
  setActiveButton,
  setIsDragging,
  setDragableItem,
  addItemtoCanvas,
  setIsResultControllerUsed,
  setIsOperatorsControllerUsed,
  setIsNumbersControllerUsed,
  setIsEqualControllerUsed,
  putLineOnTheTop,
} = mainSlice.actions;

export default mainSlice.reducer;