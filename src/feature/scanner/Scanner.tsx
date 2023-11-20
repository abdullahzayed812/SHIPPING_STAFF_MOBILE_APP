import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/colors";
import { useEffect, useRef, useState } from "react";
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
import {
  ShipmentDetails,
  ShipmentDetailsType,
} from "../../components/shipmentDetails/ShipmentDetails";
import { ApiManager } from "../../api/apiManager";
import { Loading } from "../../components/global/Loading";
import { ScanStackScreenProps } from "../../navigations/types";

interface ScannerProps {
  navigation: ScanStackScreenProps<"ScannerScreen">["navigation"];
}

export function Scanner({ navigation }: ScannerProps): JSX.Element {
  const shipmentBarcodeRef = useRef<string>();

  const dispatch = useAppDispatch();
  const isActiveCamera = useAppSelector(selectScannerVisibility);
  const isActiveModal = useAppSelector(selectScannerModalVisibility);

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");

  if (device == null) return <Text>No camera device found.</Text>;

  const [loading, setLoading] = useState<boolean>(false);
  const [isScanSuccess, setIsScanSuccess] = useState<boolean>(false);
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetailsType>();

  useEffect(() => {
    requestPermission();
  }, []);

  const getShipmentDetails = async (awb: string | undefined) => {
    dispatch(closeScanner());

    if (awb!.length > 14) {
      try {
        setLoading(true);

        const res = await ApiManager.getShipmentDetails(awb!);

        if (res?.data?.awb) {
          const data: ShipmentDetailsType = res.data;

          setLoading(false);
          dispatch(closeScannerModal());

          navigation.navigate("ShipmentDetailsScreen", data);
          return;
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: Code[]) => {
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

        {/* {shipmentBarcodeRef.current?.length! >= 14 && isScanSuccess ? (
          <View>
            <Text>{shipmentBarcodeRef.current}</Text>
            <Button
              text="Shipment Details"
              onPress={() => navigation.navigate("ShipmentDetailsScreen", shipmentDetails!)}
            />
          </View>
        ) : null} */}
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
