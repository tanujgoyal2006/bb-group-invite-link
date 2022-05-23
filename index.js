import React from "react";
import {View, Text} from "react-native";
import MyCustomScreen from "./components/MyCustomScreen";
export const applyCustomCode = externalCodeSetup => {

 externalCodeSetup.navigationApi.addNavigationRoute(
   "book",
   "BookScreen",
   MyCustomScreen,
   "All"
 );
 externalCodeSetup.navigationApi.addNavigationRoute(
   "book",
   "BookScreen",
   MyCustomScreen,
   "Main"
 );
}