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
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Notification = () => {
  const Navigation = useNavigation();
  const tab = createBottomTabNavigator();
  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      <View style={{ height: "100%", width: "100%", alignItems: "center",backgroundColor:"white" }}>
      <LinearGradient colors={['transparent','transparent','radial-gradient(at right center, rgb(56, 189, 248), rgb(49, 46, 129))']}
   style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      
   }} />
        {/* header section */}
        <View style={{ height: hp(18), width: "100%",display:"flex", alignItems: "center",justifyContent:"center" }}>
            <View>
                <Text style={{fontSize:22,color:"gray"}}>Notifications</Text>
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
                    borderRadius: 25,
                    justifyContent: "space-around",
                    elevation:2,
                    paddingVertical:5,
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
                    {/* <View
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
                    </View> */}
                    <View >
                      <Text style={{color:"orange",fontSize:12}}>Warrring Update</Text>
                      <Text style={styles.bubble} >Dr.merradsfasdf</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon name="more-vert" size={17} color={"#1f98d6"} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 8}}>
                    <View
                      style={{
                        
                        borderRadius: 5,
                        
                        dispaly: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"flex-end",
                        fontSize:"3px"
                      }}
                    >
                      {/* <View
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
                      </View> */}
                      <View style={{ fontSize:"38px",marginHorizontal:12
                     
                    }}>
                        <Text style={{ color: "gray",fontSize:8 }}>
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
   fontSize:12
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
export default Notification;
