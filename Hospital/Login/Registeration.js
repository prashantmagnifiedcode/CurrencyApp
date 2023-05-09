
import React ,{useState}from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
// import {  sendEmailVerification } from "firebase/auth";

import {TouchableOpacity} from 'react-native';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { createUserWithEmailAndPassword, sendEmailVerification ,} from 'firebase/auth';
import { auth,database } from "../Config/firebase";
import {  updateProfile } from "firebase/auth";

import InputCmp from './Components/InputCmp'
import Loader from './Components/loderCmp'
const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
 
    
    setTimeout(() => {
      try {
        setLoading(false);
     
    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
          .then(() =>{
               
         
          updateProfile(auth.currentUser, {
            displayName: inputs.fullname, photoURL: "https://img.freepik.com/free-icon/user_318-928479.jpg",
            phoneNumber:inputs.phone
          }).then((e) => {

            console.log("suc sig",e)
            // ...
          }).catch((error) => {
            console.log("dis sig")
          })

            sendEmailVerification(auth.currentUser,
              {handleCodeInApp:true,
              url:"https://todolist-5b09d.firebaseapp.com"
            }
            ).then(()=>{
              addDoc(collection(database, 'User'), {
                FullName: inputs.fullname,
                email:inputs.email
              })
              navigation.navigate("Login")
            alert("verification email sent")

          }).catch((errors)=>alert(errors.message))
          
        
        }

            )            
        .catch((err) => Alert.alert("Login error", err.message));
      } 
      catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: "black", fontSize: 22, fontWeight: 'bold',textAlign:"center"}}>
          Create Your Account
        </Text>
        {/* <Text style={{color: "gray", fontSize: 15, marginVertical: 10}}>
          Enter Your Details to Register
        </Text> */}
        <View style={{marginVertical: 20}}>
          <InputCmp
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <InputCmp
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <InputCmp
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <InputCmp
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          
          {/* <Button title="Register" onPress={validate} /> */}
          <TouchableOpacity
      onPress={()=>validate()}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: "#047bfe",
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25
      }}>
      <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>
        Register
      </Text>
    </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{
              color: "gray",
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Already have account ? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
