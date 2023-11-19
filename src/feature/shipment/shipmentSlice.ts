import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ShipmentDetailsType } from "../../components/shipmentDetails/ShipmentDetails";

interface ShipmentState {
  scannedShipmentsList: ShipmentDetailsType[];
}

const initialState: ShipmentState = {
  scannedShipmentsList: [],
};

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    addShipment(state, action) {
      state.scannedShipmentsList.push(action.payload);
    },
    clearShipmentsList(state) {
      state.scannedShipmentsList = [];
    },
  },
});

export const { addShipment, clearShipmentsList } = shipmentSlice.actions;

export const selectScannedShipmentList = (state: RootState) => state.shipment.scannedShipmentsList;

export default shipmentSlice.reducer;
