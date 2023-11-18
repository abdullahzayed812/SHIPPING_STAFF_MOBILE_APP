import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  closeScanner,
  closeScannerModal,
  selectScannerModalVisibility,
  selectScannerVisibility,
} from "./scannerSlice";
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScanStackParamList } from "../../navigations/types";

interface ScannerProps {
  navigation: NativeStackNavigationProp<ScanStackParamList>;
}

export function Scanner({ navigation }: ScannerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isActiveCamera = useAppSelector(selectScannerVisibility);
  const isActiveModal = useAppSelector(selectScannerModalVisibility);

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  if (device == null) return <Text>No camera device found.</Text>;

  const [scannedValue, setScannedValue] = useState<string>();

  useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: Code[]) => {
      setScannedValue(codes[0].value);
      dispatch(closeScanner());
      dispatch(closeScannerModal());
      navigation.navigate("ShipmentDetailsScreen", { awb: scannedValue! });
    },
  });

  const handleCloseScanner = () => {
    dispatch(closeScannerModal());
    dispatch(closeScanner());
    navigation.goBack();
  };

  return (
    <Modal visible={isActiveModal} transparent animationType="slide">
      <View style={STYLES.container}>
        <TouchableOpacity onPress={handleCloseScanner}>
          <Image source={IMAGES.CROSS} style={STYLES.closeImage} />
        </TouchableOpacity>

        {hasPermission && isActiveCamera ? (
          <Camera
            style={STYLES.camera}
            device={device}
            isActive={isActiveCamera}
            codeScanner={codeScanner}
          />
        ) : null}
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
