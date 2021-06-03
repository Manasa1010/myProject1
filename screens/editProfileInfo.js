import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"
import firebase from "firebase"
export default class EditProfileInfo extends React.Component{
  constructor(){
      super();
      this.state={
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
      
      alignSelf:"center",
      
    },
    button: {
      width: "90%",
     borderRadius:20,
      borderWidth: 0.2,
      padding: 10,
      backgroundColor: '#8AB6D6',
      margin: 15,
      alignItems:"center",
      marginTop:10,
      
    },
    buttonText: {
      fontSize: 15,
      textAlign:"left"
    },
  });