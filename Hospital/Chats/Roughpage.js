import { View, Text, TouchableOpacity, ActionSheetIOS, Platform } from "react-native"
import { GiftedChat } from 'react-native-gifted-chat'
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import {db, app} from '../../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import {getStorage, ref, getDownloadURL, uploadBytes} from "firebase/storage";
import uuid from 'react-native-uuid';
import Video from 'react-native-video';

export default ChatScreen = ({ route, navigation }) => {
    const [messages, setMessages] = useState([]);

      useLayoutEffect(() => {
        navigation.setOptions({
              headerRight: () => (
                  <TouchableOpacity style={{marginRight: 10}} onPress={gotoMedia}>
                      <Text>Media</Text>
                  </TouchableOpacity>
              )
          })
          const q = query(collection(db, 'chatMessages'), orderBy('createdAt', 'desc'));
          const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
              snapshot.docs.map(doc => ({
                  _id: doc.data()._id,
                  createdAt: doc.data().createdAt.toDate(),
                  text: doc.data().text,
                  user: doc.data().user,
                  image: doc.data().image,
                  video: doc.data().video
              }))
          ));

          return () => {
            unsubscribe();
          };

      }, [navigation]);

      const gotoMedia = () => {
        ActionSheetIOS.showActionSheetWithOptions({
          options: ["Cancel", "Camera", "Photos", "Video"],
          cancelButtonIndex: 0
        },
        buttonIndex => {
          if (buttonIndex == 2) {
            launchImageLibrary().then((res) => {
              if (!res.didCancel && !res.errorCode) {
                uploadMediaToFirestore(res, 'image');
              }
            });
          } else if (buttonIndex == 1) {
            launchCamera().then((res) => {
              if (!res.didCancel && !res.errorCode) {
                uploadMediaToFirestore(res, 'image');
              }
            });
          } else if (buttonIndex == 3) {
            const options = {
              title: 'Video Picker', 
              mediaType: 'video', 
            };
            launchImageLibrary(options).then((res) => {
              if (!res.didCancel && !res.errorCode) {
                uploadMediaToFirestore(res, 'video');
              }
            });
          }
        })
      }


      const uploadMediaToFirestore = async (res, type) => {
        const uri = res.assets[0].uri;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        const storage = getStorage(app);
        const fileRef = ref(storage, filename);
        const img = await fetch(uploadUri);
        const bytes = await img.blob();
        let metadata;
        if (type == 'video') {
          metadata = {
            contentType: 'video/mp4',
          };
        } else {
          metadata = {
            contentType: 'image/jpeg',
          };
        }
        
        uploadBytes(fileRef, bytes, metadata).then(async (uploadTask) => {
          console.log('task', uploadTask)
          getDownloadURL(uploadTask.ref).then((url) => {
            if (type == 'video') {
              setVideoData(url);
            } else {
              setImageData(url);
            }
          });
        }).catch((err) => {
          alert('Error while uploading Image!')
          console.log(err);
        });
      }

      const setVideoData = (url) => {
        const imageMessage = [
          {
            _id: uuid.v4(),
            createdAt: new Date(),
            video: url,
            user: {
              _id: route?.params?.username ? route.params.username: '1',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ];
        setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
        const { _id, createdAt, user, video} = imageMessage[0]
        addDoc(collection(db, 'chatMessages'), { _id, createdAt, video , user: {...user, avatar: 'https://placeimg.com/140/140/any'} });
      }
    
      const setImageData = (url) => {
        const imageMessage = [
          {
            _id: uuid.v4(),
            createdAt: new Date(),
            image: url,
            user: {
              _id: route?.params?.username ? route.params.username: '1',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ];
        setMessages(previousMessages => GiftedChat.append(previousMessages, imageMessage))
        const { _id, createdAt, user, image} = imageMessage[0]
        addDoc(collection(db, 'chatMessages'), { _id, createdAt, image , user: {...user, avatar: 'https://placeimg.com/140/140/any'} });
      }

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const { _id, createdAt, user} = messages[0]
        addDoc(collection(db, 'chatMessages'), { _id, createdAt,  text: messages[0].text, user: {...user, avatar: 'https://placeimg.com/140/140/any'} });
      }, [])

      const onBuffer = (buffer) => {
        console.log('buffered', buffer);
      }
      const videoError = (err) => {
          console.log('error', err);
      }

      const renderMessageVideo = (props) => {
        const { currentMessage } = props;
        console.log(currentMessage.video);
        return (
          
          <View style={{ position: 'relative', height: 150, width: 250 }}>

          <Video
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: 150,
            width: 250,
            borderRadius: 20,
          }}
          shouldPlay
          rate={1.0}
          resizeMode="cover"
          height={150}
          width={250}
          muted={false}
          source={{ uri: "https://firebasestorage.googleapis.com/v0/b/coupon-2379f.appspot.com/o/small.mp4?alt=media&token=4f4722e3-c9fc-49a8-a753-1d635e99eb43" }}
          allowsExternalPlayback={false}></Video>
      
          </View>
        );
      };

    return (
        <View style={{display: 'flex', height: '100%'}}>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: route?.params?.username ? route.params.username: '1',
            }}
            renderMessageVideo={renderMessageVideo}
        />
        </View>
        
    )
}