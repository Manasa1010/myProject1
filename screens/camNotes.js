import * as React from "react"
import {View,TouchableOpacity,Text, KeyboardAvoidingView, TextInput,StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config"
import firebase from "firebase"
import {ListItem} from "react-native-elements"
import { FlatList } from "react-native"


export default class WrittenNotes extends React.Component{
  constructor(){
      super();
      this.state={
          stdentId:firebase.auth().currentUser.email,
          camNotesList:[]
      }
      this.requestRef=null;
  }
  getWrittenNotesList=()=>{
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
                <Text>
                {item.subject}
                {item.topic}
                </Text>
                <TouchableOpacity 
                onPress={()=>{
                   
                }}
                ><Text>View</Text></TouchableOpacity>
            
            </View>
                 
            
        )
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <Header centerComponent={{text:"camNotes"}}/>
               {this.state.camNotesList.length===0?(
                   <View>
                       <Text>Loading............</Text>
                   </View>
               ):(
                   <FlatList 
                   keyExtractor={(item,idexx)=>indexedDB.toString()}
                   data={this.state.camNotesList}
                   renderItem={this.renderItem}
                   />
               )}
               
            </KeyboardAvoidingView>
        )
    }
}
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})