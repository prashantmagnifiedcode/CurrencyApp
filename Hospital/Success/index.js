import * as React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Donut from './Donut'

const data = [
    {
        percentage: 240,
        color: 'skyblue',
        max: 500,
        regarding:"service"
      },
    {
        percentage: 240,
        color: 'green',
        regarding:"Treatment",
        max: 500
      },
{
  percentage: 240,
  color: 'orange',
  regarding:"Satisfaction",
  max: 500
}]

export default function Success() {
  return (
    
      <>
      
  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>

        {data.map((p, i) => {
          return (
            <>
            <View style={styles.container}>
                <View>

             <Text>{p.regarding}</Text>
                </View>
                <View>

          <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} />
                </View>
            </View>
            </>
          )
        })}
  </View>
      
      </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent: 'center',
     alignContent:"center",
     
    
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
