import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import Polyline from '@mapbox/polyline'
import { Polyline } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import Doctordata from "./Doctordata.json";
const { width, height } = Dimensions.get("screen");
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
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const Locations = () => {
  const [region, setRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [state, setState] = useState({
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  });
  const navigation=useNavigation()
  const [fixd, setfixd] = useState({
    latitude: 28.5261,
    longitude: 77.08,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //   const getDirections=async(startLoc, desLoc) =>{
  //    try {

  //      const respJson = respones;
  //      const response = respJson.routes[0]
  //      const distanceTime = response.legs[0]
  //      const distance = distanceTime.distance.text
  //      const time = distanceTime.duration.text
  //      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
  //      const coords = points.map(point => {
  //        return {
  //          latitude: point[0],
  //          longitude: point[1]
  //        }
  //      })
  //      setState({ coords, distance, time })
  //    } catch(error) {
  //      console.log('Error: ', error)
  //    }
  //  }
  // console.log("State",state)

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});

      console.log(
        "my location",
        location.coords.latitude,
        location.coords.longitude
      );
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      throw new Error("Location permission not granted");
    }
  };
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  console.log("inde", mapIndex);
  // useEffect(() => {
  //   mapAnimation.addListener(({ value }) => {
  //     let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
  //     // if (index >= state.markers.length) {
  //     //   index = state.markers.length - 1;
  //     // }
  //     // if (index <= 0) {
  //     //   index = 0;
  //     // }

  //     clearTimeout(regionTimeout);

  //     const regionTimeout = setTimeout(() => {
  //       if( mapIndex !== index ) {
  //         mapIndex = index;
  //         const { coordinate } = state.markers[index];
  //         _map.current.animateToRegion(
  //           {
  //             ...coordinate,
  //             latitudeDelta: state.region.latitudeDelta,
  //             longitudeDelta: state.region.longitudeDelta,
  //           },
  //           350
  //         );
  //       }
  //     }, 10);
  //   });
  // });

  useEffect(() => {
    const concatStart = `${region.latitude},${region.longitude}`;
    const concatEnd = `28.4794,77.0176`;
    console.log("lo", getLocationAsync(concatStart, concatEnd));
    // getLocationAsync()
    // (
    //   async()=>{
    //     let{status}=await Location.requestForgroundPermissionsAsync();
    //     if(status!="granted"){
    //       console.log("permission")
    //       return ;
    //     }
    //     let location= await Locations.getCurrrentPositionAsync({})
    //     console.log("location",location)

    //   }
    // )()
  }, []);
  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= Doctordata.length) {
        index = Doctordata.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coords } = Doctordata[index];
          _map.current.animateToRegion(
            {
              ...coords,
              latitudeDelta: fixd.latitudeDelta,
              longitudeDelta: fixd.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });
  const interpolations = Doctordata.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.1, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });
  function CustomMarker() {
    return (
      <View
        style={{
          height: 100,
          width: 100,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={styles.color}>Tokyo</Text>
        <View style={{ height: 40, width: 40 }}>
          <Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU",
              }}
            />
          </Text>
        </View>
      </View>
    );
  }
  const tokyoRegion = {
    latitude: 28.4794,
    longitude: 77.0176,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const DoctorLocation = {
    latitude: 28.5391,
    longitude: 77.08,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <MapView
          showsUserLocation
          ref={_map}
          style={{ height: "100%", width: "100%", backgroundColor: "black" }}
          initialRegion={fixd}
          //onRegionChangeComplete runs when the user stops dragging MapView
          // onRegionChangeComplete={(region) => setRegion(region)}
          customMapStyle={mapdarkstyle} //
        >
          {Doctordata.map((e, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };

            return (
              <>
                {/* <Polyline
                  coordinates={[
                    {
                      latitude: e.coords.latitude,
                      longitude: e.coords.longitude,
                    },
                   
                    { latitude: region.latitude, longitude: region.longitude },
                  ]}
                  strokeColor={"skyblue"}
                  
                  geodesic={true} 
                  
                /> */}
                <Marker
                  coordinate={{
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                  }}
                  key={index}
                  title={e.name}
                   
                  onPress={(e) => onMarkerPress(e)}
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
                    <Animated.View
                      style={[
                        {
                          height: 45,
                          width: 45,
                          borderRadius: 45,
                          elevation: 8,
                          top: "13%",
                          borderWidth: 1,
                          borderColor: "white",
                          padding: 1,
                          position: "absolute",
                        },
                        scaleStyle,
                      ]}
                    >
                      <Animated.Image
                        style={[
                          { height: "100%", width: "100%", borderRadius: 45 },
                          scaleStyle,
                        ]}
                        resize="content"
                        source={{ uri: e.image_url }}
                      />
                    </Animated.View>
                  </View>
                </Marker>
              </>
            );
          })}
          {/* <Marker
coordinate={{ latitude :  28.5261 , longitude : 77.0800 }}
>
<Callout  >
<CustomMarker/>
</Callout>

</Marker> */}

          {/* <Marker
       
coordinate={{ latitude :  28.5261 , longitude : 77.0100 }}

>
<View style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Icon name="location-pin" size={85} color={"skyblue"}  />
<View  style={{height:45,width:45,borderRadius:45, elevation:8,top:"13%", borderWidth:1,borderColor:"white",padding:1,position:"absolute"}} >
<Image style={{height:"100%",width:"100%",borderRadius:45}} resize="content" source={{uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg"}}/>
</View>
</View>

</Marker>

      <Marker
       
coordinate={{ latitude :  28.5059 , longitude : 77.0500 }}

>
<View style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Icon name="location-pin" size={85} color={"skyblue"}  />
<View  style={{height:45,width:45,borderRadius:45, elevation:8,top:"13%", borderWidth:1,borderColor:"white",padding:1,position:"absolute"}} >
<Image style={{height:"100%",width:"100%",borderRadius:45}} resize="content" source={{uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg"}}/>
</View>
</View>
</Marker> */}
        </MapView>
        <View
          style={{
            position: "absolute",
            top: hp(7),
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: hp(6),
              width: wd(90),
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <TextInput
              autoCapitalize="none"
              autoCompleteType="Search Doctor"
              autoCorrect={false}
              returnKeyType="done"
              style={{
                height: "100%",
                width: "85%",
                padding: 5,
                paddingHorizontal: 8,
              }}
              placeholder="Search Doctor According to problem"
              textContentType="earch Doctor"
            />
            <View
              style={{
                width: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="search" size={25} color={"gray"} />
            </View>
          </View>

          <View
            style={{
              height: hp(6),
              width: wd(100),
              marginTop: 5,
              display: "flex",
              flexDirection: "row",
              borderRadius: 20,
            }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  height: "70%",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              >
                <Text>Heart</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  height: "70%",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              >
                <Text>Back Pain</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  height: "70%",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              >
                <Text>Back Pain</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  height: "70%",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              >
                <Text>Back Pain</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  height: "70%",
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 2,
                }}
              >
                <Text>Back Pain</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 8, width: "100%" }}>
          <Animated.ScrollView
            ref={_scrollView}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            //for iso
            contentInset={{
              top: 0,
              left: SPACING_FOR_CARD_INSET,
              bottom: 0,
              right: SPACING_FOR_CARD_INSET,
            }}
            //android
            contentContainerStyle={{
              paddingHorizontal:
                Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
            }}
            //for
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            {/* <View style={{display:"flex",flexDirection:"row", marginHorizontal:5,backgroundColor:"white"
  ,width:wd(75),borderRadius:10,alignItems:"center",height:hp(12),paddingHorizontal:10
  
  }}>
  <View  style={{height:50,width:50,borderRadius:10, elevation:8,borderColor:"skyblue",borderWidth:1,padding:2}} >
<Image style={{height:"100%",width:"100%",borderRadius:10}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU"}}/>
</View>

<View  style={{paddingLeft:20,color:"gray"}} >
<Text style={{color:"skyblue"}}>Dr prashant Srivastava</Text>
<Text  style={{color:"gray"}}>Available 45:50</Text>
<Text  style={{color:"gray"}}><FontAwesome name='location-arrow' size={17} color={"skyblue"}  />
<Text style={{paddingRight:5}}>&nbsp;&nbsp;&nbsp;Delhi</Text>
</Text>
</View>

  </View>

  <View style={{display:"flex",flexDirection:"row", marginHorizontal:5,backgroundColor:"white"
  ,width:wd(75),borderRadius:10,alignItems:"center",height:hp(12),paddingHorizontal:10
  
  }}>
  <View  style={{height:50,width:50,borderRadius:10, elevation:8,borderColor:"skyblue",borderWidth:1,padding:2}} >
<Image style={{height:"100%",width:"100%",borderRadius:10}} source={{uri: "https://thumbs.dreamstime.com/b/smiling-doctor-man-standing-straight-clinic-102540376.jpg"}}/>
</View>

<View  style={{paddingLeft:20,color:"gray"}} >
<Text style={{color:"skyblue"}}>Dr prashant Srivastava</Text>
<Text  style={{color:"gray"}}>Available 45:50</Text>
<Text  style={{color:"gray"}}><FontAwesome name='location-arrow' size={17} color={"skyblue"}  />
<Text style={{paddingRight:5}}>&nbsp;&nbsp;&nbsp;Delhi</Text>
</Text>
</View>

  </View> */}
            {Doctordata.map((e, index) => {
              return (
                <>
                  <View
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginHorizontal: 5,
                      backgroundColor: "white",
                      width: wd(75),
                      borderRadius: 10,
                      alignItems: "center",
                      height: hp(12),
                      paddingHorizontal: 10,
                    }}
                  >
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 10,
                        elevation: 5,
                        borderColor: "skyblue",
                        borderWidth: 1,
                        padding: 2,
                      }}
                    >
                      <Image
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
                        }}
                        source={{ uri: e.image_url }}
                      />
                    </View>

                    <View style={{ paddingLeft: 20, color: "gray" }}>
                      <Text style={{ color: "skyblue" }}>Dr {e.name}</Text>
                      <Text style={{ color: "gray" }}>Available 45:50</Text>
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
                    </View>
                    <View
                style={{ height:25, elevation: 4,
                backgroundColor: "white",borderRadius:20,position:"absolute",top:5,right:5,
                display:"flex",justifyContent:"center",alignItems:"center",
                paddingHorizontal: 15}}
               >

            <TouchableOpacity >
    <Text style={{color:"skyblue",}}>Book</Text>
  </TouchableOpacity>

        </View>
      
                    <View
                style={{ height:25, width:25, elevation: 5,
                backgroundColor: "white",borderRadius:25,position:"absolute",bottom:5,right:40,
                display:"flex",justifyContent:"center",alignItems:"center"}}
               >

            <TouchableOpacity onPress={()=>navigation.navigate("Chat")} >
            <FontAwesome
                          name="whatsapp"
                          size={17}
                          color={"green"}
                        />
  </TouchableOpacity>

        </View>
                    <View
                style={{ height:25, width:25, elevation: 5,
                backgroundColor: "white",borderRadius:25,position:"absolute",bottom:5,right:5,
                display:"flex",justifyContent:"center",alignItems:"center"}}
               >

            <TouchableOpacity >
            <FontAwesome
                          name="heart-o"
                          size={17}
                          color={"orange"}
                        />
  </TouchableOpacity>

        </View>
                  </View>
                </>
              );
            })}
          </Animated.ScrollView>
        </View>

        {/*Display user's current region:*/}
        {/* <Text >Current latitude: {region.latitude}</Text>
    <Text >Current longitude: {region.longitude}</Text> */}
        {/* <MapView
      showsUserLocation
        style={{ height:400,width:"70%" }}
    initialRegion={{
      latitude: 28.5261,
      longitude: 77.0800,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    
  >

<Marker
coordinate={{ latitude :  28.5261 , longitude : 77.0800 }}
image={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU"}}
onMarkerPress ={(location) => {
    const { coords: { latitude, longitude } } = location
    console.log(latitude,longitude)
   
  }}
/>
    
  </MapView> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 100,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
});
export default Locations;
