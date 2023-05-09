import React, { useState, createContext, useContext, useEffect } from 'react';
import { StyleSheet, View, Image ,ActivityIndicator,Text,Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Hospital/Home";
import DrawerHome from "./Hospital/Drawer/";
import CustomDrawer from "./Hospital/Drawer/Custom";
import Doctor from "./Hospital/Profile/Doctor";
import Login from "./Hospital/Login";
import MobileRegister from "./Hospital/Login/MobilRegister";
import Appoint from "./Hospital/Appointment/";
import SelectDocker from "./Hospital/Appointment/DoctorCard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActionSheetProvider,useActionSheet } from '@expo/react-native-action-sheet';
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Locations from "./Hospital/location/index";
import Signup from "./Hospital/Login/Signin";
import login from "./Hospital/Login/login";
import OTPScreen from "./Hospital/Login/otp";
import ForgotPasswordScreen from "./Hospital/Login/forget";
import RegistrationScreen from "./Hospital/Login/Registeration";


import AboutDoctor from "./Hospital/AboutD/";
import ListedDoctor from "./Hospital/ListedDactor";

import Notification from "./Hospital/Notifcation";
import Treatment from "./Hospital/Drawer/Treatment/";
import Invoice from "./Hospital/Drawer/Bill/";


import SuccessScreen from "./Hospital/SuccessScreen/";
import { auth ,db} from './Hospital/Config/firebase';
import HomeChat from './Hospital/Chats/'
import Chat from './Hospital/Chats/ChatScreen'

// import Sketch from './Hospital/Sketch/'

// import FirstScreen from './Hospital/SkipScreen/first'
// import SecondScreen from './Hospital/SkipScreen/Second'
// import ThirdScreen from './Hospital/SkipScreen/Third'
// import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
/// importing store

import store from "./Redux/Store/";
import { Provider } from 'react-redux'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const tab = createBottomTabNavigator();
const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
const roothomes = () => {
  return (
    <tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "red",
        inactiveTintColor: "gray",
        style: {
          position: "absolute",
          bottom: 5,
          left: 5,
          right: 5,
          
          backgroundColor: "#007dfe",
          borderRadius: 25,
          height: 60,
          
        },
      }}
    >
      <tab.Screen
        name="SelectDocker"
        component={SelectDocker}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="heartbeat" size={23} color="white" />
          ),
        }}
      />
       <tab.Screen
        name="Appoint"
        component={Appoint}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="plus" size={25} color="gray" />
            </View>
          ),
          tabBarButton: ({ children, onPress }) => (
            <TouchableOpacity
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
                ...styles.shadow,
                backgroundColor: "white",
                borderRadius: 70,
                height:70,width:70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onPress}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                }}
              >
                {children}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="heartbeat" size={23} color="white" />
          ),
        }}
      />
      {/* <tab.Screen
        name="HomeChat"
        component={HomeChat}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="heartbeat" size={30} color="white" />
          ),
        }}
      /> */}

     
    </tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5F0",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Closdfasdse drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      // useLegacyImplementation
      screenOptions={{headerShown:false}}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
            <Drawer.Screen name="Home"   component={roothomes} />
            <Drawer.Screen name="Treatment"   component={Treatment} />
            <Drawer.Screen name="Bill"   component={Invoice} />
            
            {/* <Drawer.Screen name="Offer"   component={Doctor} /> */}

            {/* <Drawer.Screen name="DrawerHome"   component={DrawerHome} /> */}

    </Drawer.Navigator>
  );
}
const MainStack=() =>{
  return (
    <>
    
    <stack.Navigator  headerMode="none" >

      {/* <stack.Screen name="FirstScreen"   component={FirstScreen} /> */}
      <stack.Screen name="roothome"   component={MyDrawer} />

    
      {/* <stack.Screen name="Home" component={Home} />       */}
      {/* <stack.Screen name="FirstScreen"   component={FirstScreen} />
      <stack.Screen name="SecondScreen"   component={SecondScreen} />
      <stack.Screen name="ThirdScreen"   component={ThirdScreen} /> */}
      {/* <stack.Screen name="roothomes"   component={roothomes} /> */}
      <stack.Screen name="Doctor"   component={Doctor} />
      <stack.Screen name="HomeChat"   component={HomeChat} />
      {/* <stack.Screen name="Sketch"   component={Sketch} /> */}
      <stack.Screen name="Chat"   component={Chat} />
      <stack.Screen name="Locations"   component={Locations} />
      <stack.Screen name="AboutDoctor"   component={AboutDoctor} />
      <stack.Screen name="ListedDoctor"   component={ListedDoctor} />
      <stack.Screen name="SuccessScreen"   component={SuccessScreen} />
      <stack.Screen name="Notification"   component={Notification} />
    </stack.Navigator>
    </>
  
  );
}

const AuthStack=()=> {
  return (
    
    <stack.Navigator headerMode="none">

      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Signup" component={Signup} />
      <stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <stack.Screen name="MobileRegister" component={MobileRegister} />
      <stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <stack.Screen name="OTPS" component={OTPScreen} />
      <stack.Screen name="login" component={login} />
   
    </stack.Navigator>
  
  );
}

// onboarding screen

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text:
      "When making a group introduction, say the name of the physician first, and then introduce the group, like this: \"Dr. Smith, welcome to our practice. I'm Jennifer Martin, the team leader",
    image:{uri:"https://cdn.w600.comps.canstockphoto.com/set-of-doctors-characters-clipart-vector_csp79440954.jpg"},
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text:
      ">DriverManager is a Java inbuilt class with a static member register. Here we call the constructor of the drivethe constructor of the driver class at compile time. The following  Oracle driver as shown below:",
    image: {uri:"https://img.freepik.com/premium-vector/nursing-group-semi-flat-color-vector-characters-healthcare-givers-figures-full-body-people-white-practitioners-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5733.jpg?w=2000"},
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: {uri:"https://media.istockphoto.com/id/1225743855/vector/doctor-visiting-patient-and-explains-the-diagnosis-of-the-disease-in-cartoon-flat.jpg?s=1024x1024&w=is&k=20&c=D-Ro94rrdL5-YCpedl5mz9Zi4YQLDARAF3L3_R0Tc1o="},
  },
];
const OnboardScreen=()=> {
  const[state,setState] = useState({ showHomePage: false });
 

 const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
       
         <View style={{ height:"70%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",                }} >

<Image  style={{ height:"80%",width:"80%"}}  source={item.image} 
/>
 </View>
 <Text style={{marginVertical:4,fontWeight:"500",   alignSelf: "center",}}><Text style={{color:"orange",fontWeight:"500",fontSize:20}}>H</Text>armony<Text style={{color:"orange",fontWeight:"500",fontSize:20}}> &nbsp;H</Text>ealth</Text>
        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:13,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };
  const _onDone = () => {
    console.log("done")
  
    setState({ showHomePage: true });
  }
  const _renderNextButton = () => {
    return (
      <View style={{width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',}}>
        <FontAwesome5
          name="caret-right"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={{width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',}}>
        <FontAwesome5

          name="handshake"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

    if (state.showHomePage ){
   return <MainStack/>
    } else 
    return (
      
    <AppIntroSlider
      renderItem={_renderItem} 
      data={slides} 
      activeDotStyle={{
        backgroundColor:"#21465b",
        width:30
      }}
      onDone={_onDone}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
     />
  
    );
  
}

const RootNavigator=()=> {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
        console.log("auth",auth);

    const unsubscribeAuth = auth.onAuthStateChanged(
      async authenticatedUser => {
        // console.log("auth",authenticatedUser);
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
  <Provider store={store}>

    <NavigationContainer>
      {user ? <OnboardScreen  /> : <AuthStack />}
      {/* <MyDrawer /> */}
    </NavigationContainer>
  </Provider>
  );
}
export default function App() {
  
  return (
    <>
    
    <ActionSheetProvider>

    <AuthenticatedUserProvider>
    <RootNavigator />
    
      {/* <NavigationContainer>
        <stack.Navigator headerMode="none">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="roothomes" component={roothomes} />
          <stack.Screen name="Doctor" component={Doctor} />
          <stack.Screen name="Locations" component={Locations} />
          <stack.Screen name="Signup" component={Signup} />
          <stack.Screen name="login" component={login} />
          <stack.Screen name="AboutDoctor" component={AboutDoctor} />
          <stack.Screen name="ListedDoctor" component={ListedDoctor} />
          <stack.Screen name="SuccessScreen" component={SuccessScreen} />
          </stack.Navigator>
        </NavigationContainer> */}
    </AuthenticatedUserProvider>
        </ActionSheetProvider>
    </>
  );
}
