import React, {useState,useRef} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,Image,
  TextInput,
  KeyboardAvoidingView,SafeAreaView
} from 'react-native';

// import Fonts from '../common/assets/fonts';
// import otp from '../../assets/otp.jpg';
// import OtpInputs from 'react-native-otp-inputs';
// import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPScreen =()=> {
  const resendOTP = () => {};
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
 
    return (
      <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
        <View style={{padding: 20 }}>
          <Pressable style={{height:"70%",width:"100%",display:"flex",justifyContent:"center",alignContent:"center"}} >
            {/* <SvgIcon icon={'back'} width={30} height={30} /> */}
            <Image  source={require('../../assets/otp.jpg')}   style={{height:"100%",width:"100%"}} />
          </Pressable>
        </View>
        <View style={{position: 'relative', bottom: 30}}>
          
          <View style={styles.container}>
            <View style={styles.loginLblCon}>
              <Text style={styles.loginLbl}>Enter OTP ?</Text>
            </View>
            <View style={styles.forgotDes}>
              <Text style={styles.forgotDesLbl}>
                An 4 digit code has been sent to
              </Text>
              <Text style={styles.forgotDesLbl}>+91 1234567890</Text>
            </View>
            <View style={styles.formCon}>
            {/* <TextInput
          
         
          style={{color: "gray", flex: 1,width:20,height:20,backgroundColor:"red"}}
          
        />
            <TextInput
          
         
          style={{color: "gray", flex: 1,width:"20%",height:20,backgroundColor:"red"}}
          
        /> */}
                  <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
           
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
           
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            
          />
        </View>
      </View>
              <View>

          {/* <OtpInputs
        
        style={{width: '80%', height: 70, display:"flex"}}
        
          numberOfInputs={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        /> */}
      
              </View>
              <Pressable onPress={() => this.resendOTP()}>
                <Text style={styles.registerLbl}>Resend OTP</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
 
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
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor:"#e7e7e7",
    borderWidth: 0.5,
    marginHorizontal:2
  },
  otpText: {
    fontSize: 23,
    color: "black",
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
export default OTPScreen