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
          userId:firebase.auth().currentUser.email,
          writtenNotesList:[]
      }
      this.requestRef=null;
  }
  getWrittenNotesList=()=>{
      this.requestRef=db.collection("writtenNotes").where(userId,"==",this.state.userId)
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
    keyExtractor=(item,index)=>{
        index.toString();
    };
    renderItem=({item,i})=>{
        return (
            <ListItem
            key={i}
            title={item.subject}
            subtitle={item.topic}
            titleStyle={{color:"blue",fontWeight:"bold"}}
            rightElement={
                <TouchableOpacity 
                onPress={()=>{
                    this.props.navigation.navigate("addWrittenNotes",{
                    details:item
                })
                }}
                ><Text>View</Text></TouchableOpacity>
            }
            />
        )
    }
    render(){
        return(
            <KeyboardAvoidingView>
               {this.state.writtenNotesList.length===0?(
                   <View>
                       <Text>Loading............</Text>
                   </View>
               ):(
                   <FlatList 
                   keyExtractor={this.keyExtractor}
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