import { FlatList, Image, Platform, Pressable, View } from "react-native";
import { Text } from "../../components/Themed";
import styles from "./styles";

import movie from "../../assets/movie";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";

const firstSeasion = movie.seasons.items[0];
const firstEpisode = firstSeasion.episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

      <FlatList
        data={firstSeasion.episodes.items}
        renderItem={({ item }) => <EpisodeItem episodes={item} />}
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <Pressable
              onPress={() => {
                console.warn("Play");
              }}
              style={styles.btnPlay}
            >
              <Text style={styles.playText}>
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-play" : "md-play"}
                  color="black"
                  size={16}
                />{" "}
                Play
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                console.warn("Download");
              }}
              style={styles.btnDownload}
            >
              <Text style={styles.downloadText}>
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-download" : "md-download"}
                  size={16}
                  color="white"
                />{" "}
                Download
              </Text>
            </Pressable>
            <Text style={styles.plot}>{movie.plot}</Text>
            <Text style={styles.year}>{movie.cast}</Text>
            <Text style={styles.year}>{movie.creator}</Text>
            <View style={styles.btnMenuContainer}>
              <View style={styles.btnMenu}>
                <AntDesign name="plus" size={30} color="white" />
                <Text style={styles.btnMenuText}>My list</Text>
              </View>
              <View style={styles.btnMenu}>
                <AntDesign name="like2" size={30} color="white" />

                <Text style={styles.btnMenuText}>Rate</Text>
              </View>
              <View style={styles.btnMenu}>
                <FontAwesome name="paper-plane-o" size={28} color="white" />
                <Text style={styles.btnMenuText}>Share</Text>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
