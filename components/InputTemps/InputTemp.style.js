import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    position: "relative",
  },
  input: {
    borderWidth: 3,
    borderColor: "orange",
    backgroundColor: "white",
    marginHorizontal: "10%",
    borderRadius: 999,
    alignSelf: "stretch",
    paddingLeft: 20,
  },
  unity: {
    position: "absolute",
    right: 60,
    top: "50%",
    fontSize: 20,
    fontWeight: "bold",
    transform: [{ translateY: "-50%" }],
  },
});
