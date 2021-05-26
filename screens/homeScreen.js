import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"

export default class HomeScreen extends React.Component{
  
    render(){
        return(
            <KeyboardAvoidingView>
               <Header centerComponent={"home screen"}></Header>
               <TouchableOpacity style={styles.button} onPress={()=>{
                   this.props.navigation.navigate("AddCamNotes")
               }}><Text>CamNotes</Text></TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={()=>{
                   this.props.navigation.navigate("AddWrittenNotes")
               }}><Text>WriteNotes</Text></TouchableOpacity>
               
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