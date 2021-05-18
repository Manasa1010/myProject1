import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import firebase from "firebase"
import { Alert } from "react-native";

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
    login=async()=>{
      firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then(()=>{
        this.props.navigation.navigate("HomeScreen")
      }).catch((error)=>{
        return Alert.alert(error.message)
        
      })
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <TextInput 
                style={styles.textinput}
                placeholder="email ID"
                value={this.state.emailId}
                onChangeText={(text)=>{
                    this.setState({
                    emailId:text
                    })
                }}
                />
                  <TextInput 
                style={styles.textinput}
                placeholder="password"
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                        })
                }}
                />
                <TouchableOpacity onPress={()=>{
                    this.login();
                }}><Text>Login</Text></TouchableOpacity>
                <TouchableOpacity><Text>SignUp</Text></TouchableOpacity>
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