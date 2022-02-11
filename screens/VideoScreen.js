import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

const VideoScreen = ({ route }) => {
  const { url } = route.params;
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    video.current.presentFullscreenPlayer();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          backgroundColor: "black",
        }}
        source={{
          uri: url,
        }}
        useNativeControls
        shouldPlay
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
