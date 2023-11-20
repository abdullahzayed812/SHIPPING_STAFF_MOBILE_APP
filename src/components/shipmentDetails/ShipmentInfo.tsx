import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SPACING } from "../../utils/dimensions";
import { FONT_LARGE_BOLD, FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { IMAGES } from "../../utils/images";
import { GLOBAL_STYLES } from "../../utils/styles";
import { COLORS } from "../../utils/colors";
import { ShipmentDetailsItem } from "./ShipmentDetailsItem";
import { Line } from "../global/Line";
import type { ShipmentDetailsType } from "./ShipmentDetails";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ShipmentStackParamList } from "../../navigations";

interface ShipmentInfoProps {
  detailsObject: Readonly<ShipmentDetailsType | undefined>;
}

export function ShipmentInfo({ detailsObject }: ShipmentInfoProps): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ShipmentStackParamList>>();

  const {
    awb,
    store,
    receiver_name,
    receiver_city,
    receiver_address,
    status,
    delivery_attempts,
    quantity,
  } = detailsObject!;

  return (
    <View style={STYLES.container}>
      <View style={STYLES.header}>
        <View style={GLOBAL_STYLES.DIRECTION_ROW}>
          <Image source={IMAGES.DETAILS} style={{ marginRight: SPACING.SMALL / 2 }} />
          <Text style={FONT_MEDIUM_BOLD}>{awb}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("EditShipmentScreen", { awb })}>
          <Image source={IMAGES.EDIT} />
        </TouchableOpacity>
      </View>
      <ShipmentDetailsItem itemName="Store" value={store} />
      <ShipmentDetailsItem itemName="Receiver" value={receiver_name} />
      <Line />
      <ShipmentDetailsItem itemName="City" value={receiver_city} />
      <ShipmentDetailsItem itemName="Address" value={receiver_address} />
      <ShipmentDetailsItem itemName="Status" value={status} />
      <Line />
      <ShipmentDetailsItem itemName="Delivery Attempt" value={delivery_attempts} />
      <ShipmentDetailsItem itemName="Number Of Pieces" value={quantity} />
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    padding: SPACING.SMALL,
    borderTopRightRadius: SPACING.SMALL,
    borderTopLeftRadius: SPACING.SMALL,
    elevation: 20,
    backgroundColor: COLORS.WHITE,
  },
  header: { ...GLOBAL_STYLES.SPACE_BETWEEN, marginBottom: SPACING.SMALL / 2 },
  shipmentNumber: FONT_LARGE_BOLD,
});
