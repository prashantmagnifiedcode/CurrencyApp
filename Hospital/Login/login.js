import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
export default function login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigation()
  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((e) => {


          var user = e.user;

          // Update user's display name
          user.updateProfile({
            displayName: "New Display Name"
          })
          .then(() => {
            // Update successful
          })
          .catch((error) => {
            // An error happened
          });


          const collectionRef = collection(database, 'User');
          console.log("collection",collectionRef)
          const q = query(collectionRef);
  
      const unsubscribe = onSnapshot(q, querySnapshot => {
          console.log('querySnapshot unsusbscribe',querySnapshot.docs);
  
          
          });
          console.log("Login success",e)
      
      })
        .catch((err) => Alert.alert("Login error", err.message));
    }
    // var provider = auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // // provider.setCustomParameters({
    // //     'login_hint': 'prashantsrivastava5116@gmail.com'
    // //   });
    // auth.signInWithPopup(provider)
    // .then((result) => {
    //     if (result.credential) {
            
    //         var credential = result.credential;
      
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = credential.accessToken;
    //         // ...
    //       }
    //       // The signed-in user info.
    //       var user = result.user;
      
    //   console.log("info",user)
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
    
  };
  
  return (
    <View style={styles.container}>
    <Image  source={{uri:"https://st.depositphotos.com/1017986/3149/i/950/depositphotos_31498345-stock-photo-two-doctors-showing-tablet-pc.jpg"}}  style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
         <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
