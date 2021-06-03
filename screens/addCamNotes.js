import * as React from "react"
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, StyleSheet, Modal, ScrollView } from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker"
import{CameraRoll} from "@react-native-community/cameraroll"
import {Header} from "react-native-elements"
export default class AddCamNotes extends React.Component{
constructor(){
    super();
    this.state={
        studentId:firebase.auth().currentUser.email,
        image:"#",
        chapter:"",
        std:""
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
       // CameraRoll.saveToCameraRoll(this.state.image)
       var imageName=this.state.studentId+Math.random().toString(36).substring(7)
        this.uploadImage(result.uri,imageName)
        db.collection("camNotes").add({
            studentId:this.state.studentId,
            std:this.state.std,
            chapter:this.state.chapter,
            image:imageName
        })
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
    var imageName=this.state.studentId+Math.random().toString(36).substring(7)
        this.uploadImage(uri,imageName)
        db.collection("camNotes").add({
            studentId:this.state.studentId,
            std:this.state.std,
            chapter:this.state.chapter,
            image:imageName
        })
}
}
uploadImage=async(uri,imageName)=>{
    var responce=await fetch(uri)
    var blob=await responce.blob()
    var ref=firebase.storage().ref().child("user_profiles/"+imageName)
    return ref.put(blob).then((responce)=>{
        this.fetchImage(imageName)
    })
}
fetchImage=(imageName)=>{
    var ref=firebase.storage().ref().child("user_profiles/"+imageName) 
    ref.getDownloadURL().then((url)=>{
        this.setState({
            image:url
        })
    }).catch(error=>{
        this.setState({
            image:"#"
        })
    })
}
render(){
    return(
        <KeyboardAvoidingView style={styles.container}>
           <Header styles={styles.heading}centerComponent={"Add Cam Notes"}></Header>
           
           <TextInput
           style={styles.inputBox}
           placeholder="std"
           value={this.state.std}
          
           onChangeText={(text) => {
               this.setState({
                   std:text
               })
           }}
           />
           <TextInput
           style={styles.inputBox}
           placeholder="chapter"
           value={this.state.chapter}
          
           onChangeText={(text) => {
               this.setState({
                   chapter:text
               })
           }}
           />
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
var styles = StyleSheet.create({
    heading: {
      fontSize: 40,
      fontWeight: 'bold',
      fontStyle:"italic",
      shadowColor:"#0061A8",
      marginTop:100,
      marginLeft:10,
      color:"#0061A8",
      
    },
    container: {
      backgroundColor:"#FBE0C4",
      
      height:1000
    },
    inputBox: {
      width: '80%',
      backgroundColor: "#FBE0C4",
      borderWidth: 2,
      padding: 10,
      textAlign: 'center',
      margin: 15,
      
      alignSelf:"center",
      
    },
    button: {
      width: '50%',
      alignItems:"center",
      borderWidth: 0.2,
      padding: 15,
      backgroundColor: '#8AB6D6',
      margin: 15,
      alignSelf:"center",
      
    },
    buttonText: {
      fontSize: 15,
      textAlign:"center"
    },
  });