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
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WebView } from 'react-native-webview';
import MapView from "react-native-maps";
import { BlurView } from "expo-blur";
import { useSelector, useDispatch } from "react-redux";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { Marker, Callout } from "react-native-maps";
// import Pic from './Crousal'
import Satified_person from './SatifiedCustomer'
import GoodDoctor from './RecommandDoctor'
import PersonalReport from './PersonalRecord'
// import ModalView from './modal'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import HearRateGraph from  '../graph/heart';
import { auth ,database} from "../Config/firebase";

const { width } = Dimensions.get("window");

const mapdarkstyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];
const SelectDocker = () => {
   
  const time = [
    { time: "4:45 AM" },
    { time: "4:45 AM" },
    { time: "4:45 AM" },
    { time: "4:45 AM" },
    { time: "4:45 AM" },
  ];
  const categories = [
    { id: 1, iconname: "teeth", name: "FontAwesome5", related: "Teeth" },
    { id: 2, iconname: "heartbeat", name: "FontAwesome5", related: "Heart" },
    {
      id: 3,
      iconname: "brain",
      name: "MaterialCommunityIcons",
      related: "Brain",
    },
    { id: 5, iconname: "mail", name: "Icon", related: "Back" },
    { id: 4, iconname: "eye", name: "FontAwesome5", related: "Eye" },
    { id: 6, iconname: "mail", name: "Icon", related: "Tongo" },
  ];
  const data = [
    { id: 1, name: "prasnat" },
    { id: 2, name: "prasnat" },
    { id: 3, name: "prasnat" },
    { id: 5, name: "prasnat" },
    { id: 4, name: "prasnat" },
    { id: 6, name: "prasnat" },
  ];
  const Navigation = useNavigation();
  const tab = createBottomTabNavigator();
  //detail form useselect
  const userdata=useSelector((state)=>state.UserData)
  const{FullName,Email}=userdata;
  console.log("userdata",userdata,FullName)




  //   const renderpart=({name})=>{
  //     return(
  //       <>
  //     <View
  //     style={{flex:1 ,width:320,backgroundColor:"white",borderRadius:20, justifyContent:"space-around",elevation:8,height:150,margin:3}}>
  //       <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:12}}>

  //       <View
  //               style={{ height:53,width:53,elevation:5,
  //               borderRadius:53 ,
  //               display:"flex",justifyContent:"center",
  //               alignItems:"center",borderColor:"skyblue",borderBottomWidth:3,borderTopWidth:3,borderRightWidth:3}}>

  //           <Image style={{ height:50,width:50,borderRadius:50}} source={{uri:"https://t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg"}} />

  //               </View>
  //       <View  style={{marginLeft:-100}}>
  //           <Text >Dr.{name}</Text>
  //           <Text >Dr.merradsfasdf</Text>

  //               </View>
  //               <View
  //              >
  //               <TouchableOpacity >

  //           <Icon name='more-vert' size={25} color={"#1f98d6"}  />
  //               </TouchableOpacity>
  //               </View>

  //       </View>

  //       <View style={{paddingHorizontal:10}}>

  // <View style={{backgroundColor:"skyblue",borderRadius:5,elevation:5,dispaly:"flex",flexDirection:"row",alignItems:"center",height:40}}>
  //   <View style={{width:40,backgroundColor:"#1f98d6",height:"100%",borderTopLeftRadius:5,borderBottomLeftRadius:5,alignItems:"center",justifyContent:"center"}}><Icon name='watch-later' size={30} color={"skyblue"}  /></View>
  //   <View style={{marginLeft:4}}><Text style={{color:"white"}}>13 Feb 8:00 AM -9:00AM</Text></View>
  // </View>

  //       </View>

  //       </View >
  //       </>
  //     )

  //   }
  const Avaibale_Doctor = () => {
    return (
      <>
        <Marker coordinate={{ latitude: 28.5261, longitude: 77.08 }}>
          <View
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="location-pin" size={85} color={"skyblue"} />
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                elevation: 8,
                top: "13%",
                borderWidth: 1,
                borderColor: "white",
                padding: 1,
                position: "absolute",
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 45 }}
                resize="content"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                }}
              />
            </View>
          </View>
        </Marker>
        <Marker
          coordinate={{ latitude: 28.5261, longitude: 77.18 }}
          title="Dr Prashant Srivastava"
          description="Heat Surgeon"
        >
          <View
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="location-pin" size={85} color={"skyblue"} />
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                elevation: 8,
                top: "13%",
                borderWidth: 1,
                borderColor: "white",
                padding: 1,
                position: "absolute",
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 45 }}
                resize="content"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                }}
              />
            </View>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 28.5061, longitude: 77.08 }}>
          <View
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="location-pin" size={85} color={"skyblue"} />
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                elevation: 8,
                top: "13%",
                borderWidth: 1,
                borderColor: "white",
                padding: 1,
                position: "absolute",
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 45 }}
                resize="content"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                }}
              />
            </View>
          </View>
        </Marker>
      </>
    );
  };
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Corona</Text>
        <Text style={styles.panelSubtitle}>Follow Given Step</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text >

        120033 Doctor Instrument Stock Photos, Images & Pictureshttps://www.dreamstime.com › Stock Photos
image of doctor checking device from www.dreamstime.com
Download Doctor Instrument stock photos. Free or royalty-free photos and images. Use them in commercial designs under lifetime, perpetual & worldwide rights ...

339256 Doctor Instrument Images, Stock Photos & Vectorshttps://www.shutterstock.com › search › doctor-instrum...
Find Doctor Instrument stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.

386133 Doctor Tools Images, Stock Photos & Vectorshttps://www.shutterstock.com › search › doctor-tools
Find Doctor Tools stock images in HD and millions of other royalty-free ... medical devices, doctors instruments, isolated.
        </Text>
        
      </View>
      
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

const   renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  
  return (
    <>
    <BottomSheet
        ref={bs}
        snapPoints={[430, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}

        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
        <View
          style={{
            height: 200,
            
            width: "100%",
            position: "relative",
          }}
        >
          <KeyboardAvoidingView enabled={true} style={styles.container}>
            <ImageBackground
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
              source={{
                uri: "https://t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg",
              }}
            />

            <View
              style={{
                position: "absolute",
                top: "20%",
                paddingLeft: 10,
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 63,
                    width: 63,
                    elevation: 5,
                    borderRadius: 63,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 60 }}
                    source={{
                      uri: auth.currentUser.photoURL,
                    }}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    elevation: 5,
                    paddingRight: 10,
                  }}
                  onPress={() => Navigation.navigate("Notification")}
                  // onPress={() => Navigation.navigate("Doctor")}
                >
                  <Icon name="notifications" size={25} color={"white"} />
                </TouchableOpacity>
              </View>
              <View style={{ display: "flex", marginTop: 10 }}>
                <Text
                  style={{ color: "white", fontWeight: "500", fontSize: 13 }}
                >
                  Good Morning and stay healthy
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "500", fontSize: 20 }}
                >
                  Hi {auth.currentUser.displayName} ,How are you ?
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
          <Pressable
            style={{
              position: "absolute",
              bottom: -25,
              left: "10%",
              width: "80%",
            }}
          >
            <View style={styles.form}>
              <Text style={styles.label}>
                <Icon name="search" size={25} color={"#1f98d6"} />
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="Search Doctor"
             
                placeholder=" Search Doctor "
                autoCorrect={false}
                returnKeyType="done"
                style={styles.textInput}
                textContentType="Search Doctor"
              />
            </View>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: -1,backgroundColor:"white" }}>
          <View style={{ width: "100%", zIndex: -1, marginTop: 35 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                marginBottom: 10,
                paddingHorizontal: 8,
                textAlign:'center'
              }}
            >
              Categories
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((e) => {
                return (
                  <>

                
                    <View
                      style={{
                        display: "flex",
                        width: 50,
                        marginHorizontal: 10,
                      }}
                    
                    >
                      <View
                       
                        style={styles.Runcircle}
                      >
                        <TouchableOpacity
                          onPress={() => Navigation.navigate("Appoint")}
                        >
                          {e.name == "Icon" ? (
                            <Icon
                              name={e.iconname}
                              size={25}
                              color={"#1f98d6"}
                            />
                          ) : e.name == "MaterialCommunityIcons" ? (
                            <MaterialCommunityIcons
                              name={e.iconname}
                              size={25}
                              color={"#1f98d6"}
                            />
                          ) : (
                            <FontAwesome5
                              name={e.iconname}
                              size={25}
                              color={"#1f98d6"}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                      <Text style={{ textAlign: "center", marginTop: 7 ,fontSize:12}}>
                        {e.related}
                      </Text>
                    </View>
                    
                  </>
                );
              })}
            </ScrollView>
          </View>
          {/* <View
            style={{ width: "100%", marginVertical: 20, paddingVertical: 2 }}
          >
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
                  height: 20,
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
                    onPress={() => Navigation.navigate("ListedDoctor")}
                  >
                    <Text style={{ color: "skyblue", fontSize: 11 }}>
                      View All
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((e) => {
                return (
                  <>
                    <View
                      key={e.id}
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 5,
                        elevation: 8,
                        height: 180,
                        marginHorizontal: 10,
                        width: 150,
                        borderRadius: 5,
                        position: "relative",
                        marginVertical: 5,
                      }}
                    >
                      <View>
                        <View style={{ height: "70%", width: "100%" }}>
                          <TouchableOpacity
                            onPress={() => Navigation.navigate("AboutDoctor")}
                          >
                            <Image
                              style={{
                                height: "100%",
                                width: "100%",
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                              }}
                              source={{
                                uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg",
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 5,
                          }}
                        >
                          <Text style={{ color: "skyblue" }}>Dr.{e.name}</Text>
                          <Text style={{color:"gray",fontSize:10}}>lorem lore merradsfasdf</Text>
                        </View>

                        <View
                          style={{ position: "absolute", right: 5, top: 5 }}
                        >
                          <TouchableOpacity
                            onPress={() => Navigation.navigate("AboutDoctor")}
                          >
                            <FontAwesome
                              name="heart-o"
                              size={25}
                              color={"white"}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </View> */}
<PersonalReport/>
<GoodDoctor/>
{/* <HearRateGraph/> */}
          <View
            style={{
              width: "100%",
              marginVertical: 5,
              paddingVertical: 2,
              height: hp(30),
            }}
          >
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
                  Near Doctor at you Location{" "}
                </Text>
              </View>
              
              <View
                style={{
                  height: 23,
                  elevation: 1,
                  backgroundColor: "gray",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                
                  <TouchableOpacity
                    onPress={() => Navigation.navigate("Locations")}
                    
                  >
                    <Text style={{ color: "white", fontSize: 13 }}>
                    Full View

                    </Text>
                  </TouchableOpacity>
                
              </View>
            </View>

            <MapView
              showsUserLocation
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "black",
              }}
              initialRegion={{
                latitude: 28.5261,
                longitude: 77.08,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={mapdarkstyle} //
              //onRegionChangeComplete runs when the user stops dragging MapView
            >
              {Avaibale_Doctor()}
            </MapView>
          </View>

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
                  Preventation from Dieases{" "}
                </Text>
              </View>
              <View
                style={{
                  height: 20,
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
                    onPress={() => Navigation.navigate("Locations")}
                  >
                    <Text style={{ color: "skyblue", fontSize: 11 }}>
                      More View
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((e) => {
              return (
                <>
                  <View
                    style={{
                      height: 30,
                      elevation: 1,
                      backgroundColor: "skyblue",
                      borderRadius: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 10,
                      marginVertical: 3,
                      paddingHorizontal: 20,
                    }}
                  >
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                      <Text style={{ color: "white" }}>Conron</Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            })}
          </ScrollView>
          {/* <Pic/> */}
         <Satified_person/>

          {/* //refer  section */}
          <View>

          
          <View style={{ width: "100%", marginTop: 35, paddingVertical: 2 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                
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
               Refer Your Friend {" "}
                </Text>
              </View>
              <View >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "500",
                    marginBottom: 10,
                    textAlign:'center',
                    color:"gray",
                    zindex: -1,
                    paddingHorizontal: 5,
                  }}
                >
               Refer and Earn Vector Images (over 850)
Visit
Images may be subject to copyright. Learn More
                </Text>
              </View>
            
            </View>
          </View>
                  <View
                    style={{
                      height: hp(23),
                      
                      elevation: 1,
                      backgroundColor: "#fff",
                      borderRadius: 20,
                     
                      marginHorizontal: 10,
                      marginVertical: 3,
                      // paddingHorizontal: 20,
                    }}
                  >
                    <Image
                      style={{
                        height: "100%",
                        
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                      source={{
                        uri: "https://cdn.vectorstock.com/i/preview-1x/18/62/refer-a-friend-concept-business-partnership-vector-44391862.jpg",
                      }}
                    />
                  </View>
                  </View>
          {/* </ScrollView> */}

         



      {/* <ModalView/> */}
          <View style={{ height: hp(15), width: "100%" }}></View>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Runcircle:{
    // backgroundColor:"red",
    
    elevation: 2,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding:20,

  },
  bubble: {
    height: 400,
    widht: 40,
    backgroundColor: "skyblue",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
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
    backgroundColor: "#fafafa",
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
  }, panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default SelectDocker;
