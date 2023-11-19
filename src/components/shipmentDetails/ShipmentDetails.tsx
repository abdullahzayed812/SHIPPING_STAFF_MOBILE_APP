import { ScrollView, StyleSheet, View } from "react-native";
import { ShipmentInfo } from "./ShipmentInfo";
import { ShipmentDetailsButtons } from "./ShipmentDetailsButtons";
import { COLORS } from "../../utils/colors";

export type ShipmentDetailsType = {
  awb: string;
  store: string;
  receiver_name: string;
  receiver_city: string;
  receiver_address: string;
  status: string;
  delivery_attempts: number;
  quantity: number;
};

interface ShipmentDetailsProps {
  detailsObject: Readonly<ShipmentDetailsType | undefined>;
}

export function ShipmentDetails({ detailsObject }: ShipmentDetailsProps): JSX.Element {
  return (
    <View style={{ backgroundColor: COLORS.WHITE }}>
      <ShipmentInfo detailsObject={detailsObject} />
      <ShipmentDetailsButtons />
    </View>
  );
}

const STYLES = StyleSheet.create({});
