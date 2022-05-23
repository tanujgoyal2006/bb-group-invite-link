import React from "react";
import {View, Text} from "react-native";
import MyCustomScreen from "./components/MyCustomScreen";
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>nayi sign up screen</Text>
        </View>
    ));
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
};
