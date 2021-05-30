import * as React from "react"
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, StyleSheet, Modal, ScrollView } from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker"


export default class AddCamNotes extends React.Component{
constructor(){
    super();
    this.state={
        studentId:firebase.auth().currentUser.email,
        image:"#"
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
    this.uploadImage(uri,this.state.studentId)
}
}
uploadImage=async(uri,imageName)=>{
    var responce=await fetch(uri)
    var blob=await responce.blob()
    var ref=firebase.storage().ref.child("user_profiles/"+imageName)
    return ref.put(blob).then((responce)=>{
        this.fetchImage(imageName)
    })
}
}