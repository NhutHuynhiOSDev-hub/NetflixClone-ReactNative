import { setStatusBarStyle } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  ageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    paddingHorizontal: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  btnPlay: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  plot: {
    marginVertical: 10,
  },
  playText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  btnDownload: {
    backgroundColor: "grey",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  downloadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  btnMenuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnMenu: {
    padding: 10,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnMenuText: {
    color: "grey",
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
