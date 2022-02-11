import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import VideoItem from "../components/VideoItem";
import * as MediaLibrary from "expo-media-library";

const VideoListScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([
    {
      id: "1",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb: "images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
    },
    {
      id: "2",
      description: "The first Blender Open Movie from 2006",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb: "images/ElephantsDream.jpg",
      title: "Elephant Dream",
    },
    {
      id: "3",
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
    },
    {
      id: "4",
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
    },
    {
      id: "5",
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
    },
    {
      id: "6",
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerJoyrides.jpg",
      title: "For Bigger Joyrides",
    },
    {
      id: "7",
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      ],
      subtitle: "By Google",
      thumb: "images/ForBiggerMeltdowns.jpg",
      title: "For Bigger Meltdowns",
    },
  ]);

  useEffect(() => {
    const getVideos = async () => {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (granted) {
        const data = await MediaLibrary.getAssetsAsync({ mediaType: "video" });

        setVideos(data.assets);
      }
    };
    getVideos();
  }, []);
  return (
    <View style={{ backgroundColor: "#f5f6fa", flex: 1 }}>
      <FlatList
        contentContainerStyle={{ paddingTop: 8 }}
        data={videos}
        renderItem={({ item }) => (
          <VideoItem
            onClick={() => {
              navigation.navigate("video", { url: item.uri });
            }}
            video={item}
          />
        )}
      />
    </View>
  );
};

export default VideoListScreen;

const styles = StyleSheet.create({});
