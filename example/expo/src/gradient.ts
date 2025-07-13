import { Platform } from "react-native";

export default Platform.select({
  get web() {
    return require("react-native-linear-gradient-web").default;
  },
  get default() {
    return require("react-native-linear-gradient").default;
  },
});
