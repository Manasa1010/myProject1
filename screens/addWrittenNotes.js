import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
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
  }

    render(){
        return(
            <KeyboardAvoidingView>
               <Header centerComponent={"Add Notes"}></Header>
               <TextInput style={styles.textinput} placeholder={"Subject"} value={this.state.subject} onChangeText={(text)=>{
                   this.setState({
                       subject:text
                   })
                   
               }}/>
                <TextInput style={styles.textinput} placeholder={"Topic"} value={this.state.topic} onChangeText={(text)=>{
                   this.setState({
                       topic:text
                   })
                   
               }}/>
                <TextInput style={styles.textinput} placeholder={"Notes"} value={this.state.note} onChangeText={(text)=>{
                   this.setState({
                       note:text
                   })
                   
               }}/>
               <TouchableOpacity style={styles.button} onPress={()=>{
                   this.submitNote();
               }}><Text>Submit</Text></TouchableOpacity>
               <TouchableOpacity style={styles.button}><Text>Cancel</Text></TouchableOpacity>
               
            </KeyboardAvoidingView>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
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