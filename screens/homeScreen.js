import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"

export default class HomeScreen extends React.Component{
  
    render(){
        return(
            <KeyboardAvoidingView>
               <Header centerComponent={"home screen"}></Header>
               <TouchableOpacity><Text>CamNotes</Text></TouchableOpacity>
               <TouchableOpacity><Text>WriteNotes</Text></TouchableOpacity>
               
            </KeyboardAvoidingView>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})