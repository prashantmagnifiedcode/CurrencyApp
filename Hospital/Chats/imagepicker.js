import React from "react";
import * as imagepicker from 'expo-image-picker'
import * as permissions from 'expo-permissions'
import { Alert } from 'react-native'





const handleUpload = (image)=>{
    const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "firecoder")
        data.append("cloud_name", "dqsfpok4o")
        fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload", {
            method: "POST",
            body: data,
        }).then(res => res.json()).
            then(data => {
                
                setuploadimg(data.url)
                Alert.alert("Successfully uploaded")
            }).catch(err => {
                Alert.alert(" while uploading imgae")
            })
}
const Camergallery = async (props) => {
     
    
    const{image,phone}=props
    
    const { granted } = await permissions.askAsync(permissions.CAMERA)
    //console.log(granted)
    if (granted) {
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
            // console.log(newfile)
            /*const data = new FormData()
           data.append('file', image)
           data.append("upload_preset", "firecoder")
           data.append("cloud_name", "dqsfpok4o")
           fetch("https://api.cloudinary.com/v1_1/dqsfpok4o/image/upload", {
               method: "POST",
               body: data,
            }).then(res => res.json()).
            then(data => {*/
                
                /* setuploadimg(data.url)
                Alert.alert("Successfully uploaded")
            }).catch(err => {s
                Alert.alert(" while uploading imgae")
            })*/
        }
        
        
    } else {
        Alert.alert("not able to open gallery")
    }
    return(
        <>
        </>
    
    )

}




export  {Camergallery}