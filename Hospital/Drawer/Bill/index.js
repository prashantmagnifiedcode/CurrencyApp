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

import InvoiceCard from './invoice'
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const Invoice=()=>{
  
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
                    Invoice Details
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        <InvoiceCard/>
        
    </View>
    </>
  );
};

export default Invoice;
