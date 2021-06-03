import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import {DrawerItems} from "react-navigation-drawer"
import firebase from "firebase" 
export default class CustomSideBarMenu extends React.Component{
 
    render(){
        return(
           <View style={styles.container}>
               <View style={styles.container}>
                   <DrawerItems {...this.props} />
               </View>
               <View style={styles.container}>
                   <TouchableOpacity onPress={()=>{
                       firebase.auth().signOut()
                       this.props.navigation.navigate("LoginScreen")
                   }}><Text>Log out</Text></TouchableOpacity>
               </View>
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