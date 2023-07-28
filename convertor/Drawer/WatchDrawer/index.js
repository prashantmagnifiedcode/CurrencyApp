import React ,{useState} from 'react';
  import { StyleSheet,View ,Text,TouchableOpacity,Alert,Keyboard} from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import BottomSheet from 'reanimated-bottom-sheet';
  import Animated from 'react-native-reanimated';
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import List from './List';
  const Watch = () => {
    const [From, setFrom] = useState();
    const [To, setTo] = useState();
    const [ListData, setListData] = useState([]);
    
    
    const data = [
      { label: 'Afghan Afghani', value: 'AED' },
      { label: 'Armenian Dram', value: 'AMD' },
      { label: 'Iranian Rial', value: 'IRR' },
      { label: 'Indian Rupee', value: 'INR' },
      { label: 'Swiss Franc', value: 'CHF' },
      { label: 'Nepalese Rupee', value: 'NPR' },
      { label: 'Euro', value: 'EUR' },
      { label: 'United States Dollar', value: 'USD' },
    ];
  
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const renderInner = () => (
      <View style={styles.panel}>
<View>

          <View style={{display:"flex",width:"100%",height:hp(6),flexDirection:"row",justifyContent:"space-evenly"}}>

<View  style={{display:"flex",flexDirection:"row"}}>

<View style={{display:"flex",justifyContent:"center",alignItems:"center",width:wd(30)}}>

<Dropdown
style={styles.dropdown}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={data}
search
maxHeight={300}
labelField="value"
valueField="label"
placeholder="From"
searchPlaceholder="Search..."
value={From}
onChange={item => {
  
  setFrom(item.value);
}}
// renderLeftIcon={() => (
//   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
// )}
/>
</View>
<View style={{display:"flex",justifyContent:"center",alignItems:"center",marginHorizontal:5}}>

<FontAwesome5
                name="exchange-alt"
                 size={18}
                color={"lightgray"}
              />
</View>
<View style={{display:"flex",justifyContent:"center",alignItems:"center",width:wd(30)}}>

<Dropdown
style={styles.dropdown}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={data}
search
maxHeight={300}
labelField="value"
valueField="label"
placeholder="To"
searchPlaceholder="Search..."
value={To}
onChange={item => { setTo(item.value);}}
// renderLeftIcon={() => (
//   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
// )}
/>
</View>


</View>





</View>
<TouchableOpacity
      onPress={()=>add()}
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
        Add in Watch
      </Text>
    </TouchableOpacity>

</View>


      </View>
    );
  

  const   renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );


    const add=()=>{
      setListData((prev)=>[...prev,{From,To}])
      // ListCount++;
    }


    return (
      <>
  <BottomSheet
        ref={bs}
        snapPoints={[200, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}

        callbackNode={fall}
        enabledGestureInteraction={true}
      />
        <View style={{ padding: 20, borderRadius: 15,width:"100%"}}>



<View style={{ width: "100%", marginTop: 35, paddingVertical: 2,marginBottom:5 }}>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              
              <View
                style={{
                  height: 25,
                  elevation: 1,
                  backgroundColor: "gray",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity>
                  <TouchableOpacity
                    
                  >
                    <Text style={{ color: "white", fontSize: 13 }} onPress={() => bs.current.snapTo(0)}>
                    Add More WatchList
                    </Text>
                 
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          {
            ListData.map((e)=>{
              return(
                <>
            <List  From={e.From} To={e.To} />
                
                </>
              )
            })
          }





        </View>
      </>
    );
  };

  export default Watch;

  const styles = StyleSheet.create({

    dropdown: {
        height: "100%",
        width:"100%",
              borderColor: 'light',
        borderWidth: 0.1,
        borderRadius:1,
        paddingHorizontal: 8,
        marginBottom: 10,
        padding:2,
        margin:3
        
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
  });
