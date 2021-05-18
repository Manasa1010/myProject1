import * as React from "react"
import {TouchableOpacity,Text,View} from "react-native"
import {createAppContainer,createSwitchNavigator } from "react-navigation";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator"
import {createBottomTabNavigator} from "react-navigation-tabs"
import HomeScreen from "./screens/homeScreen"
import AddWrittenNotes from "./screens/addWrittenNotes"
import CamNotes from "./screens/camNotes"
import WrittenNotes from "./screens/writtenNotes"

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>

    )
  }
}
var SwitchNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  AddWrittenNotes:AddWrittenNotes
})
var TabNavigator=createBottomTabNavigator({
  Home:{screen:SwitchNavigator},
  CamNotes:{screen:CamNotes},
  WrittenNotes:{screen:WrittenNotes}
})

var AppContainer=createAppContainer(TabNavigator);