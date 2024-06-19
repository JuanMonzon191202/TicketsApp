import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Tickets"
        onPress={() => navigation.navigate("Tickets")}
      />
    </View>
  );
};

export default HomeScreen;
