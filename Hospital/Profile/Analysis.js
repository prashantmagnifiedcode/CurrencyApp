import React from 'react'
import { View, Text,ImageBackground, Image, TouchableOpacity,Dimensions,Alert , Button,} from 'react-native'
import Success from '../Success'
import Icon from "react-native-vector-icons/MaterialIcons";
import { heightPercentageToDP as hp ,widthPercentageToDP as wd } from "react-native-responsive-screen";
import { Title } from 'react-native-paper';
import style from '../commonCss/CommnButton';
const Analysis=()=>{
    return(
        <>
       
        <View style={{flex:1,height:"100%",width:"100%",backgroundColor:"white",borderTopLeftRadius:10,borderTopRightRadius:10,position:"relative"}}>
      <View style={{width:"100%"
                }}
               >
                <TouchableOpacity style={{ elevation: 5 ,height:90,width:90,borderRadius:90 , backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",
                left:120,top:-50
                }} >
 <Image  style={{ height:"100%",width:"100%"}} source={require('../imgFolder/Logo.png')}

/>
                </TouchableOpacity>
                </View>

                <View
                style={{ height:30, elevation: 1,
                backgroundColor: "#F5F5F5",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,marginLeft:4,position:"absolute",
                paddingHorizontal: 20}}
               >

            <TouchableOpacity >
    <Text style={{color:"skyblue",}}>Close</Text>
  </TouchableOpacity>

        </View>


             <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",marginTop:25}}>

          <Text style={{fontSize:18}}>Health Care Center</Text>
          <Text style={{color:"gray",fontSize:10}}>Sherman oak ca 786</Text>
  </View>
             <View style={{flex:0,display:"flex",justifyContent:"center",alignItems:"center"}}>

          <Text style={{fontSize:13,color:"skyblue"}}>Available Now</Text>
          <Text>
          <Icon name='star' size={17} color={"orange"}  />
          <Icon name='star' size={17} color={"orange"}  />
          <Icon name='star' size={17} color={"orange"}  />
                
          </Text>
  </View>
            <View style={{flex:2,display:"flex",justifyContent:"center",alignItems:"center"}}>

          <Success/>
            </View>
            
            <View style={{height:hp(50),display:"flex",justifyContent:"space-around"}}>
            
            <View style={{display:"flex",backgroundColor:"greeen",marginHorizontal:10}}>
            <Text style={{fontSize:17,marginBottom:3}}>About</Text>
            <Text style={{color:"gray",fontSize:12}}>As it’s currently written, your answer is unclear. Please edit to add additional details that will help others understand how this addresses the question asked. You can find more information on how to write good answers in the help center. – 
Community
Bot
 Dec 9, 2021 at 23:53</Text>
          
            </View>
            <View style={{display:"flex"}}>
            <Text style={{fontSize:16, marginBottom:3,marginHorizontal:10}}>Hours </Text>
            <View>

            <View style={{display:"flex",flexDirection:"row",justifyContent: 'space-around', marginBottom:2}}> 
            <Text style={{fontSize:12}} > <Text style={{fontSize:14,color:"skyblue"}}>{`\u25CF`} </Text>{` Monday to Thursday`}</Text>
            <Text style={{ fontSize: 12 }}>{` 07:00am : 8:80`}</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent: 'space-around',marginBottom:2}}> 
            <Text style={{fontSize:12}} > <Text style={{fontSize:14,color:"skyblue"}}>{`\u25CF`} </Text>{` Monday to Thursday`}</Text>
            <Text style={{ fontSize: 12 }}>{` 07:00am : 8:80`}</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent: 'space-around', marginBottom:2}}> 
            <Text style={{fontSize:12}} > <Text style={{fontSize:14,color:"skyblue"}}>{`\u25CF`} </Text>{` Monday to Thursday`}</Text>
            <Text style={{ fontSize: 12 }}>{` 07:00am : 8:80`}</Text>
            </View>

            </View>
          
            </View>


            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <View
                style={{ elevation: 5 ,height:50,width:50,borderRadius:50 , backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}}
                >

                <TouchableOpacity >

            <Icon name='call' size={23} color={"#1f98d6"}  />
                </TouchableOpacity>
                </View>

                <View
                style={{ elevation: 5 ,height:50,width:50,borderRadius:50 , backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity >

            <Icon name='mail' size={25} color={"#1f98d6"}  />
                </TouchableOpacity>
                </View>
               <View
                style={{ height:40, elevation: 5,
                backgroundColor: "#1f98d6",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,
                paddingHorizontal: 45}}
               >

            <TouchableOpacity >
    <Text >BOOK</Text>
  </TouchableOpacity>

        </View>
        
            </View>
          
            </View>
           


        </View>
        </>
    )
}
export default Analysis