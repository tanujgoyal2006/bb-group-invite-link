//In custom_code/components/GroupItem.js...

import React from "react";
import {
   View,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
} from "react-native";

//Import BuddyBoss components and helper functions...
import AppTouchableOpacity from "@src/components/AppTouchableOpacity";
import { ItemTitle } from "@src/components/TextComponents";
import Icon from "@src/components/Icon";
import AuthWrapper from "@src/components/AuthWrapper";
import {
   groupInviteDescription,
   groupMembersCountTranslation,
   groupStatusTranslation,
} from "@src/utils";
import ActionButtonList from "@src/components/ActionButtons/ActionButtonList";
import GroupActionSheetWrapper from "@src/components/Group/GroupActionSheetWrapper";
import { GUTTER } from "@src/styles/global";
import FontManager from "@src/FontManager";
import { Typographies } from "@src/services/enums/branding";

const GroupItem = props => {
   const { item, global, colors, actions, userId, index, t, isInvite } = props;

   const styles = getStyles(colors);

   return (
       <AppTouchableOpacity
           onPress={item.onClick}
           style={[styles.item, index === 0 ? { paddingTop: 0 } : {}]}
       >
           <View
               style={[
                   global.row,
                   { justifyContent: "space-between", flex: 1, alignItems: "flex-start" }
               ]}
           >

               <View style={[global.bottomBorder, {
                   paddingBottom: 15, paddingBottom: 14,
                   marginLeft: 14,
                   flex: 1
               }]}>
                   //Group title
                   <ItemTitle global={global} style={{ marginBottom: 4 }}>
                       {item.title}
                   </ItemTitle>

                   //Show component depending on if user received invitation to join the group
                   {isInvite ? (
                       <View>
                           {groupInviteDescription(item, t, global, { marginBottom: 9 })}
                           {!!item.inviteMessage && <Text>{item.inviteMessage}</Text>}
                       </View>
                   ) : (
                       <View style={[global.row, {
                           flex: 1,
                           flexWrap: "wrap"
                       }]}>
                           <Text style={global.itemMeta}>
                               {groupStatusTranslation(t, item)}
                           </Text>
                           <View style={global.dotSep} />
                           <Text style={global.itemMeta}>
                               {groupMembersCountTranslation(t, item)}
                           </Text>
                       </View>
                   )}

                   <View style={{
                       marginTop: 16,
                       position: "relative"
                   }}>
                       <View style={{ alignItems: "flex-start" }}>

                           // Add short content
                           {item.shortContent != "" && <Text style={{ color: colors.labelTextColor, marginBottom: 10 }}> {item.shortContent} </Text> }

                           //Show a component depending on if user has already joined the group
                           {item.isMember && !isInvite ? (
                               <GroupActionSheetWrapper
                                   group={item}
                                   actionButtons={actions}
                                   {...{
                                       global,
                                       colors,
                                       t
                                   }}
                               >
                                   <View
                                       style={[
                                           global.wrappedButton,
                                           global.wrappedTextButton,
                                           global.row,
                                           { backgroundColor: colors.labelBgColor }
                                       ]}
                                   >
                                       <Icon
                                           icon={require("@src/assets/img/checkmark.png")}
                                           tintColor={colors.labelTextColor}
                                           styles={{
                                               width: 11,
                                               height: 11,
                                               marginLeft: -2,
                                               marginRight: 4
                                           }}
                                           rtlStyleFix={"handled"}
                                       />
                                       <Text
                                           style={[
                                               global.wrappedTextButtonLabel,
                                               { color: colors.labelTextColor }
                                           ]}
                                       >
                                           {item.role}
                                       </Text>
                                   </View>
                               </GroupActionSheetWrapper>
                           ) : (
                               <AuthWrapper>
                                   <ActionButtonList
                                       hideIcons={true}
                                       actionButtons={actions}
                                       object={item}
                                       t={t}
                                       color={colors.labelTextColor}
                                       buttonStyle={({ label }) => ({
                                           ...(label.match(/acceptInvite/)
                                               ? styles.inviteAcceptButton
                                               : label.match(/cancelInvite/)
                                                   ? styles.inviteRejectButton
                                                   : { marginRight: 10 }),
                                           backgroundColor: colors.labelBgColor
                                       })}
                                       textStyle={({ label }, color) =>
                                           label.match(/acceptInvite/)
                                               ? {
                                                   ...global.boldText,
                                                   color
                                               }
                                               : label.match(/cancelInvite/)
                                                   ? { ...global.boldText, color: colors.warningColor }
                                                   : { ...global.boldText, color }
                                       }
                                   />
                               </AuthWrapper>
                           )}
                       </View>
                   </View>
               </View>
           </View>
       </AppTouchableOpacity>
   );
};

const getStyles = colors =>
   StyleSheet.create({
       item: {
           flex: 1,
           marginTop: 15,
           paddingHorizontal: GUTTER
       },
       inviteAcceptButton: {
           flex: 0.65,
           marginRight: 4,
           backgroundColor: colors.highlightColor,
           height: FontManager.applyFontHeightAdjustment(36, Typographies.bodyText),
           justifyContent: "center",
           borderRadius: 8
       },
       inviteRejectButton: {
           flex: 1,
           paddingVertical: 5,
           marginLeft: 4,
           height: FontManager.applyFontHeightAdjustment(36, Typographies.bodyText),
           justifyContent: "center",
           borderRadius: 8,
           borderWidth: StyleSheet.hairlineWidth,
           borderColor: colors.borderColor
       }
   });

export default GroupItem;