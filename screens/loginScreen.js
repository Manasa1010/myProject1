import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet,Modal,ScrollView} from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:"",
            firstName:"",
            lastName:"",
            class:"",
            section:"",
            confirmPassword:"",
            isModalVisible:false
        }
    }
    login=async()=>{
      firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then(()=>{
        this.props.navigation.navigate("HomeScreen")
      }).catch((error)=>{
        return Alert.alert(error.message)
        
      })
    }
    userSignIn=(email,password,confirmPassword)=>{
        if(password !=confirmPassword){
            return Alert.alert('password not matching')
        }else{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                db.collection('User').add({
                    firstName:this.state.firstName,
                    lasrName:this.state.lastName,
                    class:this.state.class,
                    section:this.state.section,
                    email:this.state.email,
                    isBookRequestActive:false
                })
                return Alert.alert('User successfully added')
            })
            .catch((error)=>{ 
                return Alert.alert(error.message)
            })
        }
    }
    showModal=()=>{
        return(
            <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.isModalVisible}>
            <View>
            <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView>
              <Text>Registration</Text>
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
            /> <TextInput
            placeholder="PassWord"
            secureTextEntry={true}
            style={styles.inputBox}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TextInput
            placeholder="confirmPassword"
            secureTextEntry={true}
            style={styles.inputBox}
            value={this.state.confirmPassword}
            onChangeText={(text) => {
              this.setState({
                confirmPassword: text,
              });
            }}
          />
          <TouchableOpacity
          style={styles.button}
                onPress={() => {
                  this.userSignUp(
                    this.state.email,
                    this.state.password,
                    this.state.confirmPassword
                  );
                }}>
                <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({
                    isModalVisible: false,
                  });
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              </KeyboardAvoidingView>
              </ScrollView>
            </View>
            </Modal>
        )
    }
    render(){
        return(
            <View>
                <Text>CLASS NOTES</Text>
            <View>{this.showModal()}</View>
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
                
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.setState({
                        isModalVisible:true
                    })
                }}>
                    <TouchableOpacity><Text>SignUp</Text></TouchableOpacity>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
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