import React ,{useState,useEffect} from "react";
import {
  View,
  Text, TouchableOpacity,  Dimensions,

} from "react-native";
import DropdownComponent from './component/Drop'
// import InvoiceCard from './invoice'
import { BlurView } from "expo-blur";
import { useSelector,useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';

const { width } = Dimensions.get("window");
const Invoice=()=>{
  // console.log("invoice",navigation)
  const navigation=useNavigation()
  const[cur,setcur]=useState([])
  const connection=useSelector(state=>state.UserData)
  console.log("form honme",connection)

 


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <>
    <View style={{backgroundColor:"#E8EAED",flex:1,paddingHorizontal:10,alignItems:"center"}}>

<View style={{ width: "100%", marginTop: 55, paddingVertical: 2 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              
                  <TouchableOpacity onPress={() => navigation.openDrawer()} >
                    <FontAwesome  name="th-large" style={{fontSize:20}}/>
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    
                  >
                    {connection.isConnected ?   <Text style={{ color: "white", fontSize: 13 }}>
                    Currency Convertor<Text style={{color:"lightgreen",fontSize:15}}>&nbsp;&nbsp;(online)</Text> 
                    </Text>:   <Text style={{ color: "white", fontSize: 13 }}>
                    Currency Convertor <Text style={{color:"red",fontSize:15}}>Offile</Text>
                    </Text>}
                 
                  </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height:"80%",width:"100%",alignItems:"center",justifyContent:"center"}}>

          <DropdownComponent />
          </View>
        
       
    </View>
    </>
  );
};

export default Invoice;
