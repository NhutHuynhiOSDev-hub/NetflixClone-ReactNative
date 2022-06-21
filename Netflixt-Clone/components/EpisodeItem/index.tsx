import { AntDesign } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { Text } from "../Themed";
import styles from "./styles";

interface EpisodeItemProps {
  episodes: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episodes } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainBlock}>
        <Image style={styles.image} source={{ uri: episodes.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episodes.title}</Text>
          <Text style={styles.duration}>{episodes.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episodes.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
