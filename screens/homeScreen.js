import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"

export default class HomeScreen extends React.Component{
  
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
               <Header style={styles.heading} centerComponent={"home screen"} ></Header>
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
      width: '50%',
      alignItems:"center",
      borderWidth: 0.2,
      padding: 15,
      backgroundColor: '#8AB6D6',
      margin: 15,
      alignSelf:"center",
      marginTop:10,
      justifyContent:"center"
    },
    buttonText: {
      fontSize: 15,
      textAlign:"center"
    },
  });