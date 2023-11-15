import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeScanner, selectScannerVisibility } from "./scannerSlice";
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import { SPACING } from "../../utils/dimensions";

export function Scanner(): JSX.Element {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  if (device == null) return <Text>No camera device found.</Text>;

  const [scannedValue, setScannedValue] = useState<Code[]>();

  useEffect(() => {
    requestPermission();
  }, []);

  const dispatch = useAppDispatch();
  const isActive = useAppSelector(selectScannerVisibility);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: Code[]) => {
      setScannedValue(codes);
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  return (
    <Modal visible={isActive} transparent animationType="slide">
      <View style={STYLES.container}>
        <TouchableOpacity onPress={() => dispatch(closeScanner())}>
          <Image source={IMAGES.CROSS} style={STYLES.closeImage} />
        </TouchableOpacity>

        {hasPermission ? (
          <Camera
            style={STYLES.camera}
            device={device}
            isActive={isActive}
            codeScanner={codeScanner}
          />
        ) : null}

        {scannedValue?.map((code) => (
          <Text>{code.value}</Text>
        ))}
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
  camera: {
    width: 300,
    height: 150,
    alignSelf: "center",
    marginTop: 200,
  },
});
