import React,{useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,TextInput
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";



const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ModalView = ({visible, setVisible}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <ModalPoup visible={visible}>
        
        <View style={{alignItems: 'center'}}>
          {/* <Image
            source={require('./assets/success.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
          /> */}
        </View>

        {/* <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Congratulations registration was successful
        </Text> */}
         <View
        style={[
          styles.inputContainer,
          {
            borderColor: false
              ? "red"
              : isFocused
              ? "gray"
              : "#e7e7e7",
            alignItems: 'center',
          },
        ]}>

         <TextInput
              label='Comment '
              placeholder="Comment box"
              mode="outlined"
              style={{flex:1}}
              
            ></TextInput>
             <Icon
            
            name="send"
            style={{color: "#aacbff", fontSize: 22}}
          />
        </View>
        <View style={{alignItems: 'center',}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              {/* <Image
                source={{uri:"https://st.depositphotos.com/1017986/3149/i/950/depositphotos_31498345-stock-photo-two-doctors-showing-tablet-pc.jpg"}} 
                style={{height: 30, width: 30}}
              /> */}
               <Text style={{color:"gray"}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
      
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    label: {
      marginVertical: 5,
      fontSize: 14,
      color: "gray",
    },
    inputContainer: {
      height: 50,
      backgroundColor: "light",
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderWidth: 0.5,
      borderRadius:25
    },

  
});

export default ModalView;