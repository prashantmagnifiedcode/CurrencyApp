import React ,{useState}from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground, TouchableOpacity,  Dimensions,
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import ModalView from './modal'
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const GoodDoctor=()=>{
    const [visible, setVisible] =useState(false);
  return (
    <>
    <View style={{marginVertical:10}}>

<View style={{ width: "100%", marginTop: 35, paddingVertical: 2 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "500",
                    marginBottom: 10,
                    zindex: -1,
                    paddingHorizontal: 5,
                  }}
                >
    Recommanded Doctor{" "}
                </Text>
              </View>
              <View
                style={{
                  height: 25,
                  elevation: 1,
                  backgroundColor: "gray",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity>
                  <TouchableOpacity
                    
                  >
                    <Text style={{ color: "white", fontSize: 13 }}>
                    Good Treatment
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView horizontal={true} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ 
          alignItems: 'center' }}
          >
            
         
          <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin:3
          }}
        >
          
              <View
                
                style={{
                  borderRadius:10,
                  overflow: "hidden",
                  width: width / 2 -20,
                  marginBottom: 20,
                  
                  borderRadius: 10 * 2,
                }}
                >
                <BlurView
                  tint="dark"
                  intensity={12}
                  style={{
                    padding: 10,
                  }}
                  

                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                    onPress={() => setVisible(true)}
                    
                  >
                    <Image
                      source={{
                        uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                      }}
                      
                      
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,

                        
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: 30,
                        borderTopEndRadius:20,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: 8,
                        }}
                      >
                       <FontAwesome
                              name="heart-o"
                              size={17}
                              color={"white"}
                            />
                        <Text
                         style={{
                          color: "white",
                          marginLeft: 5,
                        }}
                        >
                          3453
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={1}
                    style={{
                    
                      color: "gray",
                      fontWeight: "600",
                      fontSize: 10* 1.3,
                      marginTop:10,
                      marginBottom: 5,
                    }}
                  >
                    Prashant Srivastava
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: "#aacbff", fontSize: 10 * 1.2 }}
                    
                  >
                    Heart Treatment
                  </Text>
                  <View
                    style={{
                      
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: "orange",
                          marginRight:5,
                          fontSize: 10* 1.2,
                        }}
                      >
                        Excelent
                      </Text>
                      {/* <Text
                        style={{ color: "black", fontSize:  1.6 }}
                      >
                        12/5/20
                      </Text> */}
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#f0f0f0",
                        padding:  5,
                        borderRadius: 10,
                        
                      }}
                  

                    >
                      <FontAwesome
                              name="heart-o"
                              size={15}
                              color={"white"}
                            />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            
        </View>
        <ModalView visible={visible}  setVisible={setVisible}/>
        </ScrollView>
    </View>
    </>
  );
};

export default GoodDoctor;
