import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"

export default class EditProfileInfo extends React.Component{
  
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