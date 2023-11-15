import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface ScannerState {
  isActive: boolean;
  scannedValue: string;
}

// Define the initial state using that type
const initialState: ScannerState = {
  isActive: true,
  scannedValue: "",
};

export const scannerSlice = createSlice({
  name: "scanner",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openScanner: (state) => {
      state.isActive = true;
    },
    closeScanner: (state) => {
      state.isActive = false;
    },
  },
});

export const { openScanner, closeScanner } = scannerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScannerVisibility = (state: RootState) => state.scanner.isActive;

export default scannerSlice.reducer;
