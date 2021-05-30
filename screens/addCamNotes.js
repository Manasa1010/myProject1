import * as React from "react"
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, StyleSheet, Modal, ScrollView } from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker"
import{CameraRoll} from "@react-native-community/cameraroll"

export default class AddCamNotes extends React.Component{
constructor(){
    super();
    this.state={
        studentId:firebase.auth().currentUser.email,
        image:"#"
    }
}
openCamera=async()=>{
    const result=await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        exif:true
    })
    if(!result.cancelled){
        this.setState({
            image:result.uri,

        })
        CameraRoll.saveToCameraRoll(this.state.image)
        this.uploadImage(result.uri,this.state.studentId+Math.random().toString(36).substring(7))
    }
}
selectPicture=async()=>{
    const {cancelled,uri}=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
    })
    if(!cancelled){
    this.setState({
        image:uri
    })
    this.uploadImage(uri,this.state.studentId+Math.random().toString(36).substring(7))
}
}
uploadImage=async(uri,imageName)=>{
    var responce=await fetch(uri)
    var blob=await responce.blob()
    var ref=firebase.storage().ref.child("user_profiles/"+imageName)
    return ref.put(blob).then((responce)=>{
      //  this.fetchImage(imageName)
    })
}
render(){
    return(
        <KeyboardAvoidingView>
           <Header centerComponent={"home screen"}></Header>
           <TouchableOpacity style={styles.button} onPress={()=>{
              this.openCamera()
           }}><Text>Open Camera</Text></TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={()=>{
               this.selectPicture()
           }}><Text>Open Gallery</Text></TouchableOpacity>
           
        </KeyboardAvoidingView>
    )
}
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }, textinput:{
        padding:10,
        borderWidth:0.5,
        marginTop:10,
        alignSelf:"center"
    },button:{
        padding:10,
        borderWidth:0.5,
        marginTop:10,
        alignSelf:"center",
        backgroundColor:"red"
    }
})