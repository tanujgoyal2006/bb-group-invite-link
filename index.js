// index.js
import React from "react";
import {NativeModules, Text} from "react-native";
import GroupItem from "./components/GroupItem";
const {RNCustomCode} = NativeModules;
 
export const applyCustomCode = externalCodeSetup => {
  externalCodeSetup.profileScreenHooksApi.setAfterProfileHeader(
   props => {
     console.log(props);
     return <Text>showing user id after header, {props.user.id}</Text>
   }); 
   externalCodeSetup.profileScreenHooksApi.setCustomHeaderBackground('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
   externalCodeSetup.groupsListHooksApi.setGroupItemComponent(props => <GroupItem {...props} />)
};