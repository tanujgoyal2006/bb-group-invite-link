//In components/GroupFiltersCustom.js...

import React, { useState } from "react";
import { TextInput, View, Button, Text, Switch } from 'react-native'
import { useDispatch } from "react-redux";
import { groupsRequested } from "@src/actions/socialGroups";
import { getExternalCodeSetup } from "@src/externalCode/externalRepo";
import withGlobalStyles from "@src/components/hocs/withGlobalStyles";

const hook = getExternalCodeSetup().groupsListHooksApi;

getExternalCodeSetup().indexScreenApiHooks.setHeaderHeight((defaultHeaderHeight, filterType, navigation) => {

   if (filterType === "groups")
     return 300;

   return defaultHeaderHeight;
 });

const screenName = "HomeGroupsScreen";

const filter = "all"; //"all", "personal", "my-groups", "invites"
const subfilters = {type: "active"}; // "active", "newest", "alphabetical", "popular";

const refresh = true; //Set to true to refresh list
const searchTerm = ""


const GroupFiltersCustom = (props) => {

   const { navigation, colors } = props;

   const dispatch = useDispatch();

   //If showing the matched screen, show custom filter before displaying list component
   if (navigation?.state?.routeName === screenName) {

       const [isEnabled, setIsEnabled] = useState(false);

       const toggleSwitch = () => setIsEnabled(previousState => !previousState)

       const handleSubmit = () => {

           //Set custom parameters before fetching
           hook.setFetchParamsFilter((props) => {

               //You can add more parameters such as "subject", "keyword" etc...
               return {
                   ...props,
                   show_hidden: isEnabled
               }
           })

           //Dispatch redux action to call api using customized filters
           dispatch(groupsRequested(filter, subfilters, refresh, searchTerm));

       }

       return <View style={{ backgroundColor: colors.whiteColor, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

           <Text>Show hidden groups?</Text>
           <Switch
               trackColor={{ false: "#767577", true: "#81b0ff" }}
               thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
               ios_backgroundColor="#3e3e3e"
               onValueChange={toggleSwitch}
               value={isEnabled}
           />
           <Button
               onPress={() => handleSubmit()}
               title="Filter"
           />
       </View>
   }

   return null;

}

export default withGlobalStyles(GroupFiltersCustom);