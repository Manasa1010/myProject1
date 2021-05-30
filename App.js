import * as React from "react"
import {TouchableOpacity,Text,View} from "react-native"
import {createAppContainer,createSwitchNavigator } from "react-navigation";

import {createBottomTabNavigator} from "react-navigation-tabs"
import Home from "./screens/homeScreen"
import AddWrittenNotes from "./screens/addWrittenNotes"
import CamNotes from "./screens/camNotes"
import WrittenNotes from "./screens/writtenNotes"
import LoginScreen from "./screens/loginScreen"
import {createDrawerNavigator} from "react-navigation-drawer"
import CustomSideBarMenu from "./components/customSideBarMenu";
import EditProfileInfo from "./screens/editProfileInfo";
import AddCamNotes from "./screens/addCamNotes"
export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>

    )
  }
}
var SwitchNavigator2=createSwitchNavigator({
  Home:Home,
  AddWrittenNotes:AddWrittenNotes,
  AddCamNotes:AddCamNotes
})

var TabNavigator=createBottomTabNavigator({
  Home:{screen:SwitchNavigator2},
  CamNotes:{screen:CamNotes},
  WrittenNotes:{screen:WrittenNotes}
})

var DrawerNavigator=createDrawerNavigator({
  Home:{screen:TabNavigator},
 EditProfileInfo:{screen:EditProfileInfo}
},{contentComponent:CustomSideBarMenu},{initialRouteName:"Home"})
var SwitchNavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  HomeScreen:DrawerNavigator,
  
})

var AppContainer=createAppContainer(SwitchNavigator);



//work on edit profile info add written notes flatlist 
//cam notes flatlist