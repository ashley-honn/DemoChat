import React from "react";
import { StyleSheet } from "react-native";

import { ListItem, Avatar } from "react-native-elements";

const CustomeListItem = ({ id, chatName }) => {
  return (
    <ListItem key={id}>
      <Avatar
        source={{
          uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          The last message of the chat.The last message of the chat. The last
          message of the chat.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomeListItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
  },
});
