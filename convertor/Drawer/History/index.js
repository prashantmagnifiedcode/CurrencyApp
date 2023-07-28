import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,  ScrollView ,FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hlist from './List';

const History=()=> {
  const [H,setH]=useState([])
  const Currency=useSelector(state=>state.CurrencyData)
  const connection=useSelector(state=>state.UserData)

  console.log("hi",Currency)
  const clearAsyncStorage = async() => {
    AsyncStorage.clear();
    console.log("clear")
}

useEffect(()=>{
  console.log(connection.isConnected);
  if(connection.isConnected){
    const data = Currency.History;    
    setH(data)
    
  }else{
    const data = Currency.History.slice(-5);     
    setH(data)
  }

},[connection.isConnected])
  return (
    <View style={styles.container}>

      {/* Today's Tasks */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>History Convertor</Text>
        <View style={styles.items}>
        <View >
  <Text onPress={()=>clearAsyncStorage()}>Clear Async Storage</Text>
</View> 
          {/* This is where the tasks will go! */}
          <FlatList
        data={H}
        renderItem={({item}) =>{
          // console.log("ju",e)
          return(
            <>
          <Hlist key={item?.id} From={item?.From} To={item?.To} value={item?.value}/>
            </>
          )
        }
        }

        keyExtractor={item => item.id}
      />
       
    
        </View>
      </View>
        
      </ScrollView>        
    </View>
  );
}
export default History
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});