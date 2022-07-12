import React from "react";
import {View, Text, Linking, StyleSheet} from "react-native";
import { withNavigation } from "react-navigation";
import { useSelector } from "react-redux";

export const applyCustomCode = (externalCodeSetup) => {


    const CustomAfterSearchInputComponent = withNavigation(props => {
        
        if (props.navigation.state.routeName === "SelectGroupMembers"){

            const groupId = props.navigation.state.params.groupId;

            if (groupId){
                const group = useSelector(state => state.groupsCache.byId.get(groupId.toString()));

                return <View style={{marginBottom: 10}}>
                        <Text 
                            style={styles.hyperlinkStyle}
                            onPress={() => {
                            Linking.openURL(group?.link);
                        }}>Click to copy group link and share!</Text>
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