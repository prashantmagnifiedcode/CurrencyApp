import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import HearRateGraph from "../graph/heart";

const ModalPoup = ({ Graphview, children }) => {
  const [showModal, setShowModal] = React.useState(Graphview);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [Graphview]);
  const toggleModal = () => {
    if (Graphview) {
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
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const GraphModal = ({ Graphview, setGraphview }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPoup Graphview={Graphview}>
        

        <View style={{ alignItems: "center" }}>
          <HearRateGraph w={40} h={200} />
          <TouchableOpacity onPress={() => setGraphview(false)}>
            {/* <Image
                source={{uri:"https://www.ideafit.com/wp-content/uploads/files/shutterstock_38146159-1024x686.jpg"}} 
                style={{height: 30, width: 30}}
              /> */}
            <Text style={{ color: "gray" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
  },

  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "gray",
  },
  inputContainer: {
    height: 50,
    backgroundColor: "light",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 25,
  },
});

export default GraphModal;
