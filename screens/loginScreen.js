import * as React from "react"
import { View, TouchableOpacity, Text, KeyboardAvoidingView, TextInput, StyleSheet, Modal, ScrollView } from "react-native"
import firebase from "firebase"
import db from "../config"
import { Alert } from "react-native";


export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: "",
            firstName: "",
            lastName: "",
            class: "",
            section: "",
            confirmPassword: "",
            isModalVisible: false
        }
    }
    login = async () => {
        firebase.auth().signInWithEmailAndPassword(this.state.emailId, this.state.password).then(() => {
            this.props.navigation.navigate("HomeScreen")
        }).catch((error) => {
            return Alert.alert(error.message)

        })
    }
    userSignUp = (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            return Alert.alert('password not matching')
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                db.collection('students').add({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    class: this.state.class,
                    section: this.state.section,
                    email: this.state.emailId,
                   
                })
                this.setState({
                    isModalVisible:false
                })
                return Alert.alert('User successfully added')
            })
                .catch((error) => {
                    return Alert.alert(error.message)
                })
        }
    }
    showModal = () => {
        return (
            <Modal
                
                animationType="fade"
                transparent={false}
                visible={this.state.isModalVisible}>
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView>
                            <Text style={styles.heading}>Registration</Text>
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
                            <TextInput
                            style={styles.inputBox}
                            placeholder="email ID"
                            value={this.state.emailId}
                            onChangeText={(text) => {
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />
                            <TextInput
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
                                        this.state.emailId,
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
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>CLASS NOTES</Text>
                <View>{this.showModal()}</View>
                <KeyboardAvoidingView>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="email ID"
                        value={this.state.emailId}
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="password"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.login();
                    }}><Text>Login</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.setState({
                            isModalVisible: true
                        })
                    }}>
                        <TouchableOpacity><Text>SignUp</Text></TouchableOpacity>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle:"italic",
      shadowColor:"#0061A8",
      marginTop:50,
      marginLeft:120,
      color:"#0061A8"
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
      marginTop:20
    },
    buttonText: {
      fontSize: 15,
      textAlign:"center"
    },
  });