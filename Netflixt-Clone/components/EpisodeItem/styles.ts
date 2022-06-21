import { StyleSheet, useColorScheme } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
  },
  mainBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 5,
  },

  plot: { color: "darkgrey" },
  duration: {
    fontSize: 10,
    color: "grey",
  },
});

export default styles;
