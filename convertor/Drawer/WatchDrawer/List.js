import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const List = ({key,From,To}) => {
const Navigation =useNavigation()
  return (
    <View style={styles.item} key={key}>

        <View style={{flexDirection:"row"}}>

      <View style={styles.itemLeft}>
        <View  style={styles.circular}></View>
        <Text style={styles.itemText}>{From}</Text>
      </View>
      <View style={styles.itemLeft}>
        
<FontAwesome5
                name="exchange-alt"
                 size={18}
                color={"lightgray"}
              />
        {/* <Text style={styles.itemText}>jns</Text> */}
      </View>
      <View style={styles.itemLeft}>
        <View  style={styles.circular}></View>
        <Text style={styles.itemText}>{To}</Text>
      </View>
        </View>


      <View style={{width:"50%"}} >
        {/* <View  style={styles.circular}></View> */}
        <Text style={{
// height: 40,

// margin: 12,
// backgroundColor:"red",
borderWidth: 0.1,
textAlign:"center",
borderRadius:10,
padding:5
// padding: 10,
}}
onPress={()=>Navigation.navigate("Convertor",{From,To})}

>Open</Text>
      </View>
      {/* <View style={styles.circular}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal:5
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    marginRight:5
  },
});

export default List;