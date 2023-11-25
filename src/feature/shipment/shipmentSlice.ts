import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ShipmentDetailsType } from "../../components/shipmentDetails/ShipmentDetails";

interface shipmentCollectionToUpdateType {
  messenger_id: number;
  status_id: number;
  drs_id: number;
  awbs: string[];
}

interface ShipmentState {
  scannedShipmentsList: ShipmentDetailsType[];
  shipmentCollectionToUpdate: shipmentCollectionToUpdateType;
}

const initialState: ShipmentState = {
  scannedShipmentsList: [],
  shipmentCollectionToUpdate: {
    messenger_id: 0,
    status_id: 0,
    drs_id: 0,
    awbs: [],
  },
};

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    addScannedShipment(state, action) {
      state.scannedShipmentsList.push(action.payload);
    },
    clearShipmentsList(state) {
      state.scannedShipmentsList = [];
    },
    addShipmentStatusId(state, action) {
      state.shipmentCollectionToUpdate.status_id = action.payload;
    },
    addShipmentDriverId(state, action) {
      state.shipmentCollectionToUpdate.messenger_id = action.payload;
    },
    addShipmentDrsId(state, action) {
      state.shipmentCollectionToUpdate.drs_id = action.payload;
    },
    addShipmentAWBs(state, action) {
      state.shipmentCollectionToUpdate.awbs = action.payload;
    },
  },
});

export const {
  addScannedShipment,
  clearShipmentsList,
  addShipmentStatusId,
  addShipmentDriverId,
  addShipmentAWBs,
  addShipmentDrsId,
} = shipmentSlice.actions;

export const selectScannedShipmentList = (state: RootState) => state.shipment.scannedShipmentsList;

export default shipmentSlice.reducer;
