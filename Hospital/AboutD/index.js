import React from 'react'
import { View, Text, Image,TextInput, ImageBackground,TouchableOpacity,Dimensions,Alert , Button,FlatList, ScrollView,StyleSheet,Pressable,KeyboardAvoidingView} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AboutDoctor=()=>{
  
 const Navigation=useNavigation()
 const tab=createBottomTabNavigator()
 
    return(
        <>
        <View style={{height:"100%",width:"100%",
    alignItems:"center"
    }}>
        
        {/* //header section */}
      <View 
      style={{height:hp(28) ,width:"100%",position:"relative"}}>
     <ImageBackground style={{ height:"100%",width:"100%"}} resizeMode="cover" source={{uri:"https://t4.ftcdn.net/jpg/02/24/17/37/360_F_224173795_7GUjeO0BwB5EVnk6MxDvCtSrX6q8xCVv.jpg"}} />
           <View style={{position:"absolute",bottom:-38,display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
            
           <View style={{display:"flex",flexDirection:"row", marginHorizontal:5,backgroundColor:"white"
  ,width:wd(85),borderRadius:10,alignItems:"center",height:hp(12),paddingHorizontal:10
  
  }}>
  <View  style={{height:60,width:60,borderRadius:10, elevation:8,borderColor:"skyblue",borderWidth:1,padding:2}} >
<Image style={{height:"100%",width:"100%",borderRadius:10}} 

source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU"}}/>
</View>

<View  style={{paddingLeft:20,color:"gray"}} >
<Text style={{color:"skyblue"}} onPress={()=>Navigation.navigate("Doctor")}>Dr prashant Srivastava</Text>
<Text  style={{color:"gray"}}>Available 45:60</Text>
<Text  style={{color:"gray"}}><FontAwesome name='location-arrow' size={17} color={"skyblue"}  />
<Text style={{paddingRight:5}}>&nbsp;&nbsp;&nbsp;Delhi</Text>
</Text>
<View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <Icon name='star' size={13} color={"orange"}  />
          <Icon name='star' size={13} color={"orange"}  />
          <Icon name='star' size={13} color={"orange"}  />
          <Text style={{fontSize:10}}>&nbsp;4.7</Text>
                
          </View>
</View>

  </View>
          </View>
          
        </View >
  {/* about section */}
  
  <View style={{display:"flex",justifyContent:"space-around",marginTop:45}}>
            
            <View style={{display:"flex",backgroundColor:"greeen",marginHorizontal:10}}>
            <Text style={{fontSize:17,marginBottom:5}}>About</Text>
            <Text style={{color:"gray",fontSize:13}}>As it’s currently written, your answer is unclear. Please edit to add additional details that will help others understand how this addresses the question asked. You can find more information on how to write good answers in the help center. – 
Community
Bot
 Dec 9, 2021 at 23:53</Text>
          
            </View>
            </View>




            {/* Book  */}
            <TouchableOpacity onPress={()=>Navigation.navigate("Appoint")}>
              
            <View 
            
            style={{justifyContent:"center",alignItems:"center",marginBottom:3}}
            
            >
            <View
                style={{ height:40, elevation: 8,
                backgroundColor: "#1f98d6",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,marginHorizontal:3,
             paddingHorizontal:15 
            }}
               >

            
    <Text style={{color:"white"}}>Schedule Appointment</Text>
  

        </View> 
                </View>
                </TouchableOpacity>
                
        </View>
       
        </>
    )
}
const styles = StyleSheet.create({
  bubble:{
      height:400,
      widht:40,
      backgroundColor:"skyblue",
      position:"absolute",
      top:10,
      left:10,
      zIndex:1

  },
  container: {
    flex: 5,
  },
  button: {
      alignItems: 'center',
      backgroundColor: '#1f98d6',
      borderRadius: 20,
      height: 48,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
    },
    form: {
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: 'gray',
      fontSize: 15,
      fontWeight: '400',
      

      
    },
    root: {
      backgroundColor: 'white',
      flex: 1,
      position:"relative",
      
      
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: 'gray',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    textInput: {
      color: 'black',
      display:"flex",
      justifyContent:"center",
      flex: 1,
    },
    title: {
      color: 'gray',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 34,
    },
  }




)
export default AboutDoctor