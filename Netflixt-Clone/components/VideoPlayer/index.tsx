import { Video } from "expo-av";
import React, { useEffect } from "react";
import { Episode } from "../../types";
import { Text, View } from "../Themed";
import styles from "./styles";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { episode } = props;

  // useEffect(() => {
  //   if (!videoRef.current) {
  //     return;
  //   }
  //   async() => {
  //     await videoRef.current.
  //   }
  // })

  return (
    <View>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        useNativeControls
        resizeMode="containt"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
