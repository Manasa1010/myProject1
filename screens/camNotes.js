import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"

export default class CamNotes extends React.Component{
  
    render(){
        return(
            <KeyboardAvoidingView>
               <Text>Cam </Text>
               
            </KeyboardAvoidingView>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})