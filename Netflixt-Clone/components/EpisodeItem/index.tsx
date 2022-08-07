import { AntDesign } from "@expo/vector-icons";
import { View, Image, Pressable } from "react-native";
import { Episode } from "../../types";
import { Text } from "../Themed";
import styles from "./styles";

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episodeItem: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;

  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => {
        onPress(episode);
      }}
    >
      <View style={styles.mainBlock}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
