import React from "react";
import {View, Text, Linking, StyleSheet, TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";
import { useSelector } from "react-redux";
import Clipboard from '@react-native-clipboard/clipboard';

export const applyCustomCode = (externalCodeSetup) => {


    const CustomAfterSearchInputComponent = withNavigation(props => {
        if (props.navigation.state.routeName === "SelectGroupMembers"){

            const groupId = props.navigation.state.params.groupId;

            if (groupId){
                const group = useSelector(state => state.groupsCache.byId.get(groupId.toString()));
                const copyToClipboard = () => {
                    Clipboard.setString(group?.link);
                    Linking.openURL(group?.link);
                  };
                return <View style={{marginBottom: 10}}>
                        <TouchableOpacity onPress={copyToClipboard}>
                        <Text 
                            style={styles.hyperlinkStyle}
                            >Click to copy group link and share!</Text>
                        </TouchableOpacity>
                </View>
            }

        }

        return null;

    })
    externalCodeSetup.searchScreenApiHooks.setAfterSearchInputComponent(CustomAfterSearchInputComponent)
    const styles = StyleSheet.create({
        hyperlinkStyle: {
          color: 'blue',
        }
      });
}