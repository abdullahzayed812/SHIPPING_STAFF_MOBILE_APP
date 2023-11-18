import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface ScannerState {
  isActiveCamera: boolean;
  isActiveModal: boolean;
  scannedValue: string;
}

// Define the initial state using that type
const initialState: ScannerState = {
  isActiveCamera: false,
  isActiveModal: false,
  scannedValue: "",
};

export const scannerSlice = createSlice({
  name: "scanner",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openScannerModal: (state) => {
      state.isActiveModal = true;
    },
    closeScannerModal: (state) => {
      state.isActiveModal = false;
    },
    openScanner: (state) => {
      state.isActiveCamera = true;
    },
    closeScanner: (state) => {
      state.isActiveCamera = false;
    },
  },
});

export const { openScanner, closeScanner, openScannerModal, closeScannerModal } =
  scannerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScannerVisibility = (state: RootState) => state.scanner.isActiveCamera;
export const selectScannerModalVisibility = (state: RootState) => state.scanner.isActiveModal;

export default scannerSlice.reducer;
