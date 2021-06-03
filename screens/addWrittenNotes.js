import * as React from "react"
import {View,TouchableOpacity,Text,ToastAndroid, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import firebase from "firebase"
import db from "../config"
export default class AddWrittenNotes extends React.Component{
  constructor(){
      super();
      this.state={
          studentId:firebase.auth().currentUser.email,
          subject:"",
          topic:"",
          note:"",
          rating:0
      }
  }
  submitNote=()=>{
    db.collection("writtenNotes").add({
        studentId:this.state.studentId,
        subject:this.state.subject,
        topic:this.state.topic,
        note:this.state.note,
        rating:this.state.rating
    })
    this.props.navigation.navigate("HomeScreen")
    ToastAndroid.show("Notes was added Successfully",ToastAndroid.SHORT)
  }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
               <Header centerComponent={"Add Notes"}></Header>
               <TextInput style={styles.inputBox} placeholder={"Subject"} value={this.state.subject} onChangeText={(text)=>{
                   this.setState({
                       subject:text
                   })
                   
               }}/>
                <TextInput style={styles.inputBox} placeholder={"Topic"} value={this.state.topic} onChangeText={(text)=>{
                   this.setState({
                       topic:text
                   })
                   
               }}/>
                <TextInput style={styles.inputBox} placeholder={"Notes"} value={this.state.note} onChangeText={(text)=>{
                   this.setState({
                       note:text
                   })
                   
               }}/>
               <TouchableOpacity style={styles.button} onPress={()=>{
                   this.submitNote();
               }}><Text>Submit</Text></TouchableOpacity>
               <TouchableOpacity style={styles.button}onPress={()=>{
                   this.props.navigation.navigate("Home")
               }}><Text>Cancel</Text></TouchableOpacity>
               
            </KeyboardAvoidingView>
        )
    }
}
var styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle:"italic",
      shadowColor:"#0061A8",
      marginTop:100,
      marginLeft:10,
      color:"#0061A8",
      
    },
    container: {
      backgroundColor:"#ffc2b4",
     
      height:1000
    },
    inputBox: {
      width: '80%',
      backgroundColor: "#FBE0C4",
      borderWidth: 2,
      padding: 10,
      textAlign: 'center',
      marginTop: 15,
      borderRadius:30,
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
      marginTop:10,
      justifyContent:"center",
     
    },
    buttonText: {
      fontSize: 15,
      textAlign:"center"
    },
  });