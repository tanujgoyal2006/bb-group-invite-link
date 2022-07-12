//In custom_code/components/MyCustomScreen.js...

import React from 'react';
import GroupSendInvites from "@src/containers/Custom/Group/GroupSendInvites";
const MyCustomScreen = (props) => (
    <GroupSendInvites {...props}
      groupId={9}
      showSearch={false}
      hideBackButton={true}
      inviteFilters={["invite", "inviteFriends"]}
      screenTitle="Send Invitations"
      hideNavigationHeader={false}
    />
)
console.log('testing');
MyCustomScreen.navigationOptions = {
  header: null
}

export default MyCustomScreen;