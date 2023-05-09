import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const SuccessScreen = () => {
  const Navigation = useNavigation();
  const tab = createBottomTabNavigator();

  return (
    <>
      <View
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: "2%" }}>
          <FontAwesome5 name="thumbs-up" size={90} color="skyblue" />
        </View>
        <View style={styles.container}>
          <Text style={{ color: "gray" }}>Thank You !</Text>
          <Text style={{ color: "gray" }}>Successfully Appointment Booked</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SuccessScreen;
