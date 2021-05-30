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
            <View>
                <Text>
                {item.subject}
                </Text>
                <Text>
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
var styles=StyleSheet.create({
    textinput:{
        padding:10
    }
})