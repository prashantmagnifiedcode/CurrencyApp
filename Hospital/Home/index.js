import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const Home = () => {
  const navigation = useNavigation();
  return (
    <>
     
        <View
          style={{
            height: "100%",
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
     
     <TouchableOpacity style={{ height:100,width:100,borderRadius:100 , backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center",
     }} onPress={()=>navigation.navigate("Login")} >
<Image  style={{ height:"100%",width:"100%"}} 
source={require('../imgFolder/Logo.png')}

/>
     </TouchableOpacity>
     
     <Text style={{marginVertical:8,fontWeight:"500"}}><Text style={{color:"orange",fontWeight:"500"}}>H</Text>armony<Text style={{color:"orange",fontWeight:"500"}}>H</Text>ealth</Text>
</View>
            
          
          </View>

          {/* <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 30,
                elevation: 1,
                backgroundColor: "#1f98d6",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                marginBottom: 5,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Continue with Facebook</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 30,
                elevation: 15,
                backgroundColor: "#1f98d6",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Continue with google</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", width: 50, marginHorizontal: 10 }}>
              <View
                style={{
                  elevation: 6,
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="Google" size={25} color={"#1f98d6"} />
              </View>
            </View>
          </View> */}
        </View>
      
    </>
  );
};
export default Home;
