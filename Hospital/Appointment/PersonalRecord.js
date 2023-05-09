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
import GraphModal from './Heartmodal'
const { width } = Dimensions.get("window");

const PersonalReport=()=>{
    const [visible, setVisible] =useState(false);
    const [Graphview, setGraphview] =useState(false);
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
    Your healthy{" "}
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
                       onPress={()=> setGraphview(true)}
                    
                  >
                    <Text style={{ color: "white", fontSize: 13 }}>
                    Good Treatment
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:2}}>

            <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            flex:1,
            justifyContent: "space-around",
            margin:3
          }}
        >
          
              <View
                
                style={{
                  borderRadius:10,
                  overflow: "hidden",
                  width: width / 2 -40,
                  height:50,
                  marginBottom: 20,
                  borderRadius: 10 * 2,
                  backgroundColor:"red",
                  position:"relative"
                }}
                >
                <ImageBackground
           source={{uri:"https://www.ideafit.com/wp-content/uploads/files/shutterstock_38146159-1024x686.jpg"}} 
           
           style={{height: "100%", width: "100%",borderRadius:20}}
         />
                  <BlurView
                    tint="dark"
                    intensity={12}
                    style={{
                      // padding: 10,
                      position:"absolute",
                      top:0,right:0
                    }}
                    
        
                  >
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: "100%",
                      }}
                      onPress={() => setGraphview(true)}
                      
                    >
                      {/* <Image
                        source={{
                          uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                        }}
                        
                        
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
        
                          
                        }}
                      /> */}
                      {/* <Text>Minumum Rate:170 bpm</Text> */}
                      
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
                 
                  </BlurView>
              </View>
              <View
                
                style={{
                  borderRadius:10,
                  overflow: "hidden",
                  width: width / 2 -40,
                  height:50,
                  marginBottom: 20,
                  borderRadius: 10 * 2,
                  backgroundColor:"red",
                  position:"relative"
                }}
                >
                <ImageBackground
           source={{uri:"https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/05/20070851/Heart-Rate-min-1.jpg"}} 
           
           style={{height: "100%", width: "100%",borderRadius:20}}
         />
                  <BlurView
                    tint="dark"
                    intensity={12}
                    style={{
                      // padding: 10,
                      position:"absolute",
                      top:0,right:0
                    }}
                    
        
                  >
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: "100%",
                      }}
                      onPress={() => setGraphview(true)}
                      
                    >
                      {/* <Image
                        source={{
                          uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                        }}
                        
                        
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
        
                          
                        }}
                      /> */}
                      {/* <Text>Minumum Rate:170 bpm</Text> */}
                      
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
                 
                  </BlurView>
              </View>
              <View
                
                style={{
                  borderRadius:10,
                  overflow: "hidden",
                  width: width / 2 -40,
                  height:50,
                  marginBottom: 20,
                  borderRadius: 10 * 2,
                  backgroundColor:"red",
                  position:"relative"
                }}
                >
                <ImageBackground
           source={{uri:"https://cdn-prod.medicalnewstoday.com/content/images/articles/282/282760/two-fingers-feeling-for-radial-pulse.jpg"}} 
           
           style={{height: "100%", width: "100%",borderRadius:20}}
         />
                  <BlurView
                    tint="dark"
                    intensity={12}
                    style={{
                      // padding: 10,
                      position:"absolute",
                      top:0,right:0
                    }}
                    
        
                  >
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: "100%",
                      }}
                      onPress={() => setGraphview(true)}
                      
                    >
                      {/* <Image
                        source={{
                          uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                        }}
                        
                        
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
        
                          
                        }}
                      /> */}
                      {/* <Text>Minumum Rate:170 bpm</Text> */}
                      
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
                 
                  </BlurView>
              </View>
            
        </View>
        
            </View>
          </View>
        
        {/* <ModalView visible={visible}  setVisible={setVisible}/> */}
        <GraphModal Graphview={Graphview}  setGraphview={setGraphview}/>
    </View>
    </>
  );
};

export default PersonalReport;
