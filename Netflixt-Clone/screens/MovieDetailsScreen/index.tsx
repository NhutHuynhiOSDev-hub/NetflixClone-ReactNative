import { FlatList, Platform, Pressable, View } from "react-native";
import { Text } from "../../components/Themed";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

import movie from "../../assets/movie";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeasion = movie.seasons.items[0];
const firstEpisode = firstSeasion.episodes.items[0];

const MovieDetailsScreen = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const seasonNames = movie.seasons.items.map(({ id, name }) => {
    return {
      label: name,
      value: id,
    };
  });
  const [dropdownItems, setDropdownItems] = useState(seasonNames);
  const [dropdownValues, setDropdownValue] = useState(seasonNames[0]);
  const [currentSeason, setCurrentSeason] = useState(firstSeasion);
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode);

  return (
    <View style={styles.container}>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onPress={(episode) => {
              setCurrentEpisode(episode);
            }}
          />
        )}
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
            <DropDownPicker
              containerStyle={{
                marginBottom: openDropdown ? dropdownItems.length * 40 : 0,
              }}
              open={openDropdown}
              value={dropdownValues}
              items={dropdownItems}
              setOpen={setOpenDropdown}
              onChangeValue={(itemValue) => {
                for (var i = 0; i < dropdownItems.length; i++) {
                  if (dropdownItems[i].value === itemValue) {
                    setCurrentSeason(movie.seasons.items[i]);
                  }
                }
              }}
              setValue={setDropdownValue}
              setItems={setDropdownItems}
            />
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
