import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container } from "../components/global/Container";
import { ScanBox } from "../components/home/ScanBox";
import { UserInfo } from "../components/home/UserInfo";
import { COLORS } from "../utils/colors";
import { SPACING } from "../utils/dimensions";
import { IMAGES } from "../utils/images";
import { HomeStackParamList, RootStackParamList, TabStackParamList } from "../navigations/types";
import { useAppDispatch } from "../app/hooks";
import { openScanner } from "../feature/scanner/scannerSlice";

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<TabStackParamList>;
}

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const navigateToScannerInput = () => {
    navigation.navigate("Home", { screen: "ScanShipmentScreen" });
  };

  const navigateToScannerCamera = () => {
    navigation.navigate("Scan");
    dispatch(openScanner());
  };

  return (
    <Container>
      <UserInfo />
      <ScanBox
        image={IMAGES.SCAN1}
        backgroundColor={COLORS.DARK_MAIN}
        text={"Scan Shipment\nBy Scanner"}
        flexDirection="row-reverse"
        color={COLORS.WHITE}
        handlePress={navigateToScannerInput}
      />
      <ScanBox
        image={IMAGES.SCAN3}
        backgroundColor={COLORS.MAIN}
        text={"Scan Shipment\nBy Camera"}
        imageSize={{
          width: SPACING.SCAN2_IMAGE_HEIGHT,
          height: SPACING.SCAN2_IMAGE_HEIGHT,
        }}
        handlePress={navigateToScannerCamera}
      />
      <ScanBox
        image={IMAGES.SCAN2}
        backgroundColor={COLORS.LIGHT_MAIN}
        text={"Scan Shipment\nFor Sorting"}
        flexDirection="row-reverse"
        imageSize={{
          width: SPACING.SCAN3_IMAGE_HEIGHT,
          height: SPACING.SCAN3_IMAGE_HEIGHT,
        }}
        handlePress={navigateToScannerInput}
      />
    </Container>
  );
}
