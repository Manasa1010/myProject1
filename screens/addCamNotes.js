import * as React from "react"
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, StyleSheet, Modal, ScrollView } from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";


export default class AddCamNotes extends React.Component{
constructor(){
    super();
    this.state={
        studentId:firebase.auth().currentUser.email,
        image:"#"
    }
}

}