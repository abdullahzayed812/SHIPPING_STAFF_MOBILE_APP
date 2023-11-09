import { Container } from "../components/global/Container";
import { ScanBox } from "../components/home/ScanBox";
import { UserInfo } from "../components/home/UserInfo";
import { COLORS } from "../utils/colors";
import { SPACING } from "../utils/dimensions";
import { IMAGES } from "../utils/images";

export function HomeScreen(): JSX.Element {
  return (
    <Container>
      <UserInfo />
      <ScanBox
        image={IMAGES.SCAN1}
        backgroundColor={COLORS.DARK_MAIN}
        text={"Scan Shipment\nBy Scanner"}
        flexDirection="row-reverse"
        color={COLORS.WHITE}
      />
      <ScanBox
        image={IMAGES.SCAN3}
        backgroundColor={COLORS.MAIN}
        text={"Scan Shipment\nBy Camera"}
        imageSize={{
          width: SPACING.SCAN2_IMAGE_HEIGHT,
          height: SPACING.SCAN2_IMAGE_HEIGHT,
        }}
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
      />
    </Container>
  );
}
