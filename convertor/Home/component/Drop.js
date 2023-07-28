import React, { useState } from 'react';
  import { StyleSheet,View ,Text,TouchableOpacity,Alert,Keyboard} from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { auth,database } from "../../Config/";
  import AntDesign from '@expo/vector-icons/AntDesign';
  import InputCmp from './InputCmp'
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import { useSelector,useDispatch } from 'react-redux';

import {currentCr} from '../../../Redux/Action/User'
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

  const DropdownComponent = () => {
  const connection=useSelector(state=>state.UserData)
  const dispatch= useDispatch()
  
    const [input, setinput] = useState({
      Amount:null,Exchange:null
    });
    const [errors, setErrors] = useState({});
    const [From, setFrom] = useState(null);
    const [To, setTo] = useState(null);
    console.log(From,To);

    const Currencydata=()=>{
      if(connection.isConnected ){
     
        var myHeaders = new Headers();
        myHeaders.append("apikey", "01ZbCbMAY0mZJ8M0I6BMA9DL1JwAOH3w");
        console.log(typeof From,typeof To)
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        
        fetch(`https://api.apilayer.com/fixer/convert?to=${To}&from=${From}&amount=${input?.Amount}`, requestOptions)
          .then(response => response.json())
          .then(res => {
             console.log("rsult",res)
            // addDoc(collection(database, 'Currency'), res)
            dispatch(currentCr({id:(new Date()).getTime()+Math.floor(Math.random() * 10) ,From,To,value:res?.result}))
            // console.log("reus",res,res.result) 
            setinput({...input,Exchange:res?.result}) }
          )
          .catch(error => console.log('error', error));
          
      }else{
        Alert.alert("No Internet Connectivity")
      }
  
    }
    const validate = async () => {
      Keyboard.dismiss();
      let isValid = true;
      if (!input.Amount) {
        handleError('Please input Amount', 'Amount');
        isValid = false;
      } if(!From ||!To){
        Alert.alert("pls select")
      }
      if (isValid) {
        Currencydata();
      }
    };
    // const val=cur?.symbols
    
  const handleOnchange = (text, input) => {
    setinput(prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

    return (
        <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 15,width:"100%"}}>

<View>
<Text style={[{marginLeft:10,marginBottom:5}]}> From</Text>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Currency"
              searchPlaceholder="Search..."
              value={From}
              onChange={item => {
                setFrom(item.value);
              }}
              renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
            />
</View>
<InputCmp
iconName="currency"
label="Amount"
placeholder="Amount"
onChangeText={text => handleOnchange(text, 'Amount')}
onFocus={() => handleError(null, 'Amount')}
val={input?.Amount}
error={errors.Amount}
edit={true}
/>
<View>
<Text style={[{marginLeft:10,marginBottom:5}]}> To</Text>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Currency"
              searchPlaceholder="Search..."
              value={To}
              onChange={item => {
                setTo(item.value);
              }}
              renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
            />
               <TouchableOpacity
      onPress={()=>validate()}
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
        Exchange Currency
      </Text>
    </TouchableOpacity>
</View>
<InputCmp
iconName="currency"
label="Exchanged"
placeholder="ExchangedAmount"
val={input?.Exchange}
edit={false}
/>

        </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.1,
        borderRadius:25,
        paddingHorizontal: 8,
        marginBottom: 10,
        
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
  });
