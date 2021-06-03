import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"
import firebase from "firebase"

import { FlatList } from "react-native"


export default class CamNotes extends React.Component{
  constructor(){
      super();
      this.state={
          stdentId:firebase.auth().currentUser.email,
          camNotesList:[]
      }
      this.requestRef=null;
  }
  getcamNotesList=()=>{
      this.requestRef=db.collection("camNotes")
      .onSnapshot((snapShot)=>{
          var camNotesList= snapShot.docs.map((doc)=>doc.data());
          this.setState({
              camNotesList:camNotesList
          })
      })
    }
    componentDidMount(){
        this.getcamNotesList();
    }
    componentWillUnmount(){
        this.requestRef();
    }
    
    renderItem=({item,i})=>{
        return (
            <View>
                <Text>{item.std}</Text>
                <Text>{item.chapter}</Text>
                <TouchableOpacity 
                onPress={()=>{
                   this.props.navigation.navigate("ImageNotes",{"item":item})
                }}
                ><Text>View</Text></TouchableOpacity>
            
            </View>
                 
            
        )
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Header centerComponent={{text:"camNotes"}}/>
               {this.state.camNotesList.length===0?(
                   <View>
                       <Text>Loading............</Text>
                   </View>
               ):(
                   <FlatList 
                   keyExtractor={(item,index)=>index.toString()}
                   data={this.state.camNotesList}
                   renderItem={this.renderItem}
                   />
               )}
               
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