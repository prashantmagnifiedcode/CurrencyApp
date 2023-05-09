import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Constants from 'expo-constants'
import Home  from './h'
import CreateEmployee from '.e'
import Profile from './p';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducer/todo'

const store  = createStore(reducer)


const Stack = createStackNavigator();

const myOptions = {
  title:"My Sweet Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}
function App() {
  return (
  
    <View style={styles.container}>
     
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
         options={myOptions} />
        <Stack.Screen 
         name="Create"
         component={CreateEmployee}
         options={{...myOptions,title:"Create Employee"}} 
         />
        <Stack.Screen
         name="Profile"
         component={Profile}
         options={{...myOptions,title:"Profile"}} 
          />
     </Stack.Navigator>
  
    </View>

  );
}


export default ()=>{
  return (
    <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
<MaterialIcons name={iconName} size={32} color={tabiconcolor }/>;
<View style={{ flexDirection: "row" ,justifyContent:"space-between",backgroundColor:colors.headercolor,height:50,
                borderRadius: 5
                }}>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="account-circle" size={40} color="black" />
                      <View style={{paddingTop:7 }}>
                          <Text style={{color: textcolors}}>{prop.channel}</Text>
                      </View>
                    </View>
                    <View style={{marginLeft:10,paddingTop:5,flexWrap:'wrap'}}>
                        <Text style={{fontSize:15,color:textcolors}}>{prop.title}</Text>
                    </View>
                    <Icon name='more-vert' size={25} color={'#3e3e3e'} />

                </View>