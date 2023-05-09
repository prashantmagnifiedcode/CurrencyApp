import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
  } from 'react';
  import { TouchableOpacity, Text ,View,KeyboardAvoidingView,StyleSheet,ActionSheetIOS,Button,Image,Keyboard,TextInput} from 'react-native';
  import { GiftedChat,InputToolbar } from 'react-native-gifted-chat';
  import { Video,Audio } from 'expo-av'
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import Icon from "react-native-vector-icons/MaterialIcons";
  import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
  import { ActionSheetProvider,useActionSheet } from '@expo/react-native-action-sheet';
  import { signOut } from 'firebase/auth';
  import { auth, database } from '../Config/firebase';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
  import ImagePicker from 'react-native-image-picker';
  import { launchCamera, launchImageLibrary } from 'react-native-image-picker'  
  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wd,

  } from "react-native-responsive-screen";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  // import Cards from '../../whatsapp/card'
  
const  Chat=() =>{

    // useEffect(() => {
    //   Keyboard.addListener("keyboardDidShow", () => alert("Keyboard Shown");
    //   Keyboard.addListener("keyboardDidHide", () => alert("Keyboard Hidden");
    // }, []);
   
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    const { showActionSheetWithOptions } = useActionSheet();
  const onSignOut = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
    };
    const onPress=() => {
      console.log("call");
      const options = ['Delete', 'Save', 'Cancel'];
      const destructiveButtonIndex = 0;
      const cancelButtonIndex = 2;
  
      showActionSheetWithOptions({
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      }, async(selectedIndex) => {
        switch (selectedIndex) {
          case 1:

            let data = await imagepicker.launchImageLibraryAsync({
              mediaTypes: imagepicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 0.5,
          })
         // console.log(data)
  
          if (!data.cancelled) {
              let newfile = { 
                  uri:data.uri,
                  type:`test/${data.uri.split(".")[1]}`,
                  name:`test.${data.uri.split(".")[1]}` 
                  
              }
              console.log(newfile)
            }
            break;
  
          case destructiveButtonIndex:
            
            break;
  
          case cancelButtonIndex:
            // Canceled
        }});
    }
    // const gotoMedia = () => {
    //   ActionSheetIOS.showActionSheetWithOptions({
    //     options: ["Cancel", "Camera", "Photos", "Video"],
    //     cancelButtonIndex: 0
    //   },
    //   buttonIndex => {
    //     if (buttonIndex == 2) {
    //       launchImageLibrary().then((res) => {
    //         if (!res.didCancel && !res.errorCode) {
    //           uploadMediaToFirestore(res, 'image');
    //         }
    //       });
    //     } else if (buttonIndex == 1) {
    //       launchCamera().then((res) => {
    //         if (!res.didCancel && !res.errorCode) {
    //           uploadMediaToFirestore(res, 'image');
    //         }
    //       });
    //     } else if (buttonIndex == 3) {
    //       // const options = {
    //       //   title: 'Video Picker', 
    //       //   mediaType: 'video', 
    //       // };
    //       // launchImageLibrary(options).then((res) => {
    //       //   if (!res.didCancel && !res.errorCode) {
    //       //     uploadMediaToFirestore(res, 'video');
    //       //   }
    //       // });
    //     }
    //   })
    // }
    const uploadMediaToFirestore = async (res, type) => {
      console.log("uuploada")
      // const uri = res.assets[0].uri;
      // const filename = uri.substring(uri.lastIndexOf('/') + 1);
      // const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

      // const storage = getStorage(app);
      // const fileRef = ref(storage, filename);
      // const img = await fetch(uploadUri);
      // const bytes = await img.blob();
      // let metadata;
      // if (type == 'video') {
      //   metadata = {
      //     contentType: 'video/mp4',
      //   };
      // } else {
      //   metadata = {
      //     contentType: 'image/jpeg',
      //   };
      // }
      
      // uploadBytes(fileRef, bytes, metadata).then(async (uploadTask) => {
      //   console.log('task', uploadTask)
      //   getDownloadURL(uploadTask.ref).then((url) => {
      //     if (type == 'video') {
      //       setVideoData(url);
      //     } else {
      //       setImageData(url);
      //     }
      //   });
      // }).catch((err) => {
      //   alert('Error while uploading Image!')
      //   console.log(err);
      // });
    }
    useLayoutEffect(() => {
        navigation.setOptions({

          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={24} color="gray" style={{marginRight: 10}}/>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 20
              }}
              // onPress={onSignOut}
            >
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 10,
                  elevation: 8,
                  borderColor: "skyblue",
                  borderWidth: 1,
                  padding: 2,
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU",
                  }}
                />
              </View>
            </TouchableOpacity>
          )
        });
      }, [navigation]);

    useLayoutEffect(() => {

        const collectionRef = collection(database, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe',querySnapshot.docs);

          setMessages(
            querySnapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user,
              image: doc.data().image,
              video: doc.data().video
            }))
          );
        });
    return unsubscribe;
    
      }, []);

    const onSend = useCallback((messages = []) => {
      const { _id, createdAt, text, user } = messages[0];   
      console.log(messages[0]) 
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        // // setMessages([...messages, ...messages]);
        addDoc(collection(database, 'chats'), {
          _id,
          createdAt,
          text,
          user
        });
      }, []);
      const renderMessageVideo = (props) => {
        console.log("prop",props)
        const { currentMessage } = props;
        return (
          <View >
             <Video
              resizeMode="contain"
              useNativeControls
              shouldPlay={false}
              source={{ uri: currentMessage.video }}
              style={{height:100,width:180,borderRadius:10,margin:3}}
            />
          </View>
        );
      };
      const customtInputToolbar = props => {
        return (
          <>
       
                
       <View
        style={{
          position: "absolute",
          top: hp(0),
          width: "100%",
          display: "flex",
          
          
          alignItems:"center",
          justifyContent:"flex-end",
          backgroundColor:"#fff",
          height:hp(14),
          
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          

        }}
      >
        <View
          style={{
            height: hp(8),
            width: wd(95),
            display: "flex",
            flexDirection: "row",
            backgroundColor: "skyblue",
            justifyContent:"space-between",
            alignItems:'center',
            borderRadius: 30,
            padding:2,
            
          }}
        >
          <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                elevation: 8,
                borderColor: "white",
                borderWidth: 1,
                padding: 2,
                marginLeft:10
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 45 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgr3JUApbibUE2ssby_YAk7lUPeJ-c65UO2GEsSwjE4DTZCUo0nEtwiB3ahrq9rFoQ88&usqp=CAU",
                }}
              />
            </View>

          <View
            style={{
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Prashant srivastava</Text>
            <Text>online</Text>
          </View>

          <TouchableOpacity
            style={{
              marginRight: 10
            }}
            onPress={onSignOut}
          >
            <AntDesign name="logout" size={24} color="white" style={{marginRight: 10}}/>
          </TouchableOpacity>
        </View>

       
      </View>
        
          <InputToolbar
            {...props
            
            }
            containerStyle={{
              
              borderRadius: 30,
               backgroundColor:"white",
              
              marginHorizontal:6,
              marginVertical:3,
              borderWidth:2,
              borderColor:"skyblue"
              

              // color:"green",
              
              
            }}
          />
          {/* <Button title="Menu" style={{width:"20%"}} onPress={()=>onPress()}/>   */}
          
          </>
        );
      };
     const onQuickReply = replies => {
      console.log("replie",replies)
        const createdAt = new Date()
        if (replies.length === 1) {
          onSend([
            {
              createdAt,
              _id: Math.round(Math.random() * 1000000),
              text: replies[0].title,
              user,
            },
          ])
        } else if (replies.length > 1) {
          onSend([
            {
              createdAt,
              _id: Math.round(Math.random() * 1000000),
              text: "buggggg",
              user,
            },
          ])
        } else {
          console.warn('replies param is not set correctly')
        }
      }
      const renderQuickReplySend = () => <Text>{' custom send =>'}</Text>
  
      return (
        <>
      
        

        <View style={{backgroundColor:"#fff"}}>


<KeyboardAvoidingView  >
 <View style={{height:"100%"}} >
       
    <GiftedChat
      // alwaysShowSend={true}
      onLongPressAvatar={user => alert(JSON.stringify(user))}
      keyboardShouldPersistTaps='never'
      // keyboardShouldPersistTaps={'always'}
    messages={messages}
    wrapInSafeArea={false}
    showAvatarForEveryMessage={false}

    showUserAvatar={true}

    onSend={messages => onSend(messages) }
    messagesContainerStyle={{

      backgroundColor: '#fff',

    }}
// forceGetKeyboardHeight={true}
      // renderSend={()=><FontAwesome name="send-o" size={24} color="gray"/>}
      renderSend={(props)=>{
        const {text,messageIdGenerator,user, onSend} = props
        return(
          <TouchableOpacity onPress= {
            ()=>{
               if (text && onSend) {
                   onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
             }
             }
            }  style={{justifyContent: 'center', height: '100%', marginRight: 15}}>
               <FontAwesome name="send-o" size={24} color="gray"/>
        </TouchableOpacity>
        )}} 
    // quickReplyStyle={{ borderRadius: 42,backgroundColor:"red" }}
    renderUsername={true}
    renderTicks={()=> <AntDesign name="check" size={14} color="gray" style={{marginRight: 10}}/>}
    renderMessageVideo={renderMessageVideo}
    renderAvatar={false}
    isLoadingEarlier={true}
    textInputStyle={{
      backgroundColor: '#fttff',
      borderRadius: 20,innerHeight:12
    }}
    infiniteScroll
    onQuickReply={onQuickReply}
    renderQuickReplySend={renderQuickReplySend}
    renderInputToolbar={props => customtInputToolbar(props)}
    user={{
      _id: auth?.currentUser?.email,
      avatar: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
    }}
    
    
  />
 </View>
</KeyboardAvoidingView >
{/* <View onPress={()=>gotoMedia()}>
  <Text>clic</Text>
</View>
<Button title="Menu" onPress={()=>onPress()}/> */}

        </View>

        


</>
      );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "10%",
    flexDirection: "column",
  },
  containers:{
    backgroundColor: "#3e3e3e",
    height:hp(100),
    width:wd(100)
  },
  chatbox: {
    //backgroundColor:"#3e3e3e",

    height:"91.3%"
  },
  inputbox: {
    height: "10%",
    borderRadius: 5,
  },

  inputtext: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "8%",

    backgroundColor: "#3e3e3e",
    backgroundColor: "black",
    color: "green",

    justifyContent: "space-evenly",
  },
  inputs: {
    width: "65%",
    height: "97%",
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 10,
    color: "green",
    borderColor: "#5DFF17",
    borderWidth: 0.4,
  },
  send: {
    width: "30%",
    height: "97%",
    borderRadius: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004D00",
    borderWidth: 1.5,
  },
});
export default Chat

