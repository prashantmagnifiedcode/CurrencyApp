import React, { useEffect } from 'react';
import { StyleSheet,Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./Hospital/Drawer/Custom";
import Invoice from "./Hospital/Home";
import Chart from './Hospital/Drawer/ChartDrawer'
import History from './Hospital/Drawer/History';
import Watch from './Hospital/Drawer/WatchDrawer'; 
import {InternetConnectivity} from './Redux/Action/User'
import {useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from "./Redux/Store/";
import { Provider } from 'react-redux'
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import NetInfo from "@react-native-community/netinfo";

let persistor = persistStore(store)
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dispatch=useDispatch()

  useEffect(()=>{
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      dispatch(InternetConnectivity({isconnected:state.isConnected}))
    });
  },[])
  return (
    <Drawer.Navigator
       initialRouteName='Convertor'
      screenOptions={{headerShown:false}}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >

            <Drawer.Screen name="Convertor"   component={Invoice} />
            <Drawer.Screen name="Exchange rate chart"   component={Chart} />
            <Drawer.Screen name="History"   component={History} />
            <Drawer.Screen name="WatchList"   component={Watch} />
            

    </Drawer.Navigator>
  );
}



// onboarding screen


export default function App() {
  
  return (
    <>
     <Provider store={store}>
     <PersistGate  loading={<Text>Loading...</Text>} persistor={persistor}>
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
      </PersistGate>
    </Provider>
    </>
  );
}
