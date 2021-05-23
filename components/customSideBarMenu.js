import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import {DrawerItems} from "react-navigation-drawer"
export default class CustomSideBarMenu extends React.Component{
  
    render(){
        return(
           <View>
               <View>
                   <DrawerItems {...this.props} />
               </View>
               <View>
                   <TouchableOpacity onPress={()=>{
                       firebase.auth().signOut(this.props.navigation.navigate("LoginScreen"))
                   }}><Text>Log out</Text></TouchableOpacity>
               </View>
           </View>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})