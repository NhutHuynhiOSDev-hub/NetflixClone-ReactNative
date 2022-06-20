import { Image, View } from "react-native";
import styles from "./styles";

import movie from "../../assets/movie";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
    </View>
  );
};

export default MovieDetailsScreen;
