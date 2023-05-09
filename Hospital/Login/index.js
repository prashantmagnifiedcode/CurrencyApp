import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SizedBox from "./SizedBox";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth ,database} from '../Config/firebase';

const Login = () => {
  const navigation = useNavigation();
  const signwithgoogle=()=>{
    const provider = new GoogleAuthProvider();

      signInWithPopup(auth,provider).then((data)=>{
          // setValue(data.user.email)
        console.log("email",data.user.email)
      })
  
    // const val= await signInWithPopup(auth, provider)
    // console.log("value",val)
    // then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;
    //   // ...
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });

  }


  return (
    <>
     
         <ImageBackground
              style={{ height: "100%" }}
              resizeMode="cover"
              source={{uri:"https://st.depositphotos.com/1017986/3149/i/950/depositphotos_31498345-stock-photo-two-doctors-showing-tablet-pc.jpg"}} 
            >
        <LinearGradient colors={['transparent','#047bfe']}
   style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      
   }} />
           
                
            {/* //bottom veiw */}
            <View style={styles.bottomView}>
       <View  style={{padding:30}}>
        <Text style={{color:"white",fontSize:20,fontWeight:"600"}}>Book Appointment for Better Treatment</Text>
                     <SizedBox height={16} />
        <View style={{display:"flex",justifyContent:"space-around",flexDirection:"row"}}>

        <View
                    style={{
                      height: 50,
                      
                      elevation: 1,
                      backgroundColor: "#a6c9ff",
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 10,
                      marginVertical: 3,
                      paddingHorizontal: 20,
                      borderColor:"white",
                      borderWidth:2
                     
                    }}
                  >
                    
                    <TouchableOpacity onPress={()=>signwithgoogle()}>
                      <View style={{display:"flex",
                      flexDirection:"row",alignItems:'center',justifyContent:"center"}}>

                    <FontAwesome name="google" size={18} color={"white"} />
                      <Text style={{ color: "white",fontSize:15,marginLeft:10 }}>Google </Text>
                        
                        </View>
                    </TouchableOpacity>
                  </View>
        <View
                    style={{
                      height: 50,
                      elevation: 1,
                      
                      backgroundColor: "white",
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 10,
                      marginVertical: 3,
                      paddingHorizontal: 20,
                      
                      
                    }}
                  >
                    <TouchableOpacity onPress={()=>navigation.navigate("MobileRegister")}>
                    <View style={{display:"flex",
                      flexDirection:"row",alignItems:'center',justifyContent:"center"}}>

                    <FontAwesome name="phone" size={18} color={"#a6c9ff"} />
                      <Text style={{ color: "#a6c9ff",fontSize:15,marginLeft:10 }}>Phone </Text>
                        
                        </View>
                    </TouchableOpacity>
                  </View>
        </View>
                   <SizedBox height={16} />
         <View style={{display:"flex", alignItems:"center",justifyContent:'center'}}>
          <TouchableOpacity onPress={()=>navigation.navigate("RegistrationScreen")}>

          <Text style={{color:"white"}}>Create Your Account 
          
          </Text>
          </TouchableOpacity>
         
         </View>
        </View>                 
            </View> 

            </ImageBackground>

      
    </>
  );
};
const styles = StyleSheet.create({
 bottomView: {
  position:"absolute",
  bottom:1,
  width:"100%",
 },

 bubble: {
     height: 400,
     widht: 40,
     backgroundColor: "skyblue",
     position: "absolute",
     top: 10,
     left: 10,
     zIndex: 1,
   },
   button: {
    alignItems: "center",
    display:"flex",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#FFFFFF",
    height: 30,
    borderRadius: 20,
    alignItems: "center",
      backgroundColor: "#1f98d6",
     fontSize: 15,
     fontWeight: "600",
     paddingHorizontal:10,
     textAlign:"center",
   },
   content: {
     flex: 1,
     justifyContent: "center",
     paddingHorizontal: 16,
     paddingVertical: 32,
   },
   forgotPasswordContainer: {
     alignItems: "flex-end",
   },
   form: {
     alignItems: "center",
     
     borderRadius: 20,
     flexDirection: "row",
     height: 48,
     paddingHorizontal: 16,
     borderColor:'gray',
     borderWidth:1,
   },
   label: {
     color: "gray",
     fontSize: 15,
     fontWeight: "400",
     lineHeight: 20,
     width: 80,
   },
   root: {
     backgroundColor: "white",
     flex: 1,
     position: "relative",
   },
   safeAreaView: {
     flex: 1,
   },
   subtitle: {
     color: "gray",
     fontSize: 17,
     fontWeight: "400",
     lineHeight: 22,
   },
   textButton: {
     color: "#FFFFFF",
     fontSize: 15,
     fontWeight: "400",
     lineHeight: 20,
   },
   textInput: {
     color: "#FFFFFF",
     flex: 1,
   },
   title: {
     color: "gray",
     fontSize: 28,
     fontWeight: "700",
     lineHeight: 34,
   },
  

});
export default Login;

// import React from "react";
// import {
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import SizedBox from "./SizedBox";

// const Login = () => {
//   const navigation = useNavigation();
//   return (
//     <>
//       <View style={styles.root}>
//         <SafeAreaView style={styles.safeAreaView}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.content}
//           >
//             <Text style={styles.title}>Welcome back!</Text>

//             <SizedBox height={8} />

//             <Text style={styles.subtitle}>Sign in to your account</Text>

//             <SizedBox height={32} />

//             <Pressable>
//               <View style={styles.form}>
//                 <Text style={styles.label}>Email</Text>

//                 <TextInput
//                   autoCapitalize="none"
//                   autoCompleteType="email"
//                   autoCorrect={false}
//                   keyboardType="email-address"
//                   returnKeyType="next"
//                   style={styles.textInput}
//                   textContentType="username"
//                 />
//               </View>
//             </Pressable>

//             <SizedBox height={16} />

//             <Pressable>
//               <View style={styles.form}>
//                 <Text style={styles.label}>Password</Text>

//                 <TextInput
//                   autoCapitalize="none"
//                   autoCompleteType="password"
//                   autoCorrect={false}
//                   returnKeyType="done"
//                   secureTextEntry
//                   style={styles.textInput}
//                   textContentType="password"
//                 />
//               </View>
//             </Pressable>

//             <SizedBox height={16} />

//             <View style={styles.forgotPasswordContainer}>
//               <Text style={(styles.textButton, { color: "gray" })}>
//                 Forgot password?
//               </Text>
//             </View>

//             <SizedBox height={16} />

//             <TouchableOpacity onPress={() => navigation.navigate("roothomes")}>
//               <View style={styles.button}>
//                 <Text style={styles.buttonTitle}>Continue</Text>
//               </View>
//             </TouchableOpacity>
//             {/* 
//           <TouchableOpacity onPress={()=>navigation.navigate("Doctor")}>
//             <View style={styles.button}>
//               <Text style={styles.buttonTitle}>Continue</Text>
//             </View>
//           </TouchableOpacity> */}
//           </KeyboardAvoidingView>
//         </SafeAreaView>
//         <View style={styles.bubble}></View>
//       </View>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   bubble: {
//     height: 400,
//     widht: 40,
//     backgroundColor: "skyblue",
//     position: "absolute",
//     top: 10,
//     left: 10,
//     zIndex: 1,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#1f98d6",
//     borderRadius: 20,
//     height: 48,
//     justifyContent: "center",
//   },
//   buttonTitle: {
//     color: "#FFFFFF",
//     fontSize: 17,
//     fontWeight: "600",
//     lineHeight: 20,
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 32,
//   },
//   forgotPasswordContainer: {
//     alignItems: "flex-end",
//   },
//   form: {
//     alignItems: "center",
//     backgroundColor: "gray",
//     borderRadius: 20,
//     flexDirection: "row",
//     height: 48,
//     paddingHorizontal: 16,
//   },
//   label: {
//     color: "rgba(235, 235, 245, 0.6)",
//     fontSize: 15,
//     fontWeight: "400",
//     lineHeight: 20,
//     width: 80,
//   },
//   root: {
//     backgroundColor: "white",
//     flex: 1,
//     position: "relative",
//   },
//   safeAreaView: {
//     flex: 1,
//   },
//   subtitle: {
//     color: "gray",
//     fontSize: 17,
//     fontWeight: "400",
//     lineHeight: 22,
//   },
//   textButton: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "400",
//     lineHeight: 20,
//   },
//   textInput: {
//     color: "#FFFFFF",
//     flex: 1,
//   },
//   title: {
//     color: "gray",
//     fontSize: 28,
//     fontWeight: "700",
//     lineHeight: 34,
//   },
// });
// export default Login;
