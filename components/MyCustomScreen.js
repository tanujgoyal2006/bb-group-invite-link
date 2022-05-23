//In custom_code/components/MyCustomScreen.js...

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backButton } from '@src/utils';
import GroupInviteScreen from "@src/containers/Custom/Group/GroupInviteScreen";
const MyCustomScreen = (props) => (
    <GroupInviteScreen {...props}
        groupId={9}
    />
)

MyCustomScreen.navigationOptions = ({navigation, screenProps}) => {
  const {t, colors, calcFontSize, global} = screenProps;
  const {borderColor} = colors;
  return {
    headerTitle: (
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={global.appHeaderTitle}
      >
        {t("group:member chutiye hain")}
      </Text>
    ),
    tabBarVisible: false,
    headerLeft: backButton({
      navigation,
      headerColor: colors.headerIconColor,
      text: t("common:back"),
      textStyle: global.headerText
    }),
    headerStyle: {
      ...StyleSheet.flatten(global.header),
      borderBottomColor: borderColor,
      borderBottomWidth: StyleSheet.hairlineWidth
    }
  };
};

export default MyCustomScreen;

