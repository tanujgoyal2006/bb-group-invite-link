//In custom_code/components/MyCustomScreen.js...

import React from 'react';
import { View, Button } from 'react-native';
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";
import GroupsScreen from "@src/containers/Custom/GroupsScreen";

const MyCustomScreen = (props) => {

   const groupId = 8;
   const state = useSelector((state) => state);

   const goToFeaturedGroup = () => {

     const group = state.groupsCache.byId.get(groupId ? groupId.toString() : "");

     //Navigate to featured group
     props.navigation.dispatch(
       NavigationActions.navigate({
         routeName: "GroupsSingleScreen",
         params: {
           group: group
         },
         key: `GroupsSingleScreen-${group.id.toString()}`
       })
     )
  }

 return (
   <View style={{ flex: 1 }}>

     <View style={{flex: 0.8}}>
       <GroupsScreen {...props} showSearch={false} screenTitle="My Groups" hideFilters={true} hideTitle={false} hideNavigationHeader={true} />
     </View>

     <View style={{ flex: 0.2, backgroundColor: props.screenProps.colors.bodyFrontBg }}>
        <Button title="Go to featured group" onPress={() => goToFeaturedGroup()} />
     </View>

   </View>)
}

MyCustomScreen.navigationOptions = {
 header: null
}

export default MyCustomScreen;