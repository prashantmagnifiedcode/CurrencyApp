import React,{useState} from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert,Image,Pressable} from 'react-native';
// import COLORS from '../../conts/colors';
// import Button from '../components/Button';
import InputCmp from './Components/InputCmp'
import Loader from './Components/loderCmp'
import {InsertUserData} from '../../Redux/Action/User'
import {TouchableOpacity} from 'react-native';
import {  updateProfile } from "firebase/auth";

import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth ,database} from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { useSelector, useDispatch } from "react-redux";

const Signup = ({navigation}) => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
//   const userdata=useSelector((state)=>state.UserData)
// console.log(userdata)
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
    
      if (inputs.email !== "" && inputs.password !== "") {
        const{email, password}=inputs
        console.log("email",email)
  


          signInWithEmailAndPassword(auth, email, password)
          .then(async(e) =>{ 
            console.log("e",e)
            
         
          // updateProfile(auth.currentUser, {
          //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
          // }).then((e) => {

          //   console.log("suc sig",e)
          //   // ...
          // }).catch((error) => {
          //   console.log("dis sig")

          //   // An error occurred
          //   // ...
          // });
            // const querySnapshot=  await getDocs(collection(database, "User"));
            //     const val=querySnapshot.forEach((doc) => {
            //       const userdata=doc.data();
            //       // dispatch(InsertUserData(userdata))
            //       console.log(userdata)
            //       console.log(`${doc.id} => ${doc.data()}`);
            //     });
                console.log("val",val)

        })
          .catch((err) => Alert.alert("Login error", err.message));

        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      
    }, 3000);
  };

  //sigin uisng google



  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <Loader visible={loading} />
      <View style={{height:"40%",width:"100%",padding:20}}>
          <Pressable style={{width:"100%",display:"flex",justifyContent:"center",alignContent:"center"}} >
            {/* <SvgIcon icon={'back'} width={30} height={30} /> */}
            <Image  source={require('../../assets/login.jpg')}   style={{height:"100%",width:"100%"}} />
          </Pressable>
        </View>
      

      <View style={{ paddingHorizontal: 20}}>
        <Text style={{color: "black", fontSize: 20, fontWeight: 'bold',textAlign:"center"}}>
          Log In
        </Text>
       
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
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
            LogPage={true}
          />
         
          {/* <Button title="Log In" onPress={validate} /> */}
          <TouchableOpacity
      onPress={()=>validate()}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: '100%',
        backgroundColor: "#047bfe",
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25
      }}>
      <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>
        Log in
      </Text>
    </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{
              color: "gray",
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Don't have account ? Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
