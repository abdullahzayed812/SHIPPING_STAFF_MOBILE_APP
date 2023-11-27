import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS } from "../../utils/colors";

interface DropdownComponentProps {
  title: string;
  label: string;
  list: { [index: string]: string }[];
  onSelect: Dispatch<SetStateAction<string>>;
  marginTop?: number;
  updateStatus?: boolean;
}

export function DropdownComponent({
  title,
  label,
  list,
  marginTop,
  onSelect,
  updateStatus,
}: DropdownComponentProps) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: COLORS.MAIN }]}>{title}</Text>;
    }
    return null;
  };

  const handleChange = (item: { [index: string]: string }) => {
    setValue(item.value);
    setIsFocus(false);
    updateStatus ? onSelect(item.value) : onSelect(item.id);
  };

  return (
    <View style={[styles.container, { marginTop }]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: COLORS.MAIN }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={{ color: COLORS.BLACK }}
        data={list}
        search
        maxHeight={300}
        labelField={label}
        valueField="value"
        placeholder={!isFocus ? title : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
      />
    </View>
  );
}

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "white",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: COLORS.BLACK,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: COLORS.BLACK,
  },
});
