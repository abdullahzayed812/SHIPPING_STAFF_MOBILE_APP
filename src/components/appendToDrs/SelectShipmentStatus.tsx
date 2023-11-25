import { View } from "react-native";
import { SectionTitle } from "../global/SectionTitle";
import { SelectStatusButtons } from "./SelectStatusButtons";
import { SPACING } from "../../utils/dimensions";
import { Dispatch, SetStateAction } from "react";

interface SelectShipmentStatusProps {
  setSelectedStatusId: Dispatch<SetStateAction<number>>;
}

export function SelectShipmentStatus({
  setSelectedStatusId,
}: SelectShipmentStatusProps): JSX.Element {
  return (
    <View style={{ marginVertical: SPACING.SMALL / 2 }}>
      <SectionTitle text="Status" marginTop={20} />
      <SelectStatusButtons setSelectedStatusId={setSelectedStatusId} />
    </View>
  );
}
