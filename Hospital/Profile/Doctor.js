import React from 'react'
import { View, Text,ImageBackground, Image, TouchableOpacity,Dimensions,Alert , Button,} from 'react-native'
import Analysis from './Analysis'
const Doctor=()=>{
    return(
        <>
        <View style={{height:"100%",width:"100%",
    alignItems:"center",justifyContent:"flex-end",position:"relative"
    }}>
         <ImageBackground style={{ height:"100%",width:"100%",position:"absolute",top:0}} resizeMode="cover" source={{uri:"https://t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg"}} />
            <View style={{height:"85%",width:"90%"}}>
                <Analysis/>
            </View>

        </View>
       
        </>
    )
}
export default Doctor