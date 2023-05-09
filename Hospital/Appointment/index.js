import React from 'react'
import { View, Text, Image, SafeAreaView,TouchableOpacity,Dimensions,Alert , Button,ScrollView} from 'react-native'
import Calendars from './Calendar'
import { useNavigation } from "@react-navigation/native";
const Appoint=()=>{
    const Navigation=useNavigation()
    const time=[{time:"4:45 AM"},{time:"4:45 AM"},{time:"4:45 AM"},{time:"4:45 AM"},{time:"4:45 AM"},]
    return(
        <>
        <SafeAreaView>

        <View style={{height:"100%",width:"100%",
    alignItems:"center",position:"relative"
    }}>
            <View
                style={{ height:30, elevation: 1,
                backgroundColor: "#F5F5F5",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:40,left:20,
                paddingHorizontal: 20}}
               >

            <TouchableOpacity >
    <Text style={{color:"skyblue",}}>Back</Text>
  </TouchableOpacity>

        </View>
         
             
                <View  style={{height:100,width:"100%",display:"flex",justifyContent:"flex-end",}}><Text  style={{ textAlign:"center",fontSize:14}}>Appointment Scheduling with <Text style={{color:"green"}}>Dr Ram </Text> </Text></View>
                
                <ScrollView  showsVerticalScrollIndicator={false}  >     
              
                
            <View style={{width:"100%"}}>
            <Calendars/>
            </View>

            <View style={{flex:1}}>
                <View style={{marginBottom:7}}><Text  style={{ textAlign:"center",fontSize:15}}>Choose Schedule</Text></View>
                <View style={{display:"flex",flexDirection:"row",
                flexWrap:"wrap",paddingHorizontal:25,justifyContent:"center"}}>
                    {
                    time.map((e)=>{
                        return(
                            <>
                <View
                style={{ height:40, elevation: 5,
                backgroundColor: "#F5F5F5",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,marginHorizontal:3,
             paddingHorizontal:15    
            }}
               >

            <TouchableOpacity >
    <Text style={{color:"#888"}}>{e.time}</Text>
  </TouchableOpacity>

        </View> 
                            </>
                        )
                    })
                    }
                </View>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",marginBottom:3}}>
            <View
                style={{ height:40, elevation: 8,
                backgroundColor: "#1f98d6",borderRadius:20,
                display:"flex",justifyContent:"center",alignItems:"center",marginTop:10,marginHorizontal:3,
             paddingHorizontal:15 ,width:"50%" 
            }}
               >

            <TouchableOpacity onPress={()=>Navigation.navigate("SuccessScreen")} >
    <Text style={{color:"white"}}>Book Appointment</Text>
  </TouchableOpacity>

        </View> 
                </View>
                </ScrollView>




        </View>
        </SafeAreaView>
       
        </>
    )
}
export default Appoint