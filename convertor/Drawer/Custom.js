import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,DrawerItem
} from '@react-navigation/drawer';;
// import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#0057ff'}}>
        <ImageBackground
          source={{
            uri: "https://t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg",
          }}

          style={{display:'flex',justifyContent:'flex-end',alignItems:"center",paddingVertical:10,marginTop:-50,height:215}}>
          <Image
            source={{uri:"https://play-lh.googleusercontent.com/pOiddrf8_IPWiUOyhj1cxbz2CzWejYdFjs8H5qGfIxnQs8YMNqZr4ScRevMhVnjS7Sg"}}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 5}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Currency Convertor
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
       
      </DrawerContentScrollView>
    
    </View>
  );
};

export default CustomDrawer;