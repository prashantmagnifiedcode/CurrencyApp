import React, {Component} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,Image
} from 'react-native';
// import Fonts from '../common/assets/fonts';
// import SvgIcon from '../common/assets/images/SvgIcon';
import Icon from "react-native-vector-icons/MaterialIcons";


const ForgotPasswordScreen =()=> {
  
    return (
      <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
        <View style={{padding: 20,}}>
        <Pressable style={{height:200,width:"100%",display:"flex",justifyContent:"center",alignContent:"center"}} >
            {/* <SvgIcon icon={'back'} width={30} height={30} /> */}
            <Image  source={require('../../assets/forget.jpg')}   style={{height:"100%",width:"100%"}} />
          </Pressable>
        </View>
        <View style={{position: 'relative',marginTop:20}}>
          <View style={styles.loginIcon}>
            {/* <SvgIcon icon={'forgot'} width={320} height={320} /> */}
            
          </View>
          <View style={styles.container}>
            <View style={styles.loginLblCon}>
              <Text style={styles.loginLbl}>Forgot Password?</Text>
            </View>
            <View style={styles.forgotDes}>
              <Text style={styles.forgotDesLbl}>
                Don't worry! It happens, please enter the address associated
                with your account
              </Text>
            </View>
            <View style={styles.formCon}>
              <View style={styles.textBoxCon}>
                <View style={styles.at}>
                  {/* <SvgIcon icon={'at'} width={20} height={20} /> */}
            <Icon name="email" size={23} color="gray" />

                </View>
                <View style={styles.textCon}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Email ID'}
                    placeholderTextColor={'#aaa'}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.loginCon, {marginTop: 40}]}>
              <Pressable
                style={styles.LoginBtn}
                >
                <Text style={styles.loginBtnLbl}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  
}

const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    flex: 1,padding:2,
    justifyContent:'center',
    
  },
  loginIcon: {
    alignSelf: 'center',
  },
  formCon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical:10
  },
  loginLblCon: {
    position: 'relative',
    bottom: 22,
  },
  loginLbl: {
    color: '#000',
    fontSize: 22,
    // fontFamily: Fonts.type.NotoSansExtraBold,
  },
  at: {
    alignSelf: 'center',
    width: '10%',
  },

  textBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    width: '90%',
    alignContent:'center'
  },

  textInput: {
    borderBottomColor: '#aaa',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: '#000',
    fontSize: 16,
    // fontFamily: Fonts.type.NotoSansMedium,
    height: 40,
  },

  LoginBtn: {
    backgroundColor: '#64a5ff',
    borderRadius: 20,
  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 15,
    // fontFamily: Fonts.type.NotoSansBlack,
    color: '#fff',
    paddingVertical: 8,
  },

  forgotDes: {
    position: 'relative',
    bottom: 17,
  },
  forgotDesLbl: {
    color: 'gray',
    fontSize:12
    // fontFamily: Fonts.type.NotoSansRegular,
  },
});
export default ForgotPasswordScreen