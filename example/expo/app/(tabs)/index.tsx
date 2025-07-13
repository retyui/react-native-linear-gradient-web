// import App from "../../src/App";
// export default App;
import { useState } from "react";
import { StyleSheet, Text, View, Platform, ColorValue } from "react-native";
import { LinearGradient as LinearGradientNativeExpo } from "expo-linear-gradient";
// @ts-ignore
import LinearGradientWebOld from "react-native-web-linear-gradient";
import LinearGradientWeb from "react-native-linear-gradient-web";
import Slider from "@react-native-community/slider";

const colors = [
  "gold",
  "blue",
  "purple",
  "red",
  "orange",
  "yellow",
  "green",
  "pink",
  "cyan",
  "magenta",
];

export default function App() {
  const [cords, setCords] = useState({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  });

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.container,
          {
            ...Platform.select({
              web: {
                backgroundImage: `linear-gradient(116.565deg, rgb(255, 215, 0), rgb(0, 0, 255), rgb(128, 0, 128), rgb(255, 0, 0), rgb(255, 165, 0), rgb(255, 255, 0), rgb(0, 128, 0), rgb(255, 192, 203), rgb(0, 255, 255), rgb(255, 0, 255))`,
              },
              default: {
                experimental_backgroundImage: `linear-gradient(116.565deg, rgb(255, 215, 0), rgb(0, 0, 255), rgb(128, 0, 128), rgb(255, 0, 0), rgb(255, 165, 0), rgb(255, 255, 0), rgb(0, 128, 0), rgb(255, 192, 203), rgb(0, 255, 255), rgb(255, 0, 255))`,
              },
            }),
          },
        ]}
      >
        <Text style={styles.t}>
          {Platform.select({
            web: `backgroundImage: linear-gradient(...)`,
            default: `experimental_backgroundImage: linear-gradient(...)`,
          })}
        </Text>
      </View>
      <LinearGradientNativeExpo
        // @ts-ignore
        colors={colors}
        start={cords.start}
        end={cords.end}
        style={styles.container}
      >
        <Text style={styles.t}>expo-linear-gradient</Text>
      </LinearGradientNativeExpo>
      {Platform.select({
        web: (
          <LinearGradientWebOld
            colors={colors}
            start={cords.start}
            end={cords.end}
            style={styles.container}
          >
            <Text style={styles.t}>react-native-web-linear-gradient</Text>
          </LinearGradientWebOld>
        ),
        get default() {
          const LinearGradientNative =
            require("react-native-linear-gradient").default;
          return (
            <LinearGradientNative
              colors={colors}
              start={cords.start}
              end={cords.end}
              style={styles.container}
            >
              <Text style={styles.t}>react-native-linear-gradient</Text>
            </LinearGradientNative>
          );
        },
      })}
      {Platform.select({
        web: (
          <LinearGradientWeb
            colors={colors}
            start={cords.start}
            end={cords.end}
            style={styles.container}
          >
            <Text style={styles.t}>react-native-linear-gradient-web</Text>
          </LinearGradientWeb>
        ),
      })}

      <View style={styles.r}>
        <Text>Start X:</Text>
        <Slider
          style={styles.s}
          value={cords.start.x}
          onValueChange={(v) =>
            setCords((prev) => ({ ...prev, start: { ...prev.start, x: v } }))
          }
          minimumValue={0}
          maximumValue={cords.end.x - 0.01}
        />
      </View>
      <View style={styles.r}>
        <Text>Start Y:</Text>
        <Slider
          style={styles.s}
          value={cords.start.y}
          onValueChange={(v) =>
            setCords((prev) => ({ ...prev, start: { ...prev.start, y: v } }))
          }
          minimumValue={0}
          maximumValue={cords.end.y - 0.01}
        />
      </View>
      <View style={styles.r}>
        <Text>End X:</Text>
        <Slider
          style={styles.s}
          value={cords.end.x}
          onValueChange={(v) =>
            setCords((prev) => ({ ...prev, end: { ...prev.end, x: v } }))
          }
          minimumValue={cords.start.x + 0.01}
          maximumValue={1}
        />
      </View>
      <View style={styles.r}>
        <Text>End Y:</Text>
        <Slider
          style={styles.s}
          value={cords.end.y}
          onValueChange={(v) =>
            setCords((prev) => ({ ...prev, end: { ...prev.end, y: v } }))
          }
          minimumValue={cords.start.y + 0.01}
          maximumValue={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    marginHorizontal: "auto",
  },
  container: {
    width: 400,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  t: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#000",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 99,
    boxShadow: "0 1px 10px rgba(0,0,0,0.5)",
  },
  r: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  s: {
    width: 250,
    height: 16,
  },
});
