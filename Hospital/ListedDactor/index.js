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
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ListedDoctor = () => {
  const Navigation = useNavigation();
  const tab = createBottomTabNavigator();
  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
        {/* header section */}
        <View style={{ height: hp(28), width: "100%", position: "relative" }}>
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
            source={{
              uri: "https://media.istockphoto.com/id/512278456/photo/group-of-doctors-at-the-hospital.jpg?b=1&s=170667a&w=0&k=20&c=09AO9XyKQ--Jj5u0mZ3WfOcoHx-E3fb_-J5LHvsTurE=",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -38,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginHorizontal: 5,
                backgroundColor: "gray",
                width: wd(85),
                borderRadius: 10,
                alignItems: "center",
                height: hp(12),
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  elevation: 8,
                  borderColor: "skyblue",
                  borderWidth: 1,
                  padding: 2,
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU",
                  }}
                />
              </View>

              <View style={{ paddingLeft: 20, color: "gray" }}>
                <Text style={{ color: "skyblue" }}>Dr prashant Srivastava</Text>
                <Text style={{ color: "gray" }}>Available 45:60</Text>
                <Text style={{ color: "gray" }}>
                  <FontAwesome
                    name="location-arrow"
                    size={17}
                    color={"skyblue"}
                  />
                  <Text style={{ paddingRight: 5 }}>
                    &nbsp;&nbsp;&nbsp;Delhi
                  </Text>
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="star" size={13} color={"orange"} />
                  <Icon name="star" size={13} color={"orange"} />
                  <Icon name="star" size={13} color={"orange"} />
                  <Text style={{ fontSize: 10 }}>&nbsp;4.7</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* about section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ zIndex: -1, marginTop: 55, width: "100%" }}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {list.map((e) => {
            return (
              <>
                <View
                  key={e.id}
                  style={{
                    flex: 1,
                    width: 320,
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "space-around",
                    elevation: 8,
                    height: 120,
                    marginVertical: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 12,
                    }}
                  >
                    <View
                      style={{
                        height: 53,
                        width: 53,
                        elevation: 5,
                        borderRadius: 53,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: "skyblue",
                        borderBottomWidth: 3,
                        borderTopWidth: 3,
                        borderRightWidth: 3,
                      }}
                    >
                      <Image
                        style={{ height: 50, width: 50, borderRadius: 50 }}
                        source={{
                          uri: "https:t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg",
                        }}
                      />
                    </View>
                    <View style={{ marginLeft: -100 }}>
                      <Text>Dr.name</Text>
                      <Text>Dr.merradsfasdf</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon name="more-vert" size={25} color={"#1f98d6"} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 10 }}>
                    <View
                      style={{
                        backgroundColor: "skyblue",
                        borderRadius: 5,
                        elevation: 5,
                        dispaly: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        height: 40,
                      }}
                    >
                      <View
                        style={{
                          width: 40,
                          backgroundColor: "#1f98d6",
                          height: "100%",
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon name="watch-later" size={30} color={"skyblue"} />
                      </View>
                      <View style={{ marginLeft: 4 }}>
                        <Text style={{ color: "white" }}>
                          13 Feb 8:00 AM -9:00AM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bubble: {
    height: 400,
    width: 40,
    backgroundColor: "skyblue",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1f98d6",
    borderRadius: 20,
    height: 48,
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 16,
  },
  label: {
    color: "gray",
    fontSize: 15,
    fontWeight: "400",
  },
  root: {
    backgroundColor: "white",
    flex: 1,
    position: "relative",
  },
  safeAreaView: {
    flex: 1,
  },
  subtitle: {
    color: "gray",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
  },
  textInput: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "gray",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
  },
});
export default ListedDoctor;
