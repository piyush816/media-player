import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

import * as VideoThumbnails from "expo-video-thumbnails";

const VideoItem = ({ video, onClick }) => {
  const [image, setImage] = useState();

  useEffect(async () => {
    if (video.uri) {
      const { uri } = await VideoThumbnails.getThumbnailAsync(video.uri);
      setImage(uri);
    }
  }, []);

  return (
    <TouchableNativeFeedback onPress={onClick}>
      <View style={styles.video}>
        <Image
          style={styles.thumbnail}
          resizeMode="cover"
          source={{
            uri: image,
          }}
        />

        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <Text style={styles.title}>{video.filename}</Text>
          {video.duration && (
            <View style={styles.duration}>
              <Text style={{ fontSize: 12, color: "white" }}>
                {(video.duration / 60).toFixed(1)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  video: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    flexDirection: "row",
  },
  thumbnail: {
    width: 150,
    height: 80,
    marginRight: 14,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
    flexWrap: "wrap",
  },
  duration: {
    backgroundColor: "rgba(0,0,0,0.5)",

    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    flex: 0,
    alignSelf: "flex-start",
  },
});
