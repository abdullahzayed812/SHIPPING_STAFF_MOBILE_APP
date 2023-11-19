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
import { RootStackParamList } from "../../navigations/types";
import { ShipmentDetailsType } from "../../components/shipmentDetails/ShipmentDetails";
import { ApiManager } from "../../api/apiManager";
import { Loading } from "../../components/global/Loading";

interface ScannerProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function Scanner({ navigation }: ScannerProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isActiveCamera = useAppSelector(selectScannerVisibility);
  const isActiveModal = useAppSelector(selectScannerModalVisibility);

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  if (device == null) return <Text>No camera device found.</Text>;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const getShipmentDetails = async (awb: string | undefined) => {
    if (awb!.length > 14) {
      try {
        setLoading(true);

        const res = await ApiManager.getShipmentDetails(awb!);

        if (res?.data?.awb) {
          navigation.navigate("ShipmentStackScreen", {
            screen: "ShipmentDetailsScreen",
            params: res?.data,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: Code[]) => {
      dispatch(closeScanner());
      getShipmentDetails(codes[0].value);
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
      {loading ? <Loading /> : null}
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
