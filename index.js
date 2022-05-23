import React from "react";
import {View, Text} from "react-native";
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>I have replaced my Sign Up Screen.</Text>
        </View>
    ));
};