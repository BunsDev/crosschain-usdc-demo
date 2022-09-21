import { Chain } from "./chains";

export const CIRCLE_SWAP_EXECUTABLE = {
  [Chain.AVALANCHE]: "0x5010710477b32c9c0F48B303b1aAa51e7C12b652",
  [Chain.ETHEREUM]: "0x2bF739f86e437b742b062aA416e3d31a69218923",
};

export const MESSAGE_TRANSMITTER = {
  [Chain.AVALANCHE]: "0x52FfFb3EE8Fa7838e9858A2D5e454007b9027c3C",
  [Chain.ETHEREUM]: "0x40A61D3D2AfcF5A5d31FcDf269e575fB99dd87f7",
  [Chain.MOONBEAM]: "",
  [Chain.FANTOM]: "",
  [Chain.POLYGON]: "",
};

export const CIRCLE_BRIDGE = {
  [Chain.AVALANCHE]: "0x0fC1103927AF27aF808D03135214718bCEDbE9ad",
  [Chain.ETHEREUM]: "0xdAbec94B97F7b5FCA28f050cC8EeAc2Dc9920476",
  [Chain.MOONBEAM]: "",
  [Chain.FANTOM]: "",
  [Chain.POLYGON]: "",
};
