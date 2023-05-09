import React from "react";
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


import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const Treatment=()=>{
  
  return (
    <>
    <View style={{backgroundColor:'#f0f0f0',marginVertical:10}}>

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
                  Your Treatment History
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
        
            
       <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
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
                  intensity={5}
                  style={{
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image
                      source={{uri:"https://st.depositphotos.com/1017986/3149/i/950/depositphotos_31498345-stock-photo-two-doctors-showing-tablet-pc.jpg"}} 
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
                       <Icon
                          style={{
                            marginLeft: 5,
                          }}
                          name="star"
                          color="yellow"
                          size={17}
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
                      <Icon
                        name="add"
                        size={20}
                        color={"white"}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            
        </View>
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
                  intensity={5}
                  style={{
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image
                      source={{uri:"https://st.depositphotos.com/1017986/3149/i/950/depositphotos_31498345-stock-photo-two-doctors-showing-tablet-pc.jpg"}} 
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
                       <Icon
                          style={{
                            marginLeft: 5,
                          }}
                          name="star"
                          color="yellow"
                          size={17}
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
                      <Icon
                        name="add"
                        size={20}
                        color={"white"}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            
        </View>
        </View>  
        
    </View>
    </>
  );
};

export default Treatment;
