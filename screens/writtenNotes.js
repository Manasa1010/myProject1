import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"
import firebase from "firebase"

import { FlatList } from "react-native"


export default class WrittenNotes extends React.Component{
  constructor(){
      super();
      this.state={
          stdentId:firebase.auth().currentUser.email,
          writtenNotesList:[]
      }
      this.requestRef=null;
  }
  getWrittenNotesList=()=>{
      this.requestRef=db.collection("writtenNotes")
      .onSnapshot((snapShot)=>{
          var writtenNotesList= snapShot.docs.map((doc)=>doc.data());
          this.setState({
              writtenNotesList:writtenNotesList
          })
      })
    }
    componentDidMount(){
        this.getWrittenNotesList();
    }
    componentWillUnmount(){
        this.requestRef();
    }
    
    renderItem=({item,i})=>{
        return (
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                {item.subject}
                </Text>
                <Text style={styles.buttonText}>
                {item.topic}
                </Text>
                <TouchableOpacity 
                onPress={()=>{
                   
                }}
                ><Text style={styles.buttonText}>View</Text></TouchableOpacity>
            
            </View>
                 
            
        )
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Header centerComponent={{text:"WrittenNotes"}}/>
               {this.state.writtenNotesList.length===0?(
                   <View>
                       <Text>Loading............</Text>
                   </View>
               ):(
                   <FlatList 
                  
                   keyExtractor={(item,index)=>index.toString()}
                   data={this.state.writtenNotesList}
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