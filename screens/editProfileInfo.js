import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"
import firebase from "firebase"
export default class EditProfileInfo extends React.Component{
  constructor(){
      super();
      this.State={
          studentId:firebase.auth().currentUser.email,
           docId:"",
            firstName: "",
            lastName: "",
            class: "",
            section: "",
      }
      this.requestRef=null
  }
  getStudentData=()=>{
    this.requestRef=db.collection("students").where("studentId","==",this.state.studentId)
    .onSnapshot((snapShot)=>{
         snapShot.forEach((doc)=>{
             var studentData=doc.data()
             this.setState({
                firstName:studentData.firstName,
                lastName:studentData.lastName,
                class:studentData.class,
                docId:doc.id,
                section:studentData.section,
               })
         });
        
    })
  }
  update=()=>{
db.collection("students").doc(this.state.docId).update({
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    class:this.state.class,
    section:this.state.section
})
  }
  componentDidMount(){
    this.getStudentData();
}
componentWillUnmount(){
    this.requestRef();
}
    render(){
        return(
            <KeyboardAvoidingView>
               <Text>written</Text>
               <TextInput
                                placeholder="firstName"
                                style={styles.inputBox}
                                onChangeText={(text) => {
                                    this.setState({
                                        firstName: text,
                                    });
                                }}
                                value={this.state.firstName}
                            />
                            <TextInput
                                placeholder="lastName"
                                style={styles.inputBox}
                                onChangeText={(text) => {
                                    this.setState({
                                        lastName: text,
                                    });
                                }}
                                value={this.state.lastName}
                            />
                            <TextInput
                                placeholder="class"
                                style={styles.inputBox}
                                onChangeText={(text) => {
                                    this.setState({
                                        class: text,
                                    });
                                }}
                                value={this.state.class}
                            /><TextInput
                                placeholder="section"
                                style={styles.inputBox}
                                onChangeText={(text) => {
                                    this.setState({
                                        section: text,
                                    });
                                }}
                                value={this.state.section}
                            />
                            <TouchableOpacity onPress={()=>{
                                this.update();
                            }}><Text>Update</Text></TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})