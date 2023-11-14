import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeScanner, selectScannerVisibility } from "./scannerSlice";

export function Scanner(): JSX.Element {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectScannerVisibility);

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={STYLES.container}>
        <TouchableOpacity onPress={() => dispatch(closeScanner())}>
          <Image source={IMAGES.CROSS} style={STYLES.closeImage} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  closeImage: {
    width: 50,
    height: 50,
  },
});
