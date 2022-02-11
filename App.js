import { enableScreens } from "react-native-screens";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VideoListScreen from "./screens/VideoListScreen";
import VideoScreen from "./screens/VideoScreen";
import { StatusBar } from "react-native";

enableScreens(true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      onStateChange={(route) => {
        if (route.index == 1) {
          StatusBar.setHidden(true);
        } else {
          StatusBar.setHidden(false);
        }
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          gestureEnabled: true,
          animationTypeForReplace: "push",

          headerStyle: { backgroundColor: "#2196f3" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "Media Player" }}
          component={VideoListScreen}
        />
        <Stack.Screen
          name="video"
          options={{
            headerShown: false,
            orientation: "landscape",
          }}
          component={VideoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
