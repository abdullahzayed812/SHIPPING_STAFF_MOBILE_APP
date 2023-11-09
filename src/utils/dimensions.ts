import { Dimensions } from "react-native";

export const SPACING = {
  SMALL: 20,
  MEDIUM: 30,
  LARGE: 40,
  AVATAR_SIZE: 36,
  SCAN1_IMAGE_WIDTH: 135,
  SCAN1_IMAGE_HEIGHT: 130,
  SCAN2_IMAGE_WIDTH: 122,
  SCAN2_IMAGE_HEIGHT: 120,
  SCAN3_IMAGE_WIDTH: 172,
  SCAN3_IMAGE_HEIGHT: 132,
  SCAN_BOX_HEIGHT: 107,
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function calcWidth(width: number): number {
  return (width / SCREEN_WIDTH) * 100;
}

export function calcHeight(height: number): number {
  return (height / SCREEN_HEIGHT) * 100;
}
