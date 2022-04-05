import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TDragableItem = 'result' | 'operator' | 'number' | 'equal';

interface IDragableItem {
  element: TDragableItem;
}

export interface IActiveButton {
  activeButton: 'runtime' | 'constructor';
  result: number | string;
  isDragging: boolean;
  canvasItems: IDragableItem[];
  dragableItem: IDragableItem | null;
  isResultControllerUsed: boolean;
  isOperatorsControllerUsed: boolean;
  isNumbersControllerUsed: boolean;
  isEqualControllerUsed: boolean;
  calculation: string;
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
  calculation: '',
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
    removeItemFromCanvas: (state, action: PayloadAction<TDragableItem>) => {
      const filtred = state.canvasItems.filter(item => {
        return item.element !== action.payload;
      });

      state.canvasItems = filtred;
    },
    setResult: (state, action: PayloadAction<number | string>) => {
      state.result = action.payload;
    },
    setCalculation: (state, action: PayloadAction<string>) => {
      state.calculation = state.calculation + action.payload;
      state.result = state.calculation;
    },
    resetCalculation: (state) => {
      state.calculation = '';
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
  removeItemFromCanvas,
  setResult,
  setCalculation,
  resetCalculation,
} = mainSlice.actions;

export default mainSlice.reducer;