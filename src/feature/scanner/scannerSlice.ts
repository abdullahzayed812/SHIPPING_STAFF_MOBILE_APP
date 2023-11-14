import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface ScannerState {
  isVisible: boolean;
  scannedValue: string;
}

// Define the initial state using that type
const initialState: ScannerState = {
  isVisible: true,
  scannedValue: "",
};

export const scannerSlice = createSlice({
  name: "scanner",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openScanner: (state) => {
      state.isVisible = true;
    },
    closeScanner: (state) => {
      state.isVisible = false;
    },
  },
});

export const { openScanner, closeScanner } = scannerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScannerVisibility = (state: RootState) => state.scanner.isVisible;

export default scannerSlice.reducer;
