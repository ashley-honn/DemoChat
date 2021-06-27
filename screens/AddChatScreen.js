import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  async function createChat() {
    try {
      await db.collection("chats").add({ chatName });
      navigation.goBack();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        onChangeText={setChatName}
        onSubmitEditing={createChat}
      />
      <Button
        disabled={!chatName}
        onPress={createChat}
        title="Create a New Chat"
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});

