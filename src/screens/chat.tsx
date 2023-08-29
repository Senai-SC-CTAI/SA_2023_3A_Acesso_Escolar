import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export function ScreenE() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      text: inputText,
      isMyMessage: true, // You can modify this based on the sender
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const ChatMessage = ({ text, isMyMessage }) => (
    <View style={{ flexDirection: isMyMessage ? 'row-reverse' : 'row', alignItems: 'center', marginVertical: 5 }}>
      <Icon name="user" type="font-awesome" size={30} />
      <View style={{ maxWidth: '70%', backgroundColor: isMyMessage ? '#DCF8C6' : '#E5E5EA', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, marginLeft: 5, marginRight: 5 }}>
        <Text>{text}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ChatMessage text={item.text} isMyMessage={item.isMyMessage} />}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <TextInput
          style={{ flex: 1, borderColor: '#E5E5EA', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, marginRight: 10 }}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
        <Icon
          name="send"
          type="font-awesome"
          size={30}
          color="#007BFF"
          onPress={handleSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});