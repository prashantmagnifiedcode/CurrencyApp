import React from 'react'
import { View, Text, Image,TextInput, ImageBackground,TouchableOpacity,Dimensions,Alert , Button,FlatList, ScrollView,StyleSheet,Pressable,KeyboardAvoidingView} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ThirdScreen=()=>{
  
 const Navigation=useNavigation()
 const tab=createBottomTabNavigator()
 
    return(
        <>
        <View style={{height:"100%",width:"100%"   }}>

     
      <View >
        <View style={{height:hp(23),display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
     
                <TouchableOpacity style={{ height:75,width:75,borderRadius:75 , backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center",
                }} >
 <Image  style={{ height:"100%",width:"100%"}} 
 source={require('../imgFolder/Logo.png')}

/>
                </TouchableOpacity>
                
                <Text style={{marginVertical:4,fontWeight:"500"}}><Text style={{color:"orange",fontWeight:"500"}}>H</Text>armony<Text style={{color:"orange",fontWeight:"500"}}>H</Text>ealth</Text>
        </View>
        <View style={{height:hp(10),display:"flex",alignItems:"center",justifyContent:"center",marginVertical:5}}>
          <Text style={{fontSize:21,width:"85%",textAlign:"center"
        ,fontWeight:"500"
        }}>Book face to face appointment</Text>
        </View>
      </View>
      <View style={{paddingHorizontal:20}}>
        
        
          <Text style={{fontSize:12,textAlign:"center",color:"gray"}}>DriverManager is a Java inbuilt class with a static member register. Here we call the constructor of the drivethe constructor of the driver class at compile time. The following  Oracle driver as shown below: </Text>
        
      </View>

<View style={{ display:"flex",justifyContent:"center",alignItems:"center"
                }} >
  <View style={{ height:hp(60),width:"100%",display:"flex",justifyContent:"center",alignItems:"center"
                }} >

 <Image  style={{ height:"55%",width:"50%"}}  resize="cover" source={{uri:"https://i.pinimg.com/originals/7c/23/13/7c2313f8d49ff41e48982af55d5938f9.png"}}
/>
  </View>
</View>
  <View
                style={{ height:38, elevation: 1,
                backgroundColor: "skyblue",borderRadius:20,
                display:"flex",justifyContent:"center", alignItems:"center",bottom:30,position:"absolute",right:20, elevation:5,
                paddingHorizontal: 30}}
               >

            <TouchableOpacity onPress={()=>Navigation.navigate("roothomes")}>
    <Text style={{color:"white",}}>Continue</Text>
  </TouchableOpacity>

        </View>




    
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
export default ThirdScreen