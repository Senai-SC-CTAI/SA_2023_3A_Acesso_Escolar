import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Message = ({ text, isUser }) => {
  const avatarImage = isUser
    ? require('./assets/avatar.jpg') 
    : require('./assets/avatar.jpg');

  return (
    <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>
      {!isUser && <Image source={avatarImage} style={styles.avatar} />}
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{text}</Text>
      </View>
      {isUser && <Image source={avatarImage} style={styles.avatar} />}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    maxWidth: windowWidth * 0.8, // Limita a largura da caixa de mensagem a 80% da largura da tela
  },
  userMessage: {
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  otherMessage: {
    justifyContent: 'flex-start',
    marginRight: 'auto',
  },
  messageContent: {
    maxWidth: '100%',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f1f0f0',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default Message;
