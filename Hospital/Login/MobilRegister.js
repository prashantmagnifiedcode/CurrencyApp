import React, {useState,useRef} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,Image,
  TextInput,TouchableOpacity,
  KeyboardAvoidingView,SafeAreaView,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import PhoneInput from "react-native-phone-number-input";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import CheckBox from '@react-native-community/checkbox';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
const MobileRegister=() => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const phoneInput = useRef(null);
  return (
    <>
    
      {/* <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text>Checkpra</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View> */}
        <SafeAreaView style={{backgroundColor: "white", flex: 1,justifyContent:"space-between"}}>

        <View style={{paddingVertical: 40,display:"flex",alignItems:"center",alignContent:"center"}}>
          <View style={{height:hp(30),width:wd(80),display:"flex",alignItems:"center",alignContent:"center" }} >
            {/* <SvgIcon icon={'back'} width={30} height={30} /> */}
            <Image  source={require('../../assets/Phone.jpg')}   style={{height:"100%",width:"100%"}} />
          </View>
        </View>
        

        <View style={{display:'flex',alignItems:'center'}}>
        <Text style={{textAlign:"center",fontSize:18,color:"gray",marginBottom:8}}>Your Phone Number</Text>
          
            <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode=""
            layout="first"
            // flagStyle={{width: 100, height: 30, borderWidth:7}}
            
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
              placeholder="Enter a phone number..."
          
          />
              
              
            
          
        </View>
        <View style={{paddingVertical:20}}>
          {/* <View style={{padding:15,marginBottom:3}}> */}
          <Text style={{paddingHorizontal:20,marginBottom:3,textAlign:'center',fontSize:10,color:"gray"}}>
            This prop needs to be used with  
               <Text style={{color:"#047bfe"}}> RadioGroup，you </Text>
            can set a added value.
            </Text>

            {/* </View> */}
          {/* <View style={{padding:15}}> */}
            <Text  style={{paddingHorizontal:20,textAlign:'center',fontSize:10,color:"gray"}}>
            Guy We are informing you that we didn't selle your record  
               <Text style={{color:"#047bfe"}}> RadioGroup，you </Text>
            can set a added value.
            </Text>
            {/* </View> */}
            
        <TouchableOpacity
      // onPress={()=>validate()}
      onPress={() => navigation.navigate('OTPS')}

      activeOpacity={0.7}
      style={{
        height: 55,
        width: '90%',
        backgroundColor: "#047bfe",
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius:25
      }}>
      <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>
        Next
      </Text>
    </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  // checkboxContainer: {
  //   flexDirection: 'row',
  //   marginBottom: 20,
  // },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  container: {
    flex: 1,
    // backgroundColor: Colors.lighter,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7CDB8A',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 14,
  },
  redColor: {
    backgroundColor: '#F57777'
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  mainCon: {
    backgroundColor: '#fff',
    
    flex: 1,
    // justifyContent:'center',
    padding:2,
  },
  loginIcon: {
    alignSelf: 'center',
  },
  formCon: {
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    // marginTop: 50,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 20,
  },
  loginLbl: {
    color: '#000',
    fontSize: 23,
    // fontFamily: Fonts.type.NotoSansExtraBold,
  },
  forgotDes: {
    position: 'relative',
    bottom: 20,
  },
  forgotDesLbl: {
    color: 'gray',
    // fontFamily: Fonts.type.NotoSansRegular,
  },
  registerLbl: {color: '#0057ff'},
 
});

export default MobileRegister;