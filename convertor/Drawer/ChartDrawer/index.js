import React ,{useEffect, useState}from "react";
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

  // const connection=useSelector(state=>state.UserData)
import { useSelector } from "react-redux";
import { BlurView } from "expo-blur";
import HearRateGraph from '../../graph/heart'
const { width } = Dimensions.get("window");

const Treatment=()=>{
  const Currency=useSelector(state=>state.CurrencyData)
  const[value,setvalue]=useState(0)
  
  useEffect(()=>{
    // console.log("currencyvv",Currency.currently.From)
    var myHeaders = new Headers();
    myHeaders.append("apikey", "01ZbCbMAY0mZJ8M0I6BMA9DL1JwAOH3w");
    // console.log(typeof From,typeof To)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/fixer/convert?to=${Currency.currently?.To}&from=${Currency.currently?.From}&amount=1`, requestOptions)
      .then(response => response.json())
      .then(res => {
        setvalue(res.result)
      }
      )
      .catch(error => console.log('error', error));
      
  
  })
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
        <HearRateGraph  w={40} h={200} value={value}/>

        </View>  
        
    </View>
    </>
  );
};

export default Treatment;
