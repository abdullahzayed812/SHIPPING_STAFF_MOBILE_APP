import { StyleSheet, Text, View } from "react-native";
import { Input } from "../global/Input";
import { GLOBAL_STYLES } from "../../utils/styles";
import { FONT_MEDIUM_BOLD } from "../../utils/fonts";
import { SPACING } from "../../utils/dimensions";
import { useState } from "react";
import { SectionTitle } from "../global/SectionTitle";

interface InputsEditProps {
  width: number;
  length: number;
  height: number;
  weight: number;
  index: number;
  observeChange(index: number, value: string, placeholder: string): void;
}

export function InputsEdit({
  width,
  length,
  height,
  weight,
  index,
  observeChange,
}: InputsEditProps): JSX.Element {
  const [shipmentDimensions, setShipmentDimensions] = useState({
    width: width.toString(),
    length: length.toString(),
    height: height.toString(),
    weight: weight.toString(),
  });

  const handleInputChange = (text: string, placeholder: string) => {
    setShipmentDimensions((prev) => ({ ...prev, [placeholder]: text }));
    observeChange(index, text, placeholder);
  };

  return (
    <>
      <View style={STYLES.container}>
        <Input
          numeric
          placeholder="Width"
          inputContainerStyle={STYLES.inputContainer}
          handleChange={(text) => handleInputChange(text, "width")}
          value={shipmentDimensions.width}
        />
        <Text style={STYLES.text}>X</Text>
        <Input
          numeric
          placeholder="Length"
          inputContainerStyle={STYLES.inputContainer}
          handleChange={(text) => handleInputChange(text, "length")}
          value={shipmentDimensions.length}
        />
        <Text style={STYLES.text}>X</Text>
        <Input
          numeric
          placeholder="Height"
          inputContainerStyle={STYLES.inputContainer}
          handleChange={(text) => handleInputChange(text, "height")}
          value={shipmentDimensions.height}
        />
      </View>
      <SectionTitle text="Weight" marginTop={SPACING.MEDIUM} />
      <Input
        numeric
        placeholder="Weight"
        handleChange={(text) => handleInputChange(text, "weight")}
        value={shipmentDimensions.weight}
      />
    </>
  );
}

const STYLES = StyleSheet.create({
  container: GLOBAL_STYLES.DIRECTION_ROW,
  text: { ...FONT_MEDIUM_BOLD, marginHorizontal: SPACING.SMALL / 3 },
  inputContainer: { flex: 1 },
});
